/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Defines settings for the Heron App layout wihtin Layout.js.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) and GeoExt and Heron MC components.
 * For convenience specific settings within this layout are defined here
 * for structuring and reuse purposes.
 *
 **/

/*
 * Common settings for MapPanel
 * These will be assigned as "hropts" within the MapPanel config
 */
Ext.namespace("Heron.options.map");
Heron.options.map.settings = {
    projection: 'EPSG:900913',
    displayProjection: new OpenLayers.Projection("EPSG:4326"),
    units: 'm',
    // resolutions: [860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.0525],
//    displayProjection: new OpenLayers.Projection('EPSG:4326'),
    maxExtent: '-20037508.34, -20037508.34, 20037508.34, 20037508.34',
    center: '-8534456.54634, 127778.94181',
    xy_precision: 5,
    max_features: 10,
    zoom: 10,
    theme: null
};

/*
 * Layers to be added to the map.
 * Syntax is defined in OpenLayers Layer API.
 * ("isBaseLayer: true" means the layer will be added as base/background layer).
 */
Heron.options.map.layers = [

    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */
//	May use new NASA WMTS : http://onearth.jpl.nasa.gov/wms.cgi?request=GetCapabilities

    new OpenLayers.Layer.OSM("World image"),


    // new OpenLayers.Layer.WMS(
    //          "World image",
    //          'http://www2.demis.nl/wms/wms.ashx?WMS=BlueMarble',
    //          {layers: "Earth Image", format: 'image/png', srs:'EPSG:900913'},
    //          {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true}
    // ),
    // new OpenLayers.Layer.WMS("Global Imagery",
    //     "http://demo.boundlessgeo.com/geoserver/gwc/service/wms",
    //     {layers: "nasa:bluemarble"},
    //     {singleTile: false, isBaseLayer: true, visibility: true, noLegend: true}
    // ),
    // new OpenLayers.Layer.WMS(
    //         "World schematic",
    //         'http://www2.demis.nl/wms/wms.ashx?WMS=WorldMap',
    //         {layers: "Countries,Borders,Coastlines", format: 'image/png'},
    //         {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true}
    // ),


    new OpenLayers.Layer.WMS(
            "Cauce Permanente",
            'http://localhost:8080/geoserver/mocoa/wms?',
            {layers: "mocoa:CaucePermanente", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.4, isBaseLayer: false, visibility: true,
                noLegend: false}
    ),

    new OpenLayers.Layer.WMS(
            "Ronda Hidrológica",
            'http://localhost:8080/geoserver/mocoa/wms?',
            {layers: "mocoa:Ronda_Hidrologica", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.4, isBaseLayer: false, visibility: true,
                noLegend: false}
    )

    // new OpenLayers.Layer.WMS("Global Imagery",
    //     "http://demo.boundlessgeo.com/geoserver/gwc/service/wms",
    //     {layers: "nasa:bluemarble"},
    //     {singleTile: false, isBaseLayer: true, visibility: true, noLegend: true}),
    //
    // new OpenLayers.Layer.WMS(
    //         "World schematic",
    //         'http://www2.demis.nl/wms/wms.ashx?WMS=WorldMap',
    //         {layers: "Countries,Borders,Coastlines", format: 'image/png'},
    //         {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true}
    // ),
    //
    //
    // new OpenLayers.Layer.WMS(
    //         "World image",
    //         'http://www2.demis.nl/wms/wms.ashx?WMS=BlueMarble',
    //         {layers: "Earth Image", format: 'image/png'},
    //         {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true}
    // ),

    /*
     * ==================================
     *            Overlays
     * ==================================
     */
    // new OpenLayers.Layer.WMS(
    //         "HILLSHADE Europe - osm-wms.de",
    //         'http://129.206.228.72/cached/osm?',
    //         {layers: "europe_wms:hs_srtm_europa", transparent: true, format: 'image/png'},
    //         {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: "application/vnd.ogc.gml"}
    // ),
    // new OpenLayers.Layer.WMS(
    //         "HistOSM - histosm.org",
    //     'http://129.206.228.72/cached/osm?',
    //         {layers: "osm_auto:histosm2_temp", transparent: true, format: 'image/png'},
    //         {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: "application/vnd.ogc.gml"}
    // ),
    // new OpenLayers.Layer.WMS(
    //         "OSM Landuse - Landcover",
    //     'http://129.206.228.72/cached/osm?',
    //         {layers: "osm_lulc", transparent: true, format: 'image/png'},
    //         {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: true, noLegend: false, featureInfoFormat: "application/vnd.ogc.gml"}
    // )
];

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. "-" denotes a separator item.
Heron.options.map.toolbar = [
    {type: "scale", options: {width: 110}},
    {type: "-"} ,
    {type: "featureinfo", options: {popupWindow: {}}},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {type: "measurelength", options: {geodesic: true}},
    {type: "measurearea", options: {geodesic: true}}
];

// The content of the HTML info panel.
Ext.namespace("Heron.options.info");
Heron.options.info.html =
          '<div class="hr-html-panel-body">' +
          '<p>Visor geográfico proyecto rios.</p>' +
          '<p>Por: Sebastian Sierra</p>' +
          '</div>';
//        '<div class="hr-html-panel-body">' +
//                '<p>This is a demo app of the <a href="http://heron-mc.org" target="_new">Heron Mapping Client</a>.</p>' +
//                '<p>A complete configuration is defined via two JS files: </p>' +
//                '<ul>' +
                // '<li><a href="Layout.js" target="_new">Layout.js</a> : defines this page layout and its panels/widgets</li>' +
                // '<li><a href="Options.js" target="_new">Options.js</a> : defines options like Layers for that page layout</li>' +
                // '</ul>' +
                // '<p>This split (into layout/options) is just an example for a convenient way to structure a Heron layout.</p>' +
                // '<p>Different (CSS) styles and languages for this same demo app can also be defined by overruling the default style and language. Examples:</p>' +
                // '<ul>' +
                // '<li><a href="index.html">Default style: blue with English Language</a></li>' +
                // '<li><a href="index-de-blue.html">Same blue style with German Language</a></li>' +
                // '<li><a href="index-nl-blue.html">Same blue style with Dutch Language</a></li>' +
                // '<li><a href="index-en-gray.html">Gray style with English Language (red headings)</a></li>' +
                // '</ul>' +
                // '<p>Note: Feature Info, "I" button in toolbar, is only available for World Cities Layer.</p>' +
                // '<p>Base WMS Layers provided by the <a href="http://www.demis.nl" target="_new">Demis (NL)</a></p>' +
                // '<p>Overlay WMS Layers provided by the <a href="http://www.fao.org" target="_new">FAO</a></p>' +
                // '<p><i>Thanks to Wolfram Winter from <a href="http://www.bahn.de" target="_new">Deutsche Bahn</a> for providing the initial version and drive for this demo.</i></p>' +
                // '</div>';

/*
 * Values for BookmarksPanel (bookmarks to jump to specific
 * layers/zoom/center on map.
 */
Ext.namespace("Heron.options");
Heron.options.bookmarks =
        [
            {
                id: 'id_world_leticia',
                name: 'Leticia',
                desc: 'Leticia World Image',
                layers: ['World image'],
                x: -7795688.58618,
                y: -478483.87351,
                zoom: 10
            },
            {
                id: 'id_world_mocoa',
                name: 'Mocoa',
                desc: 'Mocoa World Image',
                layers: ['World image'],
                x: -8534456.54634,
                y: 127778.94181,
                zoom: 10
            }
        ];
