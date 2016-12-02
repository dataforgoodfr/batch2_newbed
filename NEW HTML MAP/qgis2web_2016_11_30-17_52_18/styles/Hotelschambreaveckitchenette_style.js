var size = 0;

var styleCache_Hotelschambreaveckitchenette={}
var style_Hotelschambreaveckitchenette = function(feature, resolution){
    var value = ""
    var size = 0;
        var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.05,
                  anchor: [0.5,0.5],
                  anchorXUnits: "fraction",
                  anchorYUnits: "fraction",
                  rotation: 0,
                  offset: [0, 0],
                  src: "styles/orange.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Hotelschambreaveckitchenette[key]){
        var text = new ol.style.Text({
              font: '10px \'None\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
              }),
            });
        styleCache_Hotelschambreaveckitchenette[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Hotelschambreaveckitchenette[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};