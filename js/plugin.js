$(document).ready(function() {

	$(".extra").click(function() {

		if ($(this).hasClass('opened') == true ) {
			$(".drop-down").fadeOut(200);
			$(".extra").removeClass('opened');

		} else {

			$(".drop-down").fadeIn(200);
			$(".extra").addClass('opened');

		}

	});

		$(".tab1").click(function() {
			$(".tab-link1").show();
			$(".tab-link2").hide();
			$(".tab-link3").hide();			
			$(".tab-link4").hide();
			$(".tab1").addClass("now");
			$(".tab2").removeClass("now");		
			$(".tab3").removeClass("now");		
			$(".tab4").removeClass("now");		

		});

		$(".tab2").click(function() {
			$(".tab-link1").hide();
			$(".tab-link2").show();
			$(".tab-link3").hide();
			$(".tab-link4").hide();
			$(".tab2").addClass("now");
			$(".tab1").removeClass("now");		
			$(".tab3").removeClass("now");		
			$(".tab4").removeClass("now");		
		});

		$(".tab3").click(function() {
			$(".tab-link1").hide();
			$(".tab-link2").hide();
			$(".tab-link3").show();
			$(".tab-link4").hide();
			$(".tab1").removeClass("now");		
			$(".tab2").removeClass("now");		
			$(".tab3").addClass("now");		
			$(".tab4").removeClass("now");		

		});

		$(".tab4").click(function() {
			$(".tab-link1").hide();
			$(".tab-link2").hide();
			$(".tab-link3").hide();
			$(".tab-link4").show();
			$(".tab1").removeClass("now");		
			$(".tab2").removeClass("now");		
			$(".tab3").removeClass("now");		
			$(".tab4").addClass("now");		

		});

/* the table */
	$(".lat-company").click(function() {

		if ($(this).hasClass('opened') == true ) {
			$(".table-content").fadeOut(200);
			$(".lat-company").removeClass('opened');

		} else {

			$(".table-content").fadeIn(200);
			$(".lat-company").addClass('opened');

		};

	
	});
/* end the table */
	
	





});
