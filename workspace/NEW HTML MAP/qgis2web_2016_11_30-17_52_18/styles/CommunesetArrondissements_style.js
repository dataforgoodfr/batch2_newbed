var size = 0;
var ranges_CommunesetArrondissements = [[0.000000, 0.500000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(255,255,212,1.0)"})
    })]],
[0.500000, 1.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(254,217,142,1.0)"})
    })]],
[1.000000, 3.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(254,153,41,1.0)"})
    })]],
[3.000000, 5.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(217,95,14,1.0)"})
    })]],
[5.000000, 8.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(209 ,57,10,1.0)"})
    })]],
[8.000000, 15.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(143,52,4,1.0)"})
    })]]];
var styleCache_CommunesetArrondissements={}
var style_CommunesetArrondissements = function(feature, resolution){
    var value = parseFloat(feature.get("SCORE"));
    var style = ranges_CommunesetArrondissements[0][2];
    for (i = 0; i < ranges_CommunesetArrondissements.length; i++){
        var range = ranges_CommunesetArrondissements[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CommunesetArrondissements[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_CommunesetArrondissements[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CommunesetArrondissements[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};