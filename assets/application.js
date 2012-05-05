	$(document).ready(function(){
		
		    if($("#template").val() == 'index'){
				$('.TB_Wrapper').TransBanner({

					slide_autoplay: true,
					slide_delaytime: 5,
					slide_transition: 1,	
					slide_transition_period: 800,
					slide_preload_images: 1,

					image_align_center: true,
					image_resize: true,
					image_resize_to_fit: false,

					button_size: 20,
					button_margin: 4,
					button_opacity: .7,
					button_space: 2,
					button_color: '#FFFFFF',	

					button_show_next: true,
					button_show_back: false,
					button_show_timer: true,
					button_show_numbers: true,

					button_numbers_autohide: true,
					button_numbers_horizontal: false,	

					caption_float_mode: true,
					caption_position_x : 0,
					caption_position_y : 0,
					caption_width : 1072,
					caption_bg_blur: 12,
					caption_padding_x: 24,
					caption_padding_y: 12,
					caption_margin_x: 0,
					caption_margin_y: 0,

					caption_height: '',
					caption_bg_color: '#FFFFFF',
					caption_bg_opacity: .2,
					caption_bg_radius: 0,
					caption_bg_shadow: .3,
					caption_allow_selection: false,

					caption_border: 1,
					caption_border_color: '#FFFFFF',
					caption_border_opacity: .15,

					touch_dragdrop_factor: 60,
					touch_throw_factor: 5
				});
		    }else{
					$('.TB_Wrapper').TransBanner({

						slide_autoplay: true,
						slide_delaytime: 8,
						slide_transition: 1,	
						slide_transition_period: 800,
						slide_preload_images: 1,

						image_align_center: true,
						image_resize: true,
						image_resize_to_fit: false,

						button_size: 20,
						button_margin: 4,
						button_opacity: .7,
						button_space: 2,
						button_color: '#FFFFFF',	

						button_show_next: true,
						button_show_back: false,
						button_show_timer: true,
						button_show_numbers: true,

						button_numbers_autohide: true,
						button_numbers_horizontal: false,	

						caption_float_mode: true,
						caption_position_x : 0,
						caption_position_y : 0,
						caption_width : 1072,
						caption_bg_blur: 12,
						caption_padding_x: 24,
						caption_padding_y: 12,
						caption_margin_x: 0,
						caption_margin_y: 0,

						caption_height: '',
						caption_bg_color: '#FFFFFF',
						caption_bg_opacity: .2,
						caption_bg_radius: 0,
						caption_bg_shadow: .3,
						caption_allow_selection: false,

						caption_border: 1,
						caption_border_color: '#FFFFFF',
						caption_border_opacity: .15,

						touch_dragdrop_factor: 60,
						touch_throw_factor: 5
					});
			}
		
		    //$('.TB_Wrapper').complete()
			
			$('.boxgrid.slidedown').hover(function(){  
		        $(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});  
		    }, function() {  
		        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});  
		    });  
		    //Horizontal Sliding  
		    $('.boxgrid.slideright').hover(function(){  
		        $(".cover", this).stop().animate({left:'325px'},{queue:false,duration:300});  
		    }, function() {  
		        $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});  
		    });  
		    //Diagnal Sliding  
		    $('.boxgrid.thecombo').hover(function(){  
		        $(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});  
		    }, function() {  
		        $(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});  
		    });  
		    //Partial Sliding (Only show some of background)  
		    $('.boxgrid.peek').hover(function(){  
		        $(".cover", this).stop().animate({top:'90px'},{queue:false,duration:160});  
		    }, function() {  
		        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});  
		    });  
		    //Full Caption Sliding (Hidden to Visible)  
		    $('.boxgrid.captionfull').hover(function(){  
		        $(".cover", this).stop().animate({top:'441px'},{queue:false,duration:160});  
		    }, function() {  
		        $(".cover", this).stop().animate({top:'591px'},{queue:false,duration:160});  
		    });  
		    //Caption Sliding (Partially Hidden to Visible)  
		    $('.boxgrid.caption').hover(function(){  
		        $(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});  
		    }, function() {  
		        $(".cover", this).stop().animate({top:'220px'},{queue:false,duration:160});  
		    });
		    
		    if($(".blake-on-off").length > 0){
		    	var src = $(".blake-on-off").attr("src");
		    	(new Image()).src = src.replace("-off.jpg","-on.jpg");
			}
			
			$('.blake-on-off').hover(function(){
				  	var src = $(".blake-on-off").attr("src");
			        $(".blake-on-off").attr("src",src.replace("-off.jpg","-on.jpg"));  
			}, function() {  
			        var src = $(".blake-on-off").attr("src");
			        $(".blake-on-off").attr("src",src.replace("-on.jpg","-off.jpg"));
			});
			
			$("img.hola-brasil").simpletip({   
			   fixed: true,
			   content: 'Hola nos Brasil',
			   position: bottom
			});
         
	});
	
	