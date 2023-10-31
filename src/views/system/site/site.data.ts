import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { city } from '/@/utils/city';
import { mapping } from '/@/utils/city/mapping';
import { optionDict } from '/@/api/system/dict';
import { selectSite } from '/@/api/system/site';
import { uploadImage } from '/@/api/common/upload';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('system.site.table.columns.id'),
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: t('system.site.table.columns.name'),
    dataIndex: 'name',
    align: 'left',
    width: 400,
  },
  {
    title: t('system.site.table.columns.siteType'),
    dataIndex: 'siteType',
    width: 120,
    customRender: ({ record }) => {
      const type = record.siteType;
      const one = ~~type === 1;
      const two = ~~type === 2;
      const color = one ? 'green' : two ? 'blue' : 'cyan';
      const text = one ? '厂商' : two ? '经销商' : '站点';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: t('system.site.table.columns.leader'),
    dataIndex: 'leader',
    width: 120,
  },
  {
    title: t('system.site.table.columns.leaderPhone'),
    dataIndex: 'leaderPhone',
    width: 160,
  },
  {
    title: t('system.site.table.columns.region'),
    dataIndex: 'region',
    width: 300,
  },
  {
    title: t('system.site.table.columns.address'),
    dataIndex: 'address',
    width: 300,
  },
  {
    title: t('system.site.table.columns.siteLogo'),
    dataIndex: 'siteLogo',
    width: 160,
  },
  {
    title: t('system.site.table.columns.createTime'),
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: t('system.site.form.siteId'),
    component: 'Input',
    show: false,
  },
  {
    field: 'parentId',
    label: t('system.site.form.parentId'),
    component: 'ApiTreeSelect',
    componentProps: {
      api: selectSite,
      valueField: 'id',
      params: {
        dictType: 'all',
      },
      placeholder: t('common.chooseText') + t('system.site.form.parentId'),
    },
    required: false,
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'name',
    label: t('system.site.form.name'),
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: t('common.inputText') + t('system.site.form.name'),
    },
    required: true,
  },
  {
    field: 'siteType',
    label: t('system.site.form.siteType'),
    component: 'RadioButtonGroup',
    defaultValue: '1',
    componentProps: {
      // api: optionDict,
      // params: {
      //   dictType: 'siteType',
      // },
      // isBtn: true,
      // numberToString: true,
    },
    required: true,
  },
  {
    field: 'leader',
    label: t('system.site.form.leader'),
    component: 'Input',
    componentProps: {
      maxlength: 32,
      placeholder: t('common.inputText') + t('system.site.form.leader'),
    },
    required: true,
  },
  {
    field: 'leaderPhone',
    label: t('system.site.form.leaderPhone'),
    component: 'Input',
    componentProps: {
      maxlength: 11,
      placeholder: t('common.inputText') + t('system.site.form.leaderPhone'),
    },
    rules: [
      {
        required: true,
      },
      {
        pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
        message: t('system.site.form.leaderPhone') + t('common.errorFormat'),
        trigger: 'change',
      },
    ],
  },
  {
    field: 'regionCode',
    label: t('system.site.form.regionCode'),
    component: 'Cascader',
    required: true,
    componentProps: ({ formModel }) => {
      return {
        options: city,
        onChange: (e) => {
          const selectdCity = e.slice(-1);
          const [lng, lat] = mapping[selectdCity].center.split(',');
          formModel['lat'] = lat;
          formModel['lng'] = lng;
          const region = e.map((code) => mapping[code].label).join('-');
          formModel['region'] = region;
        },
        placeholder: t('common.chooseText') + t('system.site.form.regionCode'),
      };
    },
  },
  {
    field: 'region',
    label: t('system.site.form.region'),
    component: 'Input',
    required: true,
    show: false,
  },
  {
    field: 'address',
    label: t('system.site.form.address'),
    component: 'Input',
    required: true,
    slot: 'address',
    dynamicDisabled: ({ values }) => {
      return !values.regionCode;
    },
  },
  {
    field: 'siteLogos',
    label: t('system.site.form.siteLogo'),
    component: 'Upload',
    componentProps: {
      emptyHidePreview: true,
      maxNumber: 1,
      maxSize: 5,
      accept: ['image/*'],
      api: uploadImage,
      uploadParams: {
        module: 'site/logo',
      },
    },
  },
  {
    field: 'lng',
    label: '经度',
    component: 'Input',
    dynamicDisabled: false,
    show: false,
    required: false,
  },
  {
    field: 'lat',
    label: '纬度',
    component: 'Input',
    dynamicDisabled: false,
    show: false,
    required: false,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('system.site.form.name'),
    component: 'Input',
  },
  {
    field: 'leader',
    label: t('system.site.form.leader'),
    component: 'Input',
    componentProps: {
      maxLength: 64,
    },
    colProps: { span: 6 },
  },
  {
    field: 'leaderPhone',
    label: t('system.site.form.leaderPhone'),
    component: 'Input',
    componentProps: {
      maxLength: 11,
    },
    colProps: { span: 6 },
  },
  {
    field: 'siteType',
    label: t('system.site.form.siteType'),
    component: 'ApiSelect',
    componentProps: {
      api: optionDict,
      params: {
        dictType: 'siteType',
      },
      numberToString: true,
    },
  },
  {
    field: 'regionCode',
    label: t('system.site.form.regionCode'),
    component: 'Cascader',
    componentProps: {
      options: city,
    },
  },
];
