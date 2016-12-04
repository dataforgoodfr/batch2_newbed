var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
}),
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Thunderforest Landscape',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),

new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
}),
new ol.layer.Tile({
    'title': 'Stamen Watercolor',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
})
]
});
var format_regions = new ol.format.GeoJSON();
var features_regions = format_regions.readFeatures(geojson_regions, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions = new ol.source.Vector();
jsonSource_regions.addFeatures(features_regions);var lyr_regions = new ol.layer.Vector({
                source:jsonSource_regions, 
                style: style_regions,
                title: "regions"
            });
var format_CommunesINSEE = new ol.format.GeoJSON();
var features_CommunesINSEE = format_CommunesINSEE.readFeatures(geojson_CommunesINSEE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesINSEE = new ol.source.Vector();
jsonSource_CommunesINSEE.addFeatures(features_CommunesINSEE);var lyr_CommunesINSEE = new ol.layer.Vector({
                source:jsonSource_CommunesINSEE, 
                style: style_CommunesINSEE,
                title: "Communes INSEE"
            });
var format_CommunesayantInfrasdeTypeA = new ol.format.GeoJSON();
var features_CommunesayantInfrasdeTypeA = format_CommunesayantInfrasdeTypeA.readFeatures(geojson_CommunesayantInfrasdeTypeA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesayantInfrasdeTypeA = new ol.source.Vector();
jsonSource_CommunesayantInfrasdeTypeA.addFeatures(features_CommunesayantInfrasdeTypeA);var lyr_CommunesayantInfrasdeTypeA = new ol.layer.Vector({
                source:jsonSource_CommunesayantInfrasdeTypeA, 
                style: style_CommunesayantInfrasdeTypeA,
                title: "Communes ayant Infras de Type A"
            });
var format_CommunesayantInfrasdeTypeABC = new ol.format.GeoJSON();
var features_CommunesayantInfrasdeTypeABC = format_CommunesayantInfrasdeTypeABC.readFeatures(geojson_CommunesayantInfrasdeTypeABC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesayantInfrasdeTypeABC = new ol.source.Vector();
jsonSource_CommunesayantInfrasdeTypeABC.addFeatures(features_CommunesayantInfrasdeTypeABC);var lyr_CommunesayantInfrasdeTypeABC = new ol.layer.Vector({
                source:jsonSource_CommunesayantInfrasdeTypeABC, 
                style: style_CommunesayantInfrasdeTypeABC,
                title: "Communes ayant Infras de Type A+B+C"
            });
var format_Communescompltes = new ol.format.GeoJSON();
var features_Communescompltes = format_Communescompltes.readFeatures(geojson_Communescompltes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communescompltes = new ol.source.Vector();
jsonSource_Communescompltes.addFeatures(features_Communescompltes);var lyr_Communescompltes = new ol.layer.Vector({
                source:jsonSource_Communescompltes, 
                style: style_Communescompltes,
                title: "Communes complètes"
            });

lyr_regions.setVisible(false);lyr_CommunesINSEE.setVisible(false);lyr_CommunesayantInfrasdeTypeA.setVisible(true);lyr_CommunesayantInfrasdeTypeABC.setVisible(true);lyr_Communescompltes.setVisible(true);
var layersList = [baseLayer,lyr_regions,lyr_CommunesINSEE,lyr_CommunesayantInfrasdeTypeA,lyr_CommunesayantInfrasdeTypeABC,lyr_Communescompltes];
lyr_regions.set('fieldAliases', {});
lyr_CommunesINSEE.set('fieldAliases', {'NOM': 'NOM', 'ENF_HEBER': 'Hébergement Enfance', 'ACT_EDUC': 'Action Educative', 'CHRS': 'CHRS', 'ACC_ASILE': 'Accueil Demandeurs Asile', 'AUTRES_SOC': 'Autres Actions Sociales', 'TRAV_PROT': 'Travail Protégé', 'HEB_PROV': 'Hébergement Provisoire', 'ETA_PSY': 'Etablissement Psychiatrique', 'URGENCES': 'Urgences', 'MATERNITE': 'Maternité', });
lyr_CommunesayantInfrasdeTypeA.set('fieldAliases', {'NOM': 'NOM', 'ENF_HEBER': 'Hébergement Enfance', 'ACT_EDUC': 'Action Educative', 'CHRS': 'CHRS', 'ACC_ASILE': 'Accueil Demandeurs Asile', 'AUTRES_SOC': 'Autres Actions Sociales', 'TRAV_PROT': 'Travail Protégé', 'HEB_PROV': 'Centre Hébergement Provisoire', 'ETA_PSY': 'Etablissement Psychiatrique', 'URGENCES': 'Urgences', 'MATERNITE': 'Maternité', });
lyr_CommunesayantInfrasdeTypeABC.set('fieldAliases', {'NOM': 'NOM', 'ENF_HEBER': 'Hébergement Enfance', 'ACT_EDUC': 'Action Educative', 'CHRS': 'CHRS', 'ACC_ASILE': 'Accueil Demandeur Asile', 'AUTRES_SOC': 'Autres Actions Sociales', 'TRAV_PROT': 'Travail Protégé', 'HEB_PROV': 'Hébergement Provisoire', 'ETA_PSY': 'Etablissement Psychiatrique', 'URGENCES': 'Urgences', 'MATERNITE': 'Maternité', });
lyr_Communescompltes.set('fieldAliases', {'NOM': 'NOM', 'ENF_HEBER': 'Hébergement enfance', 'ACT_EDUC': 'Action Educative', 'CHRS': 'CHRS', 'ACC_ASILE': 'Accueil Demandeurs Asile', 'AUTRES_SOC': 'Autres actions sociales', 'TRAV_PROT': 'Travail protégé', 'HEB_PROV': 'Centre Hébergement Provisoire', 'ETA_PSY': 'Etablissement Psychiatrique', 'URGENCES': 'Urgence', 'MATERNITE': 'Maternité', });
lyr_regions.set('fieldImages', {});
lyr_CommunesINSEE.set('fieldImages', {'NOM': 'TextEdit', 'ENF_HEBER': 'TextEdit', 'ACT_EDUC': 'TextEdit', 'CHRS': 'TextEdit', 'ACC_ASILE': 'TextEdit', 'AUTRES_SOC': 'TextEdit', 'TRAV_PROT': 'TextEdit', 'HEB_PROV': 'TextEdit', 'ETA_PSY': 'TextEdit', 'URGENCES': 'TextEdit', 'MATERNITE': 'TextEdit', });
lyr_CommunesayantInfrasdeTypeA.set('fieldImages', {'NOM': 'TextEdit', 'ENF_HEBER': 'TextEdit', 'ACT_EDUC': 'TextEdit', 'CHRS': 'TextEdit', 'ACC_ASILE': 'TextEdit', 'AUTRES_SOC': 'TextEdit', 'TRAV_PROT': 'TextEdit', 'HEB_PROV': 'TextEdit', 'ETA_PSY': 'TextEdit', 'URGENCES': 'TextEdit', 'MATERNITE': 'TextEdit', });
lyr_CommunesayantInfrasdeTypeABC.set('fieldImages', {'NOM': 'TextEdit', 'ENF_HEBER': 'TextEdit', 'ACT_EDUC': 'TextEdit', 'CHRS': 'TextEdit', 'ACC_ASILE': 'TextEdit', 'AUTRES_SOC': 'TextEdit', 'TRAV_PROT': 'TextEdit', 'HEB_PROV': 'TextEdit', 'ETA_PSY': 'TextEdit', 'URGENCES': 'TextEdit', 'MATERNITE': 'TextEdit', });
lyr_Communescompltes.set('fieldImages', {'NOM': 'TextEdit', 'ENF_HEBER': 'TextEdit', 'ACT_EDUC': 'TextEdit', 'CHRS': 'TextEdit', 'ACC_ASILE': 'TextEdit', 'AUTRES_SOC': 'TextEdit', 'TRAV_PROT': 'TextEdit', 'HEB_PROV': 'TextEdit', 'ETA_PSY': 'TextEdit', 'URGENCES': 'TextEdit', 'MATERNITE': 'TextEdit', });
lyr_regions.set('fieldLabels', {});
lyr_CommunesINSEE.set('fieldLabels', {'NOM': 'no label', 'ENF_HEBER': 'no label', 'ACT_EDUC': 'no label', 'CHRS': 'no label', 'ACC_ASILE': 'no label', 'AUTRES_SOC': 'no label', 'TRAV_PROT': 'no label', 'HEB_PROV': 'no label', 'ETA_PSY': 'no label', 'URGENCES': 'no label', 'MATERNITE': 'no label', });
lyr_CommunesayantInfrasdeTypeA.set('fieldLabels', {'NOM': 'no label', 'ENF_HEBER': 'inline label', 'ACT_EDUC': 'inline label', 'CHRS': 'inline label', 'ACC_ASILE': 'inline label', 'AUTRES_SOC': 'inline label', 'TRAV_PROT': 'inline label', 'HEB_PROV': 'inline label', 'ETA_PSY': 'inline label', 'URGENCES': 'inline label', 'MATERNITE': 'inline label', });
lyr_CommunesayantInfrasdeTypeABC.set('fieldLabels', {'NOM': 'no label', 'ENF_HEBER': 'inline label', 'ACT_EDUC': 'inline label', 'CHRS': 'inline label', 'ACC_ASILE': 'inline label', 'AUTRES_SOC': 'inline label', 'TRAV_PROT': 'inline label', 'HEB_PROV': 'inline label', 'ETA_PSY': 'inline label', 'URGENCES': 'inline label', 'MATERNITE': 'inline label', });
lyr_Communescompltes.set('fieldLabels', {'NOM': 'no label', 'ENF_HEBER': 'inline label', 'ACT_EDUC': 'inline label', 'CHRS': 'inline label', 'ACC_ASILE': 'inline label', 'AUTRES_SOC': 'inline label', 'TRAV_PROT': 'inline label', 'HEB_PROV': 'inline label', 'ETA_PSY': 'inline label', 'URGENCES': 'inline label', 'MATERNITE': 'inline label', });
