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
var format_CommunesetArrondissements = new ol.format.GeoJSON();
var features_CommunesetArrondissements = format_CommunesetArrondissements.readFeatures(geojson_CommunesetArrondissements, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesetArrondissements = new ol.source.Vector();
jsonSource_CommunesetArrondissements.addFeatures(features_CommunesetArrondissements);var lyr_CommunesetArrondissements = new ol.layer.Vector({
                source:jsonSource_CommunesetArrondissements, 
                
                 maxResolution:155.0,
                 style: style_CommunesetArrondissements,
                title: "Communes et Arrondissements"
            });var format_Hotels_Low_rating2 = new ol.format.GeoJSON();
var features_Hotels_Low_rating2 = format_Hotels_Low_rating2.readFeatures(geojson_Hotels_Low_rating2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotels_Low_rating2 = new ol.source.Vector();
jsonSource_Hotels_Low_rating2.addFeatures(features_Hotels_Low_rating2);var lyr_Hotels_Low_rating2 = new ol.layer.Vector({
                source:jsonSource_Hotels_Low_rating2, 
                
 maxResolution:155.089323045,
                style: style_Hotels_Low_rating2,
                title: "Hotels Low rating2"
            });var format_Dpartement = new ol.format.GeoJSON();
var features_Dpartement = format_Dpartement.readFeatures(geojson_Dpartement, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement = new ol.source.Vector();
jsonSource_Dpartement.addFeatures(features_Dpartement);var lyr_Dpartement = new ol.layer.Vector({
                source:jsonSource_Dpartement,
minResolution:150.0111653807,
 maxResolution:805.089323045,

                style: style_Dpartement,
                title: "Départements"
            });var format_Regions = new ol.format.GeoJSON();
var features_Regions = format_Regions.readFeatures(geojson_Regions, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions = new ol.source.Vector();
jsonSource_Regions.addFeatures(features_Regions);var lyr_Regions = new ol.layer.Vector({
                source:jsonSource_Regions,
minResolution:800.089323045,
 maxResolution:28004.4661523,

                style: style_Regions,
                title: "Regions"
            });

lyr_CommunesetArrondissements.setVisible(true);lyr_Hotels_Low_rating2.setVisible(true);lyr_Dpartement.setVisible(true);lyr_Regions.setVisible(true);
var layersList = [baseLayer,lyr_CommunesetArrondissements,lyr_Hotels_Low_rating2,lyr_Dpartement,lyr_Regions];
lyr_CommunesetArrondissements.set('fieldAliases', {'NOM': 'NOM', 'SCORE': 'SCORE', });
lyr_Hotels_Low_rating2.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rating': 'bubble_rating', 'star_rating': 'star_rating', 'review_count': 'review_count', 'air_conditioning': 'air_conditioning', 'free_internet': 'free_internet', 'free_high_speed_internet_(_wifi_)': 'free_high_speed_internet_(_wifi_)', 'public_wifi': 'public_wifi', 'wheelchair_access': 'wheelchair_access', 'restaurant': 'restaurant', 'family_rooms': 'family_rooms', 'accessible_rooms': 'accessible_rooms', 'pets_allowed_(_dog_/_pet_friendly_)': 'pets_allowed_(_dog_/_pet_friendly_)', 'paid_wifi': 'paid_wifi', 'refrigerator_in_room': 'refrigerator_in_room', 'kitchenette': 'kitchenette', 'microwave': 'microwave', 'paid_internet': 'paid_internet', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_std2': 'rating_std2', });
lyr_Dpartement.set('fieldAliases', {'CODE_INSEE': 'CODE_INSEE', 'NOM': 'NOM', 'SCORE': 'SCORE', });
lyr_Regions.set('fieldAliases', {'CODE_INSEE': 'CODE_INSEE', 'NOM': 'NOM', 'SCORE': 'SCORE', });
lyr_CommunesetArrondissements.set('fieldImages', {'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_Hotels_Low_rating2.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rating': 'TextEdit', 'star_rating': 'TextEdit', 'review_count': 'TextEdit', 'air_conditioning': 'TextEdit', 'free_internet': 'TextEdit', 'free_high_speed_internet_(_wifi_)': 'TextEdit', 'public_wifi': 'TextEdit', 'wheelchair_access': 'TextEdit', 'restaurant': 'TextEdit', 'family_rooms': 'TextEdit', 'accessible_rooms': 'TextEdit', 'pets_allowed_(_dog_/_pet_friendly_)': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerator_in_room': 'TextEdit', 'kitchenette': 'TextEdit', 'microwave': 'TextEdit', 'paid_internet': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_std2': 'TextEdit', });
lyr_Dpartement.set('fieldImages', {'CODE_INSEE': 'TextEdit', 'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_Regions.set('fieldImages', {'CODE_INSEE': 'TextEdit', 'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_CommunesetArrondissements.set('fieldLabels', {'NOM': 'no label', 'SCORE': 'Score', });
lyr_Hotels_Low_rating2.set('fieldLabels', {'name': 'nom', 'city': 'ville', 'address': 'adresse', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rating': 'note TripAdvisor', 'star_rating': 'étoiles', 'review_count': 'nombre d\'avis', 'air_conditioning': 'Clim', 'free_internet': 'Internet gratuit', 'free_high_speed_internet_(_wifi_)': 'Internet Haut Débit gratuit', 'public_wifi': 'Wi-Fi public', 'wheelchair_access': 'Accès PMR', 'restaurant': 'restaurant', 'family_rooms': 'chambres familiales', 'accessible_rooms': 'Chambres accessibles', 'pets_allowed_(_dog_/_pet_friendly_)': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi payant', 'refrigerator_in_room': 'Réfrigérateur', 'kitchenette': 'kitchenette', 'microwave': 'Micro-ondes', 'paid_internet': 'intenret payant ', 'chaine': 'Chaine d\'Hotels', 'rating_std': 'score_1', 'rating_std2': 'score_2', });
lyr_Dpartement.set('fieldLabels', {'CODE_INSEE': 'no label', 'NOM': 'no label', 'SCORE': 'no label', });
lyr_Regions.set('fieldLabels', {'CODE_INSEE': 'no label', 'NOM': 'no label', 'SCORE': 'no label', });
