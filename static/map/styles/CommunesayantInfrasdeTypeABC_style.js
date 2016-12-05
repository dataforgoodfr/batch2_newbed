var size = 0;

var styleCache_CommunesayantInfrasdeTypeABC={}
var style_CommunesayantInfrasdeTypeABC = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(25,237,96,0.8)"})
    })];
    if (feature.get("NOM") !== null && resolution > 0 && resolution < 1680) {
        var labelText = String(feature.get("NOM"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CommunesayantInfrasdeTypeABC[key]){
        var text = new ol.style.Text({
              font: '13.325px \'Source Code Pro\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(12, 92, 47, 255)"
              }),
            });
        styleCache_CommunesayantInfrasdeTypeABC[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CommunesayantInfrasdeTypeABC[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};