var vizID  = 'https://dms2203.cartodb.com/api/v2/viz/a7e9cb92-9b52-11e4-b578-0e9d821ea90d/viz.json';
var walkVizID = 'https://dms2203.cartodb.com/api/v2/viz/a7e9cb92-9b52-11e4-b578-0e9d821ea90d/viz.json';
var treeVizID = 'https://dms2203.cartodb.com/api/v2/viz/8ea73f6c-ab1e-11e4-9f73-0e0c41326911/viz.json';
var mhhiVizID = 'https://dms2203.cartodb.com/api/v2/viz/0a7e8122-ab38-11e4-9bff-0e853d047bba/viz.json';

function main() {
  cartodb.createVis('map', vizID, {
      title: false,
      description: false,
      search: false,
      tiles_loader: true,
      center_lat: 40.77,
      center_lon: -73.99, 
      zoom: 10,
      scrollwheel: false,
      search: false,
      shareable: false,
      layer_selector: false,
      zoomControl: true,
      cartodb_logo: false,
  })
  .done(function(vis, layers) {
    // layer 0 is the base layer, layer 1 is cartodb layer
    // setInteraction is disabled by default
    layers[1].setInteraction(true);
    layers[1].on('featureOver', function(e, pos, latlng, data) {
      cartodb.log.log(e, pos, latlng, data);
    });
    // you can get the native map to work with it
    var map = vis.getNativeMap();
    // now, perform any operations you need
    // map.setZoom(3);
    // map.panTo([50.5, 30.5]);
    // map.dragging.disable();

  })
  .error(function(err) {
    console.log(err);
  });
}
window.onload = main;

walk_map.onclick = function() {
    vizID = walkVizID;
    main = false;
    main();

    // function main() {
    //   cartodb.createVis('map', vizID, {
    //       title: false,
    //       description: false,
    //       search: false,
    //       tiles_loader: true,
    //       center_lat: 40.77,
    //       center_lon: -73.99, 
    //       zoom: 10,
    //       scrollwheel: false,
    //       search: false,
    //       shareable: false,
    //       layer_selector: false,
    //       zoomControl: true,
    //       cartodb_logo: false,
    //   })
    //   .done(function(vis, layers) {
    //     // layer 0 is the base layer, layer 1 is cartodb layer
    //     // setInteraction is disabled by default
    //     layers[1].setInteraction(true);
    //     layers[1].on('featureOver', function(e, pos, latlng, data) {
    //       cartodb.log.log(e, pos, latlng, data);
    //     });
    //     // you can get the native map to work with it
    //     var map = vis.getNativeMap();
    //     // now, perform any operations you need
    //     // map.setZoom(3);
    //     // map.panTo([50.5, 30.5]);
    //     // map.dragging.disable();

    //   })
    //   .error(function(err) {
    //     console.log(err);
    //   });
    // }
    // window.onload = main;



};

tree_map.onclick = function() {
    vizID = treeVizID;
    //main = false;
    
      cartodb.layer.clear(1)
      cartodb.createLayer(map, treeVizID, function(layer) {
        // add populated places points over the countries layer
        layer.createSubLayer({
          //sql: 'SELECT * FROM ne_10m_populated_places_simple',
          //cartocss: '#layer { marker-fill: red; }'
        });
      }).addTo(map);
    

   

};


