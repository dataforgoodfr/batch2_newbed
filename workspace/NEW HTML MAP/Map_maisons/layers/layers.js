var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [

new ol.layer.Tile({
    'title': 'Stamen Watercolor',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
}),
]
});
var format_CommunesetArrondissements = new ol.format.GeoJSON();
var features_CommunesetArrondissements = format_CommunesetArrondissements.readFeatures(geojson_CommunesetArrondissements, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesetArrondissements = new ol.source.Vector();
    jsonSource_CommunesetArrondissements.addFeatures(features_CommunesetArrondissements);

var lyr_CommunesetArrondissements = new ol.layer.Vector({
                source:jsonSource_CommunesetArrondissements,
                maxResolution:400, 
                style: style_CommunesetArrondissements,
                title: "Communes et Arrondissements"
            });
var format_Hotels_Low_rating2 = new ol.format.GeoJSON();
var features_Hotels_Low_rating2 = format_Hotels_Low_rating2.readFeatures(geojson_Hotels_Low_rating2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotels_Low_rating2 = new ol.source.Vector();
jsonSource_Hotels_Low_rating2.addFeatures(features_Hotels_Low_rating2);

var lyr_Hotels_Low_rating2 = new ol.layer.Vector({
                source:jsonSource_Hotels_Low_rating2, 
                maxResolution:500,
                style: style_Hotels_Low_rating2,
                title: "Hotels Low rating2"
            });

var format_HotelsInternetgratuit = new ol.format.GeoJSON();

var features_HotelsInternetgratuit = format_HotelsInternetgratuit.readFeatures(geojson_HotelsInternetgratuit, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsInternetgratuit = new ol.source.Vector();
jsonSource_HotelsInternetgratuit.addFeatures(features_HotelsInternetgratuit);
var lyr_HotelsInternetgratuit = new ol.layer.Vector({
                source:jsonSource_HotelsInternetgratuit, 
                maxResolution:500,
                style: style_HotelsInternetgratuit,
                title: "Hotels Internet gratuit"
            });

//var format_HotelsInternetPayant = new ol.format.GeoJSON();

// var features_HotelsInternetPayant = format_HotelsInternetPayant.readFeatures(geojson_HotelsInternetPayant, 
//             {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
// var jsonSource_HotelsInternetPayant = new ol.source.Vector();
// jsonSource_HotelsInternetPayant.addFeatures(features_HotelsInternetPayant);var lyr_HotelsInternetPayant = new ol.layer.Vector({
//                 source:jsonSource_HotelsInternetPayant, 
//                 maxResolution:500,
//                 style: style_HotelsInternetPayant,
//                 title: "Hotels Internet Payant"
//             });
var format_HotelsaccessiblesPMR = new ol.format.GeoJSON();

var features_HotelsaccessiblesPMR = format_HotelsaccessiblesPMR.readFeatures(geojson_HotelsaccessiblesPMR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsaccessiblesPMR = new ol.source.Vector();
jsonSource_HotelsaccessiblesPMR.addFeatures(features_HotelsaccessiblesPMR);var lyr_HotelsaccessiblesPMR = new ol.layer.Vector({
                source:jsonSource_HotelsaccessiblesPMR, 
                maxResolution:500,
                style: style_HotelsaccessiblesPMR,
                title: "Hotels accessibles PMR"
            });var format_Hotelfaisantpartiedunechaine = new ol.format.GeoJSON();

var features_Hotelfaisantpartiedunechaine = format_Hotelfaisantpartiedunechaine.readFeatures(geojson_Hotelfaisantpartiedunechaine, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotelfaisantpartiedunechaine = new ol.source.Vector();
jsonSource_Hotelfaisantpartiedunechaine.addFeatures(features_Hotelfaisantpartiedunechaine);var lyr_Hotelfaisantpartiedunechaine = new ol.layer.Vector({
                source:jsonSource_Hotelfaisantpartiedunechaine,
                maxResolution:500, 
                style: style_Hotelfaisantpartiedunechaine,
                title: "Hotel faisant partie d'une chaine"
            });var format_HotelsavecFrigoetouMicroondes = new ol.format.GeoJSON();

var features_HotelsavecFrigoetouMicroondes = format_HotelsavecFrigoetouMicroondes.readFeatures(geojson_HotelsavecFrigoetouMicroondes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsavecFrigoetouMicroondes = new ol.source.Vector();
jsonSource_HotelsavecFrigoetouMicroondes.addFeatures(features_HotelsavecFrigoetouMicroondes);var lyr_HotelsavecFrigoetouMicroondes = new ol.layer.Vector({
                source:jsonSource_HotelsavecFrigoetouMicroondes,
                maxResolution:500, 
                style: style_HotelsavecFrigoetouMicroondes,
                title: "Hotels avec Frigo et ou Micro-ondes"
            });var format_Hotelschambreaveckitchenette = new ol.format.GeoJSON();

var features_Hotelschambreaveckitchenette = format_Hotelschambreaveckitchenette.readFeatures(geojson_Hotelschambreaveckitchenette, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotelschambreaveckitchenette = new ol.source.Vector();
jsonSource_Hotelschambreaveckitchenette.addFeatures(features_Hotelschambreaveckitchenette);var lyr_Hotelschambreaveckitchenette = new ol.layer.Vector({
                source:jsonSource_Hotelschambreaveckitchenette,
                maxResolution:500, 
                style: style_Hotelschambreaveckitchenette,
                title: "Hotels chambre avec kitchenette"
            });var format_HotelPeuvisitsetmauvaisavis = new ol.format.GeoJSON();

var features_HotelPeuvisitsetmauvaisavis = format_HotelPeuvisitsetmauvaisavis.readFeatures(geojson_HotelPeuvisitsetmauvaisavis, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelPeuvisitsetmauvaisavis = new ol.source.Vector();
jsonSource_HotelPeuvisitsetmauvaisavis.addFeatures(features_HotelPeuvisitsetmauvaisavis);var lyr_HotelPeuvisitsetmauvaisavis = new ol.layer.Vector({
                source:jsonSource_HotelPeuvisitsetmauvaisavis, 
                maxResolution:500,
                style: style_HotelPeuvisitsetmauvaisavis,
                title: "Hotel Peu visités et mauvais avis"
            });

var format_Dpartement = new ol.format.GeoJSON();

var features_Dpartement = format_Dpartement.readFeatures(geojson_Dpartement, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement = new ol.source.Vector();
jsonSource_Dpartement.addFeatures(features_Dpartement);var lyr_Dpartement = new ol.layer.Vector({
                source:jsonSource_Dpartement,
minResolution:500,
 maxResolution:1201,

                style: style_Dpartement,
                title: "Département"
            });var format_Regions = new ol.format.GeoJSON();

var features_Regions = format_Regions.readFeatures(geojson_Regions, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions = new ol.source.Vector();
                            jsonSource_Regions.addFeatures(features_Regions);

var lyr_Regions = new ol.layer.Vector({
                source:jsonSource_Regions,
                minResolution:1200,
                maxResolution:28004.4661523,

                style: style_Regions,
                title: "Regions",
               
            });

var extent = [0, 0, 1024, 968];
var projection = new ol.proj.Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: extent
      });


lyr_CommunesetArrondissements.setZIndex(0);
lyr_HotelsInternetgratuit.setZIndex(201);
//lyr_HotelsInternetPayant.setZIndex(201);
lyr_HotelsaccessiblesPMR.setZIndex(201);
lyr_Hotelfaisantpartiedunechaine.setZIndex(201);
lyr_HotelsavecFrigoetouMicroondes.setZIndex(201);
lyr_Hotelschambreaveckitchenette.setZIndex(201);
lyr_HotelPeuvisitsetmauvaisavis.setZIndex(201);
lyr_Hotels_Low_rating2.setZIndex(200);
lyr_Dpartement.setZIndex(101);
lyr_Regions.setZIndex(101)

lyr_CommunesetArrondissements.setVisible(true);
lyr_HotelsInternetgratuit.setVisible(true);
//lyr_HotelsInternetPayant.setVisible(true);
lyr_HotelsaccessiblesPMR.setVisible(true);
lyr_Hotelfaisantpartiedunechaine.setVisible(true);
lyr_HotelsavecFrigoetouMicroondes.setVisible(true);
lyr_Hotelschambreaveckitchenette.setVisible(true);
lyr_HotelPeuvisitsetmauvaisavis.setVisible(true);
lyr_Hotels_Low_rating2.setVisible(true);
lyr_Dpartement.setVisible(true);
lyr_Regions.setVisible(true);


var layersList = [baseLayer,lyr_Hotels_Low_rating2,lyr_HotelsInternetgratuit,lyr_HotelsaccessiblesPMR,lyr_Hotelfaisantpartiedunechaine,lyr_HotelsavecFrigoetouMicroondes,lyr_Hotelschambreaveckitchenette,lyr_HotelPeuvisitsetmauvaisavis,lyr_CommunesetArrondissements,lyr_Dpartement,lyr_Regions];
lyr_CommunesetArrondissements.set('fieldAliases', {'NOM': 'Commune', 'SCORE': 'Score', });
lyr_Hotels_Low_rating2.set('fieldAliases', {'FIELD_1': 'ID', 'NAME': 'Nom', 'CITY': 'Ville', 'ADDRESS': 'Adresse', 'POSTCODE': 'postcode', 'LAT': 'lat', 'LNG': 'lng', 'BUBBLE_RAT': 'Note TripAdvisor', 'STAR_RATIN': 'Etoiles', 'REVIEW_COU': 'Nombre d\'avis', 'AIR_CONDIT': 'Chambres climatisées', 'FREE_INTER': 'Internet Gratuit ', 'FREE_HIGH_': 'Internet Haut Debit Gratuit ', 'PUBLIC_WIF': 'Wi-Fi Public', 'WHEELCHAIR': 'Accès fauteuil roulant', 'RESTAURANT': 'Restaurant', 'FAMILY_ROO': 'Chambres familiales', 'ACCESSIBLE': 'Chambres accessibles', 'PETS_ALLOW': 'Animaux autorisés', 'PAID_WIFI': 'Wi-Fi Payant ', 'REFRIREGAT': 'Refrigérateur dans les chambres', 'KITCHENETT': 'Kitchenette dans les chambres', 'MICROWAVE': 'Micro-ondes dans les chambres ', 'PAID_INTER': 'Internet payant', 'CHAINE': 'Hotel faisant partie d\'une chaine', 'RATING_STD': 'rating_std', 'RATING_S_1': 'rating_s_1', });
lyr_HotelsInternetgratuit.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
//lyr_HotelsInternetPayant.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelsaccessiblesPMR.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_Hotelfaisantpartiedunechaine.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelsavecFrigoetouMicroondes.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_Hotelschambreaveckitchenette.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_HotelPeuvisitsetmauvaisavis.set('fieldAliases', {'field_1': 'ID', 'name': 'Nom', 'city': 'Ville', 'address': 'Adresse', 'postcode': 'postcode', 'lat': 'lat', 'lng': 'lng', 'bubble_rat': 'Note TripAdvisor', 'star_ratin': 'Etoiles', 'review_cou': 'Nombre d\'avis', 'air_condit': 'Chambres climatisées', 'free_inter': 'Internet Gratuit ', 'free_high_': 'Internet Haut Debit Gratuit ', 'public_wif': 'Wi-Fi Public', 'wheelchair': 'Accès fauteuil roulant', 'restaurant': 'Restaurant', 'family_roo': 'Chambres familiales', 'accessible': 'Chambres accessibles', 'pets_allow': 'Animaux autorisés', 'paid_wifi': 'Wi-Fi Payant ', 'refrigerat': 'Refrigérateur dans les chambres', 'kitchenett': 'Kitchenette dans les chambres', 'microwave': 'Micro-ondes dans les chambres ', 'paid_inter': 'Internet payant', 'chaine': 'Hotel faisant partie d\'une chaine', 'rating_std': 'rating_std', 'rating_s_1': 'rating_s_1', });
lyr_Dpartement.set('fieldAliases', {'CODE_INSEE': 'CODE_INSEE', 'NOM': 'DEPARTEMENT', 'SCORE': 'Score', });
lyr_Regions.set('fieldAliases', {'CODE_INSEE': 'CODE_INSEE', 'NOM': 'REGION', 'SCORE': 'Score', });

lyr_CommunesetArrondissements.set('fieldImages', {'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_HotelsInternetgratuit.set('fieldImages', { 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Hotels_Low_rating2.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });

//lyr_HotelsInternetPayant.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelsaccessiblesPMR.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Hotelfaisantpartiedunechaine.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelsavecFrigoetouMicroondes.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Hotelschambreaveckitchenette.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_HotelPeuvisitsetmauvaisavis.set('fieldImages', {'field_1': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'address': 'TextEdit', 'postcode': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'bubble_rat': 'TextEdit', 'star_ratin': 'TextEdit', 'review_cou': 'TextEdit', 'air_condit': 'TextEdit', 'free_inter': 'TextEdit', 'free_high_': 'TextEdit', 'public_wif': 'TextEdit', 'wheelchair': 'TextEdit', 'restaurant': 'TextEdit', 'family_roo': 'TextEdit', 'accessible': 'TextEdit', 'pets_allow': 'TextEdit', 'paid_wifi': 'TextEdit', 'refrigerat': 'TextEdit', 'kitchenett': 'TextEdit', 'microwave': 'TextEdit', 'paid_inter': 'TextEdit', 'chaine': 'TextEdit', 'rating_std': 'TextEdit', 'rating_s_1': 'TextEdit', });
lyr_Dpartement.set('fieldImages', {'CODE_INSEE': 'TextEdit', 'NOM': 'TextEdit', 'SCORE': 'TextEdit', });
lyr_Regions.set('fieldImages', {'CODE_INSEE': 'TextEdit', 'NOM': 'TextEdit', 'SCORE': 'TextEdit', });

lyr_CommunesetArrondissements.set('fieldLabels', {'NOM': 'no label', 'SCORE': 'inline label', });
lyr_Hotels_Low_rating2.set('fieldLabels', {'FIELD_1': 'no label', 'NAME': 'header label', 'CITY': 'no label', 'ADDRESS': 'no label', 'POSTCODE': 'no label', 'LAT': 'no label', 'LNG': 'no label', 'BUBBLE_RAT': 'inline label', 'STAR_RATIN': 'inline label', 'REVIEW_COU': 'inline label', 'AIR_CONDIT': 'inline label', 'FREE_INTER': 'inline label', 'FREE_HIGH_': 'inline label', 'PUBLIC_WIF': 'inline label', 'WHEELCHAIR': 'inline label', 'RESTAURANT': 'inline label', 'FAMILY_ROO': 'inline label', 'ACCESSIBLE': 'inline label', 'PETS_ALLOW': 'inline label', 'PAID_WIFI': 'inline label', 'REFRIREGAT': 'inline label', 'KITCHENETT': 'inline label', 'MICROWAVE': 'inline label', 'PAID_INTER': 'inline label', 'CHAINE': 'inline label', 'RATING_STD': 'rating_std', 'RATING_S_1': 'rating_s_1', });

lyr_HotelsInternetgratuit.set('fieldLabels', {'field_1': 'no label', 'name': 'header label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
//lyr_HotelsInternetPayant.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelsaccessiblesPMR.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_Hotelfaisantpartiedunechaine.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelsavecFrigoetouMicroondes.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_Hotelschambreaveckitchenette.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_HotelPeuvisitsetmauvaisavis.set('fieldLabels', {'field_1': 'no label', 'name': 'no label', 'city': 'no label', 'address': 'no label', 'postcode': 'no label', 'lat': 'no label', 'lng': 'no label', 'bubble_rat': 'inline label', 'star_ratin': 'inline label', 'review_cou': 'inline label', 'air_condit': 'inline label', 'free_inter': 'inline label', 'free_high_': 'inline label', 'public_wif': 'inline label', 'wheelchair': 'inline label', 'restaurant': 'inline label', 'family_roo': 'inline label', 'accessible': 'inline label', 'pets_allow': 'inline label', 'paid_wifi': 'inline label', 'refrigerat': 'inline label', 'kitchenett': 'inline label', 'microwave': 'inline label', 'paid_inter': 'inline label', 'chaine': 'inline label', 'rating_std': 'inline label', 'rating_s_1': 'inline label', });
lyr_Dpartement.set('fieldLabels', {'CODE_INSEE': 'no label', 'NOM': 'inline label', 'SCORE': 'inline label', });
lyr_Regions.set('fieldLabels', {'CODE_INSEE': 'no label', 'NOM': 'inline label', 'SCORE': 'inline label', });
