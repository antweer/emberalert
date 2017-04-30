var dataUrl = '/data/MODIS_C6_Global_24h.csv';
var maxZoom = 9;
var fieldSeparator = ',';
var baseUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
var baseAttribution = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
var subdomains = '1234';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 25};
var labelColumn = "Name";
var opacity = 1.0;