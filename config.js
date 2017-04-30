var dataUrl = 'data/MODIS_C6_Global_24h.csv';
var maxZoom = 9;
var fieldSeparator = ',';
var baseUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
var baseAttribution = 'Data, imagery and map information provided by <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
var subdomains = '1234';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 0};
var labelColumn = "Name";
var opacity = 1.0;