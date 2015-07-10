var map;
    function init(){
  // initiate leaflet map
  map = new L.Map('map', { 
    center: [40.705,-73.94], 
    zoom: 11
  })
  // L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
  //   attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
  // }).addTo(map);
  var layerUrl = 'https://dms2203.cartodb.com/api/v2/viz/a7e9cb92-9b52-11e4-b578-0e9d821ea90d/viz.json';

  var layerUrl = 'https://dms2203.cartodb.com/api/v2_1/viz/a7edee28-105c-11e5-9608-0e9d821ea90d/viz.json';

  var walkUrl  = 'https://dms2203.cartodb.com/api/v2/viz/a7e9cb92-9b52-11e4-b578-0e9d821ea90d/viz.json';
  var treeUrl  = 'https://dms2203.cartodb.com/api/v2/viz/8ea73f6c-ab1e-11e4-9f73-0e0c41326911/viz.json';
  var mhhiUrl  = 'https://dms2203.cartodb.com/api/v2/viz/0a7e8122-ab38-11e4-9bff-0e853d047bba/viz.json';

  var sublayers = [];

  cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
    // change the query for the first layer
    var subLayerOptions = {
      //sql: "SELECT * FROM ne_10m_populated_places_simple",
      //cartocss: "#ne_10m_populated_places_simple{marker-fill: #F84F40; marker-width: 8; marker-line-color: white; marker-line-width: 2; marker-clip: false; marker-allow-overlap: true;}"
    }

    

    var sublayer = layer.getSubLayer(0);

    sublayer.set(subLayerOptions);

    sublayers.push(sublayer);
  }).on('error', function() {
    //log the error
  });
  
  sublayers[1].hide();
  sublayers[1].removeLayer;

  //we define the queries that will be performed when we click on the buttons, by modifying the SQL of our layer
  var LayerActions = {
    all: function(){
      sublayers[0].setSQL("SELECT * FROM nyct2010_walkability");
      return true;
    },
    capitals: function(){
      sublayers[0].setSQL("SELECT * FROM nyct2010_walkability WHERE boroname = 'Staten Island'");
      return true;
    },
    treeCanopy: function() {
      sublayers[0].hide();
      sublayers[0].removeLayer;
      
      // layerUrl = treeUrl;
      // cartodb.createLayer(map, layerUrl)
      //    .addTo(map);
      return true;
    },
    walkability: function() {
      sublayers[0].hide();
      sublayers[0].removeLayer;

      // layerUrl = walkUrl;
      // cartodb.createLayer(map, layerUrl)
      //    .addTo(map);
      return true;
    },
    mhhi: function() {
      sublayers[0].hide();
      sublayers[0].removeLayer;

      // layerUrl = mhhiUrl;
      // cartodb.createLayer(map, layerUrl)
      //    .addTo(map);
      return true;
    },

  }

  $('.button').click(function() {
    $('.button').removeClass('selected');
    $(this).addClass('selected');
    //this gets the id of the different buttons and calls to LayerActions which responds according to the selected id
    LayerActions[$(this).attr('id')]();
  });
}
