/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    var popup;
    var n=1;
    var options = {
        zoom: 3
        , center: new google.maps.LatLng(18.2, -66.5)
        , mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    var map = new google.maps.Map(document.getElementById('map'), options);
 
    var place = new Array();
    place['San Juan'] = new google.maps.LatLng(18.465, -66.105);
    place['Fajardo'] = new google.maps.LatLng(18.336, -65.65);
 
    var marker = new google.maps.Marker({
            position: place['San Juan']
            , map: map
            , title: 'San Juan'
            , icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/red/blank.png'
        });
 
        marker = new google.maps.Marker({
            position: place['Fajardo']
            , map: map
            , title: 'Fajardo'
            , icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png'
        });
 
    var limits = new google.maps.LatLngBounds(
        place['San Juan']
        , place['Fajardo']
    );
    map.fitBounds(limits);
}



