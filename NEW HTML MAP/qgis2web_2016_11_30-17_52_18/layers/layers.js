var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
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
}),
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
}),
]
});
var format_CommunesetArrondissements = new ol.format.GeoJSON();
var features_CommunesetArrondissements = format_CommunesetArrondissements.readFeatures(geojson_CommunesetArrondissements, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesetArrondissements = new ol.source.Vector();
jsonSource_CommunesetArrondissements.addFeatures(features_CommunesetArrondissements);var lyr_CommunesetArrondissements = new ol.layer.Vector({
                source:jsonSource_CommunesetArrondissements, 
                style: style_CommunesetArrondissements,
                title: "Communes et Arrondissements"
            });var format_HotelsInternetgratuit = new ol.format.GeoJSON();
var features_HotelsInternetgratuit = format_HotelsInternetgratuit.readFeatures(geojson_HotelsInternetgratuit, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsInternetgratuit = new ol.source.Vector();
jsonSource_HotelsInternetgratuit.addFeatures(features_HotelsInternetgratuit);var lyr_HotelsInternetgratuit = new ol.layer.Vector({
                source:jsonSource_HotelsInternetgratuit, 
                style: style_HotelsInternetgratuit,
                title: "Hotels Internet gratuit"
            });var format_HotelsInternetPayant = new ol.format.GeoJSON();
var features_HotelsInternetPayant = format_HotelsInternetPayant.readFeatures(geojson_HotelsInternetPayant, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsInternetPayant = new ol.source.Vector();
jsonSource_HotelsInternetPayant.addFeatures(features_HotelsInternetPayant);var lyr_HotelsInternetPayant = new ol.layer.Vector({
                source:jsonSource_HotelsInternetPayant, 
                style: style_HotelsInternetPayant,
                title: "Hotels Internet Payant"
            });var format_HotelsaccessiblesPMR = new ol.format.GeoJSON();
var features_HotelsaccessiblesPMR = format_HotelsaccessiblesPMR.readFeatures(geojson_HotelsaccessiblesPMR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsaccessiblesPMR = new ol.source.Vector();
jsonSource_HotelsaccessiblesPMR.addFeatures(features_HotelsaccessiblesPMR);var lyr_HotelsaccessiblesPMR = new ol.layer.Vector({
                source:jsonSource_HotelsaccessiblesPMR, 
                style: style_HotelsaccessiblesPMR,
                title: "Hotels accessibles PMR"
            });var format_Hotelfaisantpartiedunechaine = new ol.format.GeoJSON();
var features_Hotelfaisantpartiedunechaine = format_Hotelfaisantpartiedunechaine.readFeatures(geojson_Hotelfaisantpartiedunechaine, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotelfaisantpartiedunechaine = new ol.source.Vector();
jsonSource_Hotelfaisantpartiedunechaine.addFeatures(features_Hotelfaisantpartiedunechaine);var lyr_Hotelfaisantpartiedunechaine = new ol.layer.Vector({
                source:jsonSource_Hotelfaisantpartiedunechaine, 
                style: style_Hotelfaisantpartiedunechaine,
                title: "Hotel faisant partie d'une chaine"
            });var format_HotelsavecFrigoetouMicroondes = new ol.format.GeoJSON();
var features_HotelsavecFrigoetouMicroondes = format_HotelsavecFrigoetouMicroondes.readFeatures(geojson_HotelsavecFrigoetouMicroondes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsavecFrigoetouMicroondes = new ol.source.Vector();
jsonSource_HotelsavecFrigoetouMicroondes.addFeatures(features_HotelsavecFrigoetouMicroondes);var lyr_HotelsavecFrigoetouMicroondes = new ol.layer.Vector({
                source:jsonSource_HotelsavecFrigoetouMicroondes, 
                style: style_HotelsavecFrigoetouMicroondes,
                title: "Hotels avec Frigo et ou Micro-ondes"
            });var format_Hotelschambreaveckitchenette = new ol.format.GeoJSON();
var features_Hotelschambreaveckitchenette = format_Hotelschambreaveckitchenette.readFeatures(geojson_Hotelschambreaveckitchenette, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotelschambreaveckitchenette = new ol.source.Vector();
jsonSource_Hotelschambreaveckitchenette.addFeatures(features_Hotelschambreaveckitchenette);var lyr_Hotelschambreaveckitchenette = new ol.layer.Vector({
                source:jsonSource_Hotelschambreaveckitchenette, 
                style: style_Hotelschambreaveckitchenette,
                title: "Hotels chambre avec kitchenette"
            });var format_HotelPeuvisitsetmauvaisavis = new ol.format.GeoJSON();
var features_HotelPeuvisitsetmauvaisavis = format_HotelPeuvisitsetmauvaisavis.readFeatures(geojson_HotelPeuvisitsetmauvaisavis, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelPeuvisitsetmauvaisavis = new ol.source.Vector();
jsonSource_HotelPeuvisitsetmauvaisavis.addFeatures(features_HotelPeuvisitsetmauvaisavis);var lyr_HotelPeuvisitsetmauvaisavis = new ol.layer.Vector({
                source:jsonSource_HotelPeuvisitsetmauvaisavis, 
                style: style_HotelPeuvisitsetmauvaisavis,
                title: "Hotel Peu visités et mauvais avis"
            });var format_Dpartement = new ol.format.GeoJSON();
var features_Dpartement = format_Dpartement.readFeatures(geojson_Dpartement, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement = new ol.source.Vector();
jsonSource_Dpartement.addFeatures(features_Dpartement);var lyr_Dpartement = new ol.layer.Vector({
                source:jsonSource_Dpartement,
minResolution:70.0111653807,
 maxResolution:560.089323045,

                style: style_Dpartement,
                title: "Département"
            });var format_Regions = new ol.format.GeoJSON();
var features_Regions = format_Regions.readFeatures(geojson_Regions, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions = new ol.source.Vector();
jsonSource_Regions.addFeatures(features_Regions);var lyr_Regions = new ol.layer.Vector({
                source:jsonSource_Regions,
minResolution:560.089323045,
 maxResolution:28004.4661523,

                style: style_Regions,
                title: "Regions"
            });

lyr_CommunesetArrondissements.setVisible(true);lyr_HotelsInternetgratuit.setVisible(false);lyr_HotelsInternetPayant.setVisible(false);lyr_HotelsaccessiblesPMR.setVisible(false);lyr_Hotelfaisantpartiedunechaine.setVisible(true);lyr_HotelsavecFrigoetouMicroondes.setVisible(false);lyr_Hotelschambreaveckitchenette.setVisible(true);lyr_HotelPeuvisitsetmauvaisavis.setVisible(false);lyr_Dpartement.setVisible(true);lyr_Regions.setVisible(true);
var layersList = [baseLayer,lyr_CommunesetArrondissements,lyr_HotelsInternetgratuit,lyr_HotelsInternetPayant,lyr_HotelsaccessiblesPMR,lyr_Hotelfaisantpartiedunechaine,lyr_HotelsavecFrigoetouMicroondes,lyr_Hotelschambreaveckitchenette,lyr_HotelPeuvisitsetmauvaisavis,lyr_Dpartement,lyr_Regions];
lyr_CommunesetArrondissements.set('fieldAliases', {'NOM': 'NOM', 'SCORE': 'SCORE', });
lyr_HotelsInternetgratuit.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelsInternetPayant.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelsaccessiblesPMR.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_Hotelfaisantpartiedunechaine.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelsavecFrigoetouMicroondes.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_Hotelschambreaveckitchenette.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelPeuvisitsetmauvaisavis.set('fieldAliases', {'field_1': 'field_1', 'name': 'name', 'city': 'city', 'address': 'address', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'bubble_rat', 'star_ratin': 'star_ratin', 'review_cou': 'review_cou', 'air_condit': 'air_condit', 'free_inter': 'free_inter', 'free_high_': 'free_high_', 'public_wif': 'public_wif', 'wheelchair': 'wheelchair', 'restaurant': 'restaurant', 'family_roo': 'family_roo', 'accessible': 'accessible', 'pets_allow': 'pets_allow', 'paid_wifi': 'paid_wifi', 'refrigerat': 'refrigerat', 'kitchenett': 'kitchenett', 'microwave': 'microwave', 'paid_inter': 'paid_inter', 'chaine': 'chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_Dpartement.set('fieldAliases', {'CODE_INSEE': 'CODE_INSEE', 'NOM': 'NOM', 'SCORE': 'SCORE', });
lyr_Regions.set('fieldAliases', {'CODE_INSEE': 'CODE_INSEE', 'NOM': 'NOM', 'SCORE': 'SCORE', });
lyr_CommunesetArrondissements.set('fieldImages', {'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_HotelsInternetgratuit.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelsInternetPayant.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelsaccessiblesPMR.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Hotelfaisantpartiedunechaine.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelsavecFrigoetouMicroondes.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Hotelschambreaveckitchenette.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelPeuvisitsetmauvaisavis.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Dpartement.set('fieldImages', {'CODE_INSEE': 'TextEdit', 'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_Regions.set('fieldImages', {'CODE_INSEE': 'TextEdit', 'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_CommunesetArrondissements.set('fieldLabels', {'NOM': 'no label', 'SCORE': 'inline label', });
lyr_HotelsInternetgratuit.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelsInternetPayant.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelsaccessiblesPMR.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_Hotelfaisantpartiedunechaine.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelsavecFrigoetouMicroondes.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_Hotelschambreaveckitchenette.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelPeuvisitsetmauvaisavis.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_Dpartement.set('fieldLabels', {'CODE_INSEE': 'no label', 'NOM': 'no label', 'SCORE': 'inline label', });
lyr_Regions.set('fieldLabels', {'CODE_INSEE': 'no label', 'NOM': 'no label', 'SCORE': 'inline label', });
