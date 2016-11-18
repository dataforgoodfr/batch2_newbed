var size = 0;

var styleCache_CommunesayantInfrasdeTypeA={}
var style_CommunesayantInfrasdeTypeA = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(232,236,25,0.8)"})
    })];
    if (feature.get("NOM") !== null && resolution > 0 && resolution < 840) {
        var labelText = String(feature.get("NOM"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CommunesayantInfrasdeTypeA[key]){
        var text = new ol.style.Text({
              font: '11.7px \'Source Code Pro\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(63, 36, 21, 255)"
              }),
            });
        styleCache_CommunesayantInfrasdeTypeA[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CommunesayantInfrasdeTypeA[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};