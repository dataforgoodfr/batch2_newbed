var size = 0;
var ranges_Regions = [[0.390687, 0.572001, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(40,125,185,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(247,251,255,1.0)"})
    })]],
[0.572001, 0.828040, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(40,125,185,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(200,221,240,1.0)"})
    })]],
[0.828040, 1.136823, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(40,125,185,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(115,179,216,1.0)"})
    })]],
[1.136823, 2.214034, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(40,125,185,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(40,121,185,1.0)"})
    })]],
[2.214034, 3.530981, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(40,125,185,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(8,48,107,1.0)"})
    })]]];
var styleCache_Regions={}
var style_Regions = function(feature, resolution){
    var value = parseFloat(feature.get("SCORE"));
    var style = ranges_Regions[0][2];
    for (i = 0; i < ranges_Regions.length; i++){
        var range = ranges_Regions[i];
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

    if (!styleCache_Regions[key]){
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
        styleCache_Regions[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Regions[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};