var layers = {};
layers['vworld'] = new ol.layer.Tile({
    title : 'VWorld Gray Map',
    visible : true,
    type : 'base',
    source : new ol.source.XYZ({
        url : 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png'
    })
});
// vectorSource 선언
var vectorSource = new ol.source.Vector({
    projection: 'EPSG:4326'
});
// vectorLayer 선언
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});

// 지도뿌리기
var map = new ol.Map({
    layers : [ layers['vworld'], vectorLayer ],
    target : 'nb-map',
    view : new ol.View({
        // center: ol.proj.transform([getLongi, getLati ], 'EPSG:4326', 'EPSG:3857'),
        center: ol.proj.fromLonLat([127.5, 36]),        // center 좌표
        zoom: 7,                                        // 초기화면 zoom level
        minZoom: 6,                                        // 최소 zoom level
        maxZoom: 19                                        // 최대 zoom level
    })
});