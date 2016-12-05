function changeLayerStatus(layerName, visibility) {
    var layers = map.getLayers(layerName);
    var layer = layers[0];

    if(!layer) {
        return;
    }

    layer.setVisibility(visibility);
}