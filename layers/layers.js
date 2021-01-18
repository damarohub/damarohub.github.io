var wms_layers = [];

var format_ZonePLUselontype_0 = new ol.format.GeoJSON();
var features_ZonePLUselontype_0 = format_ZonePLUselontype_0.readFeatures(json_ZonePLUselontype_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonePLUselontype_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonePLUselontype_0.addFeatures(features_ZonePLUselontype_0);
var lyr_ZonePLUselontype_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonePLUselontype_0, 
                style: style_ZonePLUselontype_0,
                interactive: true,
    title: 'Zone PLU selon type<br />\
    <img src="styles/legend/ZonePLUselontype_0_0.png" /> <br />\
    <img src="styles/legend/ZonePLUselontype_0_1.png" /> 1AUA<br />\
    <img src="styles/legend/ZonePLUselontype_0_2.png" /> 1AUB<br />\
    <img src="styles/legend/ZonePLUselontype_0_3.png" /> 1AUE<br />\
    <img src="styles/legend/ZonePLUselontype_0_4.png" /> 2AUT<br />\
    <img src="styles/legend/ZonePLUselontype_0_5.png" /> A<br />\
    <img src="styles/legend/ZonePLUselontype_0_6.png" /> Ai<br />\
    <img src="styles/legend/ZonePLUselontype_0_7.png" /> Nb<br />\
    <img src="styles/legend/ZonePLUselontype_0_8.png" /> Nc<br />\
    <img src="styles/legend/ZonePLUselontype_0_9.png" /> Nca<br />\
    <img src="styles/legend/ZonePLUselontype_0_10.png" /> Ncl<br />\
    <img src="styles/legend/ZonePLUselontype_0_11.png" /> Ncv<br />\
    <img src="styles/legend/ZonePLUselontype_0_12.png" /> Nd<br />\
    <img src="styles/legend/ZonePLUselontype_0_13.png" /> Nde<br />\
    <img src="styles/legend/ZonePLUselontype_0_14.png" /> Nf<br />\
    <img src="styles/legend/ZonePLUselontype_0_15.png" /> Ng<br />\
    <img src="styles/legend/ZonePLUselontype_0_16.png" /> Ngv<br />\
    <img src="styles/legend/ZonePLUselontype_0_17.png" /> Nl<br />\
    <img src="styles/legend/ZonePLUselontype_0_18.png" /> Nm<br />\
    <img src="styles/legend/ZonePLUselontype_0_19.png" /> Nn<br />\
    <img src="styles/legend/ZonePLUselontype_0_20.png" /> RNU<br />\
    <img src="styles/legend/ZonePLUselontype_0_21.png" /> UAa<br />\
    <img src="styles/legend/ZonePLUselontype_0_22.png" /> UAb<br />\
    <img src="styles/legend/ZonePLUselontype_0_23.png" /> UAc<br />\
    <img src="styles/legend/ZonePLUselontype_0_24.png" /> UAh<br />\
    <img src="styles/legend/ZonePLUselontype_0_25.png" /> UBa<br />\
    <img src="styles/legend/ZonePLUselontype_0_26.png" /> UBb1<br />\
    <img src="styles/legend/ZonePLUselontype_0_27.png" /> UBb2<br />\
    <img src="styles/legend/ZonePLUselontype_0_28.png" /> UCa<br />\
    <img src="styles/legend/ZonePLUselontype_0_29.png" /> UCb<br />\
    <img src="styles/legend/ZonePLUselontype_0_30.png" /> UCg<br />\
    <img src="styles/legend/ZonePLUselontype_0_31.png" /> UDa<br />\
    <img src="styles/legend/ZonePLUselontype_0_32.png" /> UDb<br />\
    <img src="styles/legend/ZonePLUselontype_0_33.png" /> UDc<br />\
    <img src="styles/legend/ZonePLUselontype_0_34.png" /> UDe<br />\
    <img src="styles/legend/ZonePLUselontype_0_35.png" /> UDf<br />\
    <img src="styles/legend/ZonePLUselontype_0_36.png" /> UE<br />\
    <img src="styles/legend/ZonePLUselontype_0_37.png" /> UEm<br />'
        });
var format_A_virer_1 = new ol.format.GeoJSON();
var features_A_virer_1 = format_A_virer_1.readFeatures(json_A_virer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_virer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_virer_1.addFeatures(features_A_virer_1);
var lyr_A_virer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_virer_1, 
                style: style_A_virer_1,
                interactive: false,
                title: '<img src="styles/legend/A_virer_1.png" /> A_virer'
            });
var format_Parcelle_2 = new ol.format.GeoJSON();
var features_Parcelle_2 = format_Parcelle_2.readFeatures(json_Parcelle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelle_2.addFeatures(features_Parcelle_2);
var lyr_Parcelle_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelle_2, 
                style: style_Parcelle_2,
                interactive: true,
                title: '<img src="styles/legend/Parcelle_2.png" /> Parcelle'
            });

lyr_ZonePLUselontype_0.setVisible(true);lyr_A_virer_1.setVisible(false);lyr_Parcelle_2.setVisible(true);
var layersList = [lyr_ZonePLUselontype_0,lyr_A_virer_1,lyr_Parcelle_2];
lyr_ZonePLUselontype_0.set('fieldAliases', {'fid': 'fid', 'gc_key': 'gc_key', 'idzone': 'idzone', 'nom': 'nom', 'planche': 'planche', 'lot_meta': 'lot_meta', 'n_commune': 'n_commune', 'idurba': 'idurba', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'insee': 'insee', 'datappro': 'datappro', 'datvalid': 'datvalid', });
lyr_A_virer_1.set('fieldAliases', {'Id': 'Id', 'Nom': 'Nom', });
lyr_Parcelle_2.set('fieldAliases', {'fid': 'fid', 'gc_key': 'gc_key', 'angle': 'angle', 'nom': 'nom', 'planche': 'planche', 'lot_meta': 'lot_meta', 'n_commune': 'n_commune', 'n_section': 'n_section', 'n_parcelle': 'n_parcelle', 'n_compte': 'n_compte', 'ad_parcel': 'ad_parcel', 'n_v_parc': 'n_v_parc', 'rn_v_parc': 'rn_v_parc', 'civ_prop': 'civ_prop', 'nom_prop': 'nom_prop', 'p_prop': 'p_prop', 'ad_prop': 'ad_prop', 'n_v_prop': 'n_v_prop', 'rn_v_prop': 'rn_v_prop', 'cp_prop': 'cp_prop', 'com_prop': 'com_prop', 'surf_dgi': 'surf_dgi', 'z_pos': 'z_pos', 'occup_sol': 'occup_sol', 'statutparc': 'statutparc', 'occupant': 'occupant', });
lyr_ZonePLUselontype_0.set('fieldImages', {'fid': 'TextEdit', 'gc_key': 'TextEdit', 'idzone': 'TextEdit', 'nom': 'TextEdit', 'planche': 'TextEdit', 'lot_meta': 'TextEdit', 'n_commune': 'TextEdit', 'idurba': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'Hidden', 'urlfic': 'TextEdit', 'insee': 'TextEdit', 'datappro': 'TextEdit', 'datvalid': 'TextEdit', });
lyr_A_virer_1.set('fieldImages', {'Id': '', 'Nom': '', });
lyr_Parcelle_2.set('fieldImages', {'fid': 'TextEdit', 'gc_key': 'TextEdit', 'angle': 'TextEdit', 'nom': 'TextEdit', 'planche': 'TextEdit', 'lot_meta': 'TextEdit', 'n_commune': 'TextEdit', 'n_section': 'TextEdit', 'n_parcelle': 'TextEdit', 'n_compte': 'TextEdit', 'ad_parcel': 'TextEdit', 'n_v_parc': 'TextEdit', 'rn_v_parc': 'TextEdit', 'civ_prop': 'TextEdit', 'nom_prop': 'TextEdit', 'p_prop': 'TextEdit', 'ad_prop': 'TextEdit', 'n_v_prop': 'TextEdit', 'rn_v_prop': 'TextEdit', 'cp_prop': 'TextEdit', 'com_prop': 'TextEdit', 'surf_dgi': 'TextEdit', 'z_pos': 'TextEdit', 'occup_sol': 'TextEdit', 'statutparc': 'TextEdit', 'occupant': 'TextEdit', });
lyr_ZonePLUselontype_0.set('fieldLabels', {'fid': 'no label', 'gc_key': 'no label', 'idzone': 'no label', 'nom': 'no label', 'planche': 'no label', 'lot_meta': 'no label', 'n_commune': 'no label', 'idurba': 'no label', 'libelle': 'no label', 'libelong': 'no label', 'typezone': 'no label', 'destdomi': 'no label', 'urlfic': 'no label', 'insee': 'no label', 'datappro': 'no label', 'datvalid': 'no label', });
lyr_A_virer_1.set('fieldLabels', {'Id': 'no label', 'Nom': 'no label', });
lyr_Parcelle_2.set('fieldLabels', {'fid': 'no label', 'gc_key': 'no label', 'angle': 'no label', 'nom': 'no label', 'planche': 'no label', 'lot_meta': 'no label', 'n_commune': 'no label', 'n_section': 'no label', 'n_parcelle': 'no label', 'n_compte': 'no label', 'ad_parcel': 'no label', 'n_v_parc': 'no label', 'rn_v_parc': 'no label', 'civ_prop': 'no label', 'nom_prop': 'no label', 'p_prop': 'no label', 'ad_prop': 'no label', 'n_v_prop': 'no label', 'rn_v_prop': 'no label', 'cp_prop': 'no label', 'com_prop': 'no label', 'surf_dgi': 'no label', 'z_pos': 'no label', 'occup_sol': 'no label', 'statutparc': 'no label', 'occupant': 'no label', });
lyr_Parcelle_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});