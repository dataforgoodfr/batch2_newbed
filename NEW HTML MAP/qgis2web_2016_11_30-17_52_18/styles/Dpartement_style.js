var size = 0;
var ranges_Dpartement = [[0, 0.5, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,95,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,204,1.0)"})
    })]],
[0.5, 1.0, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,95,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(207,235,163,1.0)"})
    })]],
[1.0, 2, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,95,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(150,211,134,1.0)"})
    })]],
[2, 5, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,95,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(39,151,78,1.0)"})
    })]],
[5, 10, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,95,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(0,104,55,1.0)"})
    })]]];
var styleCache_Dpartement={}
var style_Dpartement = function(feature, resolution){
    var value = parseFloat(feature.get("SCORE"));
    var style = ranges_Dpartement[0][2];
    for (i = 0; i < ranges_Dpartement.length; i++){
        var range = ranges_Dpartement[i];
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

    if (!styleCache_Dpartement[key]){
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
        styleCache_Dpartement[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Dpartement[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};