var size = 0;

var styleCache_Communescompltes={}
var style_Communescompltes = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(44,255,212,0.8)"})
    })];
    if (feature.get("NOM") !== null && resolution > 0 && resolution < 2800) {
        var labelText = String(feature.get("NOM"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Communescompltes[key]){
        var text = new ol.style.Text({
              font: '14.625px \'Source Code Pro\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(63, 36, 255, 255)"
              }),
            });
        styleCache_Communescompltes[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Communescompltes[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};