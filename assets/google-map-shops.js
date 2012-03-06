$(document).ready(function() {
	
     var myOptions = {
       center: new google.maps.LatLng(51.544608,  -0.102980),
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     
  
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var geocoder = new google.maps.Geocoder();

    var info = {
	 	gill: {
			address: 'N1 1RQ, England',
			popup: '<div><strong>Gill Wing</strong><p style="width: 175px;">Gift shop in Islington High St stocking Archie.</p></div>'	
		},
		becca: {
			address: 'E3 5SN, England',
			popup: '<div><strong>Victoria Bark</strong><p style="width: 175px;">Dog grooming service near Victoria Park stocking Archie.</p></div>'	
		},
		felix: {
			address: 'N1 8EA, England',
			popup: '<div><strong>Felix &amp; Lily</strong><p style="width: 175px;">Boys & girls boutique in Camden Passage stocking Archie & Blake</p></div>'	
		}	
	};
	
	var i;
    var bounds = new google.maps.LatLngBounds();
    for(i in info){
	   (function(x){
			geocoder.geocode({address: info[i].address}, function(results, status) {

					if (status == google.maps.GeocoderStatus.OK) {

			         bounds.extend(results[0].geometry.location);

					  var marker = new google.maps.Marker({
			            map: map,
			            position: results[0].geometry.location
			          });

					  var infowindow = new google.maps.InfoWindow({
					    content: info[x].popup,
					    maxWidth: 150
					  });

					  google.maps.event.addListener(marker, 'click', function() {
						  infowindow.open(map,marker);
					  });
					
					  map.fitBounds(bounds);

			        } 
			});
	   })(i)
    }

});

