var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/">© OpenStreetMap contributors</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TanzaniaNationalParks2016_1 = new ol.format.GeoJSON();
var features_TanzaniaNationalParks2016_1 = format_TanzaniaNationalParks2016_1.readFeatures(json_TanzaniaNationalParks2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanzaniaNationalParks2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanzaniaNationalParks2016_1.addFeatures(features_TanzaniaNationalParks2016_1);
var lyr_TanzaniaNationalParks2016_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanzaniaNationalParks2016_1, 
                style: style_TanzaniaNationalParks2016_1,
                popuplayertitle: 'Tanzania National Parks 2016',
                interactive: true,
    title: 'Tanzania National Parks 2016<br />\
    <img src="styles/legend/TanzaniaNationalParks2016_1_0.png" /> Conservation Area<br />\
    <img src="styles/legend/TanzaniaNationalParks2016_1_1.png" /> Game Reserve<br />\
    <img src="styles/legend/TanzaniaNationalParks2016_1_2.png" /> National Park<br />\
    <img src="styles/legend/TanzaniaNationalParks2016_1_3.png" /> Open area<br />\
    <img src="styles/legend/TanzaniaNationalParks2016_1_4.png" /> Wildlife Management Area<br />' });
var format_TanzaniaForestReserves2020_2 = new ol.format.GeoJSON();
var features_TanzaniaForestReserves2020_2 = format_TanzaniaForestReserves2020_2.readFeatures(json_TanzaniaForestReserves2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanzaniaForestReserves2020_2 = new ol.source.Vector({
    attributions: '&nbsp;&middot; <a href="https://www.protectedplanet.net/country/TZA">UNEP-WCMC</a>',
});
jsonSource_TanzaniaForestReserves2020_2.addFeatures(features_TanzaniaForestReserves2020_2);
var lyr_TanzaniaForestReserves2020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanzaniaForestReserves2020_2, 
                style: style_TanzaniaForestReserves2020_2,
                popuplayertitle: 'Tanzania Forest Reserves 2020',
                interactive: true,
    title: 'Tanzania Forest Reserves 2020<br />\
    <img src="styles/legend/TanzaniaForestReserves2020_2_0.png" /> Forest Plantation<br />\
    <img src="styles/legend/TanzaniaForestReserves2020_2_1.png" /> Forest Reserve<br />\
    <img src="styles/legend/TanzaniaForestReserves2020_2_2.png" /> Nature Forest Reserve<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_TanzaniaNationalParks2016_1.setVisible(true);lyr_TanzaniaForestReserves2020_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TanzaniaNationalParks2016_1,lyr_TanzaniaForestReserves2020_2];
lyr_TanzaniaNationalParks2016_1.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_TanzaniaForestReserves2020_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'wdpaid': 'wdpaid', 'wdpa_pid': 'wdpa_pid', 'pa_def': 'pa_def', 'name': 'Name', 'orig_name': 'orig_name', 'desig': 'Designation', 'desig_eng': 'desig_eng', 'desig_type': 'desig_type', 'iucn_cat': 'iucn_cat', 'int_crit': 'int_crit', 'marine': 'marine', 'rep_m_area': 'rep_m_area', 'gis_m_area': 'gis_m_area', 'rep_area': 'rep_area', 'gis_area': 'Area (km^2)', 'no_take': 'no_take', 'no_tk_area': 'no_tk_area', 'status': 'status', 'status_yr': 'Status year', 'gov_type': 'gov_type', 'own_type': 'own_type', 'mang_auth': 'mang_auth', 'mang_plan': 'mang_plan', 'verif': 'verif', 'metadataid': 'metadataid', 'sub_loc': 'sub_loc', 'parent_iso': 'parent_iso', 'iso3': 'iso3', 'supp_info': 'supp_info', 'cons_obj': 'cons_obj', });
lyr_TanzaniaNationalParks2016_1.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', });
lyr_TanzaniaForestReserves2020_2.set('fieldImages', {'ogc_fid': 'Hidden', 'wdpaid': 'Hidden', 'wdpa_pid': 'Hidden', 'pa_def': 'Hidden', 'name': 'TextEdit', 'orig_name': 'Hidden', 'desig': 'TextEdit', 'desig_eng': 'Hidden', 'desig_type': 'Hidden', 'iucn_cat': 'Hidden', 'int_crit': 'Hidden', 'marine': 'Hidden', 'rep_m_area': 'Hidden', 'gis_m_area': 'Hidden', 'rep_area': 'Hidden', 'gis_area': 'TextEdit', 'no_take': 'Hidden', 'no_tk_area': 'Hidden', 'status': 'Hidden', 'status_yr': 'Range', 'gov_type': 'Hidden', 'own_type': 'Hidden', 'mang_auth': 'Hidden', 'mang_plan': 'Hidden', 'verif': 'Hidden', 'metadataid': 'Hidden', 'sub_loc': 'Hidden', 'parent_iso': 'Hidden', 'iso3': 'Hidden', 'supp_info': 'Hidden', 'cons_obj': 'Hidden', });
lyr_TanzaniaNationalParks2016_1.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': '', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_TanzaniaForestReserves2020_2.set('fieldLabels', {'name': 'inline label - visible with data', 'desig': 'inline label - visible with data', 'gis_area': 'inline label - visible with data', 'status_yr': 'inline label - visible with data', });
lyr_TanzaniaForestReserves2020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});