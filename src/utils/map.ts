import AMapLoader from '@amap/amap-jsapi-loader';

export function initMapApi() {
  return AMapLoader.load({
    key: '024593306866d12e0b5e3e015e1bf4d3',
    version: '1.4.15',
    plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.MarkerClusterer'],
    AMapUI: {
      version: '1.1',
    },
  });
}
