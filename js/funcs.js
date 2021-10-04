$(document).ready(function() {
	
	// Scroll with effect - Set 'a' tag with class 'scrollLink'
	$( "a.scrollLink" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
	});
	
	// Animateblock - usar en bloques clases: "animateblock top"
	var $elems = $('.animateblock');
	var winheight = $(window).height();
	var fullheight = $(document).height();

	$(window).scroll(function(){
		animate_elems();
	});
	
	function animate_elems() {
	   	wintop = $(window).scrollTop(); // calculate distance from top of window
	  	// loop through each item to check when it animates
	   	$elems.each(function(){
	     	$elm = $(this);
	      	
	      	if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
	      	
	      	topcoords = $elm.offset().top; // element's distance from top of page in pixels
	      	
	      	if(wintop > (topcoords - (winheight*.75))) {
	       		// animate when top of the window is 3/4 above the element
	     		$elm.addClass('animated');
	   		}
	   	});
	}

	// Fancybox -- modal image
	if ($('.fancy')[0]) $(".fancy").fancybox();

	// OWL carousel -- catalogo
	if ($('.owl-carousel')[0]){
		var owl = $('.owl-carousel');
		owl.owlCarousel({
	        margin: 10,
	        loop: true,
	        nav:true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	600: {
	            	items: 1
	          	}
	        }
	    })
	}

	// Slick carousel -- galeria, logos
	if ($('.customers-logo')[0]){
	    $('.customers-logo').slick({
	    	speed:300,
	    	arrows:false,
	    	autoplay: true,
	    	autoplaySpeed: 500,
	  		infinite: true,
	  		slidesToShow: 5,
	  		slidesToScroll: 1,
	  		responsive: [
			    {
			      breakpoint: 600,
			      settings: {
			      	arrows:false,
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			      	arrows:false,
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}

	if ($('.projects-logo')[0]){
	    $('.projects-logo').slick({
	    	speed:300,
	    	arrows:false,
	    	autoplay: true,
	    	autoplaySpeed: 500,
	  		infinite: true,
	  		slidesToShow: 5,
	  		slidesToScroll: 1,
	  		responsive: [
			    {
			      breakpoint: 600,
			      settings: {
			      	arrows:false,
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			      	arrows:false,
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}

	if ($('.gallery')[0]){
	    $('.gallery').slick({
	    	autoplay: true,
	  		infinite: true,
	  		slidesToShow: 3,
	  		slidesToScroll: 1,
	  		responsive: [
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}

    // Mail Contact
    $('#frm-contact').submit(function (event){
		event.preventDefault();
		$.ajax({
			method: 'post',
			url: 'sender-mail-contact.php',
			data: $( this ).serialize()
		})
		.done(function( data ) {
			if(data.result){
				$('#frm-contact').slideUp();
				$('#response').html('<p style="color:green">'+data.msg+'</p>');
			}else{
				$('#response').html('<p style="color:red">'+data.msg+'</p>');
			}
		});
	});

	// Mail Contact
    $('#frm-cotiza').submit(function (event){
		event.preventDefault();
		$.ajax({
			method: 'post',
			url: 'sender-mail-cotiza.php',
			data: $( this ).serialize()
		})
		.done(function( data ) {
			if(data.result){
				$('#frm-cotiza').slideUp();
				$('#response').html('<p style="color:green">'+data.msg+'</p>');
			}else{
				$('#response').html('<p style="color:red">'+data.msg+'</p>');
			}
		});
	});
});