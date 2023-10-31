<template>
  <div>
    <BasicModal
      v-bind="$attrs"
      @register="register"
      :title="getTitle"
      width="60%"
      :minHeight="500"
      @ok="handleSubmit"
    >
      <a-input
        v-model:value="searchValue"
        id="map-search"
        :placeholder="getTitle"
        @change="hnadleChangeSearch"
      >
        <template #suffix>
          <Icon icon="ant-design:search-outlined" />
        </template>
      </a-input>
      <div ref="wrapRef" id="map" style="height: 480px; width: 100%"></div>
    </BasicModal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, nextTick, computed } from 'vue';
  import Icon from '@/components/Icon/Icon.vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { initMapApi } from '/@/utils/map';

  //子组件向父组件通讯
  const emit = defineEmits(['register', 'success']);
  //国际化
  const { t } = useI18n();

  const regionCode = ref('');
  const latitude = ref('');
  const longitude = ref('');
  const searchValue = ref('');

  let wrapRef = ref<HTMLDivElement | null>(null);
  let map = undefined;
  let geocoder = undefined;
  let poiPicker = undefined;

  //注册Model
  const [register, { setModalProps, closeModal }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false });
    regionCode.value = data?.regionCode;
    latitude.value = data?.latitude;
    longitude.value = data?.longitude;
    searchValue.value = data?.address;
    initMap();
  });

  const getTitle = computed(() => t('system.site.form.lat'));

  async function initMap() {
    await nextTick();
    await initMapApi();
    const wrapEl = unref(wrapRef);
    if (!wrapEl) return;
    const AMap = (window as any).AMap;
    const AMapUI = (window as any).AMapUI;
    map = new AMap.Map('map', {
      center: [longitude.value, latitude.value], // [经度, 纬度]
      resizeEnable: true,
      zoom: 11,
    });
    const selectdCity = regionCode.value.slice(-1);
    AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      poiPicker = new PoiPicker({
        input: 'map-search',
        city: selectdCity,
        autocompleteOptions: {
          city: selectdCity,
          citylimit: true,
        },
        placeSearchOptions: {
          city: selectdCity,
          citylimit: true,
          pageSize: 5,
        },
      });
      // 初始化poiPicker
      // poiPicker.setCity(selectdCity);
      poiPickerReady(map, poiPicker);
    });
    disposeMap(map);
  }

  function disposeMap(map) {
    const AMap = (window as any).AMap;
    AMap.plugin(['AMap.Scale', 'AMap.Geocoder', 'AMap.Autocomplete'], function () {
      map.addControl(new AMap.Scale());
      // eslint-disable-next-line
      geocoder = new AMap.Geocoder({
        city: '', // 城市设为北京，默认：“全国”
        radius: 1000, // 范围，默认：500
      });
    });
    map.on('click', function (e) {
      regeoCode(map, geocoder, e.lnglat);
    });
    setInterval(() => {
      if (latitude.value) {
        const AMap = (window as any).AMap;
        var marker = new AMap.Marker({
          position: new AMap.LngLat(longitude.value, latitude.value),
        });
        map.add(marker);
      }
    }, 800);
  }

  function regeoCode(map, geocoder, lnglat) {
    map.clearMap();
    const AMap = (window as any).AMap;
    var marker = new AMap.Marker();
    map.add(marker);
    marker.setPosition(lnglat);
    geocoder.getAddress(lnglat, function (status, result) {
      if (status === 'complete' && result.regeocode) {
        var address = result.regeocode.formattedAddress;
        var province = result.regeocode.addressComponent.province; // 省
        var city = result.regeocode.addressComponent.city;
        var district = result.regeocode.addressComponent.district; // 乡镇
        latitude.value = lnglat.lat;
        longitude.value = lnglat.lng;
        searchValue.value = address.replace(province, '').replace(city, '').replace(district, '');
      } else {
        alert('根据经纬度查询地址失败');
      }
    });
  }

  function poiPickerReady(map, poiPicker) {
    // window.poiPicker = poiPicker;
    map.clearMap();
    const AMap = (window as any).AMap;
    var marker = new AMap.Marker();
    poiPicker.on('poiPicked', function (poiResult) {
      var source = poiResult.source;
      var poi = poiResult.item;
      var info = {
        source: source,
        id: poi.id,
        name: poi.name,
        location: poi.location.toString(),
        address: poi.address,
      };
      const location = info.location.split(',');
      latitude.value = location[1];
      longitude.value = location[0];
      searchValue.value = info.name;
      map.clearMap();
      marker.setMap(map);
      marker.setPosition(poi.location);
      map.setCenter(marker.getPosition());
    });
  }

  function hnadleChangeSearch() {
    const AMapUI = (window as any).AMapUI;
    const selectdCity = regionCode.value.slice(-1);
    AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      poiPicker = new PoiPicker({
        input: 'map-search',
        city: selectdCity,
        autocompleteOptions: {
          city: selectdCity,
          citylimit: true,
        },
        placeSearchOptions: {
          city: selectdCity,
          citylimit: true,
          pageSize: 5,
        },
      });
      // 初始化poiPicker
      poiPickerReady(map, poiPicker);
    });
  }

  async function handleSubmit() {
    try {
      setModalProps({ confirmLoading: true });
      closeModal();
      emit('success', {
        latitude: latitude.value,
        longitude: longitude.value,
        address: searchValue.value,
      });
      searchValue.value = '';
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
