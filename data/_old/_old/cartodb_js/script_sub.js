window.onload = function() {
    // Instantiate new map object, place it in 'map' element
    var map_object = new L.Map('map', {
        center: [40.705,-73.94], // Southern France
        zoom: 11
    });

    // Put layer data into a JS object
    var layerSource = 'https://dms2203.cartodb.com/api/v2_1/viz/a7edee28-105c-11e5-9608-0e9d821ea90d/viz.json'

    // For storing the sublayers
    var sublayers = [];

    // Pull tiles from OpenStreetMap
//    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//    }).addTo(map_object);

    // Add data layer to your map
    cartodb.createLayer(map_object,layerSource,{
            //shareable: false,
            title: true,
            description: false,
            search: true,
            tiles_loader: true,
            //center_lat: 0,
            //center_lon: 0,
            //zoom: 2,
            layer_selector:true,
            cartodb_logo: false,
            legends: true
        })
        .addTo(map_object)
        .done(function(layer) {
           for (var i = 0; i < layer.getSubLayerCount(); i++) {
               sublayers[i] = layer.getSubLayer(i);
               //alert("Congrats, you added sublayer #" + i + "!");
               // layer = layers[1];
               // layer.getSubLayer(1).hide();
           } 
        })
        .error(function(err) {
            console.log("error: " + err);
        });

    //WALKABILITY 
    var sublayer0Shown = true;
    $("#sublayer0").on('click', function() {
        sublayers[1].hide();
        // if (sublayer0Shown) {
        //     sublayers[0].hide();
        // } else {
        //     sublayers[0].show();
        // }
        sublayers[0].show();
        sublayer0Shown = !sublayer0Shown; 
    });

    //TREE CANOPY
    var sublayer1Shown = true;
    $("#sublayer1").on('click', function() {
        sublayers[0].hide();
        // if (sublayer1Shown) {
        //     sublayers[1].hide();
        // } else {
        //     sublayers[1].show();
        // }
        sublayers[1].show();
        sublayer1Shown = !sublayer1Shown; 
    });
}