var wms_layers = [];

var format_CostaRica_0 = new ol.format.GeoJSON();
var features_CostaRica_0 = format_CostaRica_0.readFeatures(json_CostaRica_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostaRica_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostaRica_0.addFeatures(features_CostaRica_0);
var lyr_CostaRica_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostaRica_0, 
                style: style_CostaRica_0,
                popuplayertitle: 'Costa Rica',
                interactive: true,
    title: 'Costa Rica<br />\
    <img src="styles/legend/CostaRica_0_0.png" /> ALAJUELA<br />\
    <img src="styles/legend/CostaRica_0_1.png" /> CARTAGO<br />\
    <img src="styles/legend/CostaRica_0_2.png" /> GUANACASTE<br />\
    <img src="styles/legend/CostaRica_0_3.png" /> HEREDIA<br />\
    <img src="styles/legend/CostaRica_0_4.png" /> LIMON<br />\
    <img src="styles/legend/CostaRica_0_5.png" /> PUNTARENAS<br />\
    <img src="styles/legend/CostaRica_0_6.png" /> SAN JOSE<br />\
    <img src="styles/legend/CostaRica_0_7.png" /> <br />' });
var format_Museo_1 = new ol.format.GeoJSON();
var features_Museo_1 = format_Museo_1.readFeatures(json_Museo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museo_1.addFeatures(features_Museo_1);
var lyr_Museo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museo_1, 
                style: style_Museo_1,
                popuplayertitle: 'Museo',
                interactive: true,
    title: 'Museo<br />\
    <img src="styles/legend/Museo_1_0.png" /> Museo comunitario<br />\
    <img src="styles/legend/Museo_1_1.png" /> Museo Nacional<br />\
    <img src="styles/legend/Museo_1_2.png" /> Museo Universitario<br />\
    <img src="styles/legend/Museo_1_3.png" /> <br />' });

lyr_CostaRica_0.setVisible(true);lyr_Museo_1.setVisible(true);
var layersList = [lyr_CostaRica_0,lyr_Museo_1];
lyr_CostaRica_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_PROV': 'NOM_PROV', 'NOM_CANT_1': 'NOM_CANT_1', 'Museos por Canton_Provincia': 'Museos por Canton_Provincia', 'Museos por Canton_Canton': 'Museos por Canton_Canton', 'Museos por Canton_Cantidad de Museos': 'Museos por Canton_Cantidad de Museos', });
lyr_Museo_1.set('fieldAliases', {'Nombre del Museo': 'Nombre del Museo', 'Provincia': 'Provincia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Descripción': 'Descripción', 'Imagen': 'Imagen', 'Tipo de Museo': 'Tipo de Museo', });
lyr_CostaRica_0.set('fieldImages', {'OBJECTID': 'Range', 'NOM_PROV': 'TextEdit', 'NOM_CANT_1': 'TextEdit', 'Museos por Canton_Provincia': 'TextEdit', 'Museos por Canton_Canton': 'TextEdit', 'Museos por Canton_Cantidad de Museos': 'Range', });
lyr_Museo_1.set('fieldImages', {'Nombre del Museo': 'TextEdit', 'Provincia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Descripción': 'TextEdit', 'Imagen': 'TextEdit', 'Tipo de Museo': 'TextEdit', });
lyr_CostaRica_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'NOM_PROV': 'hidden field', 'NOM_CANT_1': 'hidden field', 'Museos por Canton_Provincia': 'hidden field', 'Museos por Canton_Canton': 'hidden field', 'Museos por Canton_Cantidad de Museos': 'hidden field', });
lyr_Museo_1.set('fieldLabels', {'Nombre del Museo': 'no label', 'Provincia': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Descripción': 'no label', 'Imagen': 'no label', 'Tipo de Museo': 'no label', });
lyr_Museo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});