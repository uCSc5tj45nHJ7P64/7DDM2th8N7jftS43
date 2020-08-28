function showError(elem) {
	var toggle_count = 0;
	function toggleError() {
		$(elem).toggleClass('change');
		toggle_count = toggle_count + 1;
		if (toggle_count < 4)
			setTimeout(toggleError, 100);
		else
			hideError(elem);
	}
	toggleError(elem);
}

function hideError(elem) {
	$(elem).removeClass('change');
}


var objectMassive = [];
var sumValue = false;

function getGroup(fullName) {
	names = fullName.split("_");
	nameGroup = "";
	
	for (var j = 0; j <= names.length-1; j++ ) {
		if (names[j][0] != 'a')
		nameGroup = nameGroup + names[j] + "_";
	}
	nameGroup = nameGroup.substr(0,nameGroup.length-1);
	return nameGroup;
}

$(function () {

	var tail = window.location.search + window.location.hash;
	$('a').each(function() {
		var href = $(this).attr('href') + tail;
		$(this).attr('href', href);
	});

//
	$('label').on('click', function() {
		$('.hint').hide();
		thisName = $(this).prop("for");
		thisGroup = getGroup(thisName);
		
		currVal = {};
		$(this).closest('.slide').find('input[type="checkbox"]').each(function (ind, elem) {
					var name = $(elem).prop("id");
					var value = $(elem).prop("checked")*1;
					
					group = getGroup(name);
					
						if (typeof(currVal[group]) == "undefined")
							currVal[group] = 0;
						currVal[group] = currVal[group] + value;
					
		})
		
		$(this).closest('.slide').find('input[type="checkbox"]').each(function (ind, elem) {
			var name = $(elem).prop("id");
			if (thisName != name)
			if ((name.indexOf(thisGroup) >=0) && (thisGroup.indexOf("g") >= 0))
				if (currVal[thisGroup] > 0)
					$(elem).prop("checked", false);
		
		})
	});
jQuery.noConflict();
$(function () {
//    Запуск слайдера
    $(".rslides").responsiveSlides({
        auto: false, // Boolean: Animate automatically, true or false
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000, // Integer: Time between slide transitions, in milliseconds
        pager: true, // Boolean: Show pager, true or false
        nav: true, // Boolean: Show navigation, true or false
        random: false, // Boolean: Randomize the order of the slides, true or false
        pause: false, // Boolean: Pause on hover, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "Previous", // String: Text for the "previous" button
        nextText: "Next", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "rslides", // String: Change the default namespace used
        before: function () {
        }, // Function: Before callback
        after: function () {
        }     // Function: After callback
    });
})
    
//    Имитация клика на ссылку Next слайдера (показ следующего слайда) и все, что при этом происходит:
    $('.button').on('click', function(){
		var currentSlide = $('.slide');
		for (var i = 0; i <= currentSlide.length; i++){
			if ($(currentSlide[i]).css('opacity') == 1){
				msg = {};
				currVal = {};//[0];
				$(currentSlide[i]).find('input[type="checkbox"]').each(function (ind, elem) {
					var name = $(elem).prop("id");
					var value = $(elem).prop("checked")*1;
					msg[name] = value;
					
					var id_items = name.split("_");
					for (var j = 0; j <= id_items.length-1; j++ ) {
						if (typeof(currVal[id_items[j]]) == "undefined")
							currVal[id_items[j]] = 0;
						currVal[id_items[j]] = currVal[id_items[j]] + value;
					}
				});
				objectMassive[objectMassive.length] = msg;
				
				
			switch (i){	
				case 0: 
					if (currVal.q1 != 1) {
						showError('label');
						$('.hint').show();
						return false;
					}
					//изменение текста//
					if ($('#q1_g0_a2').prop('checked')){
						$("#rslides1_s1 .text h2:first-child").text("¿Qué edad tienen?");
						$("#rslides1_s1 .text h2:nth-child(5)").text('¿Es su pariente un hombre o una mujer? ');
						$("#rslides1_s2 .text h2:nth-child(1)").text('¿Cuánto tiempo se pasa de pie durante el día?');
						$("#rslides1_s3 .text h2:nth-child(1)").text('¿Qué síntomas típicos se observan?');
						$("#rslides1_s4 .text h2:nth-child(1)").text('¿Qué tratamiento ha realizado ya?');
						$( "label" ).removeClass('change');
					}
					else if ($('#q1_g0_a1').prop('checked')){
						$("#rslides1_s1 .text h2:first-child").text("¿Qué edad tienes?");
						$("#rslides1_s1 .text h2:nth-child(5)").text('¿Eres hombre o mujer?');
						$("#rslides1_s2 .text h2:nth-child(1)").text('¿Cuánto tiempo pasa de pie al día?');
						$("#rslides1_s3 .text h2:nth-child(1)").text('¿Qué síntomas típicos nota?');
						$("#rslides1_s4 .text h2:nth-child(1)").text('¿A qué tratamiento se ha sometido?');
						$( "label" ).removeClass('change');
					}
				
					break;
				case 1:
					if ((currVal.q2 != 1) && (currVal.q3 != 1)) {
						showError('label');
						$('.hint').show();
						return false;
					} else if (currVal.q2 != 1) {
						showError('.ch_q2 + label');
						$('.hint').show();
						return false;
					} else if (currVal.q3 != 1) {
						showError('.ch_q3 + label');
						$('.hint').show();
						return false;
					}

				
					break;
				case 2:
					if ((currVal.g1 != 1) && (currVal.g2 != 1)) {
						showError('label');
						$('.hint').show();
						return false;
					} else if (currVal.g1 != 1) {
						showError('.ch_q4_g1 + label');
						$('.hint').show();
						return false;
					} else if (currVal.g2 != 1) {
						showError('.ch_q4_g2 + label');
						$('.hint').show();
						return false;
					}
				
					break;
				case 3:
					if (currVal.q5 < 1) {
						showError('label');
						$('.hint').show();
						return false;
					}
			
					break;
				case 4:
					if (currVal.q6 < 1) {
						showError('label');
						$('.hint').show();
						return false;
					}
				
					break;
				
				}
			}
		};
		
		$('.next').trigger('click');    
        //    Скрытие нумерации слайдов на последнем слайде
        if($('.slide-last').css('opacity') == 1){
            $('.rslides_tabs').hide();
        }
    });
    
		//отпрака общих результатов на лендинг
		$('form').submit(function(e) {
			postVal = "";
			for (var i = 0;i<=objectMassive.length-1;i++) {
				for (elem in objectMassive[i]) {
					postVal = postVal + elem + "=" + objectMassive[i][elem] + "&";
				}
			}
			postVal = postVal.substr(0,postVal.length-1);
			$('#dataSend').val(postVal);
		});

});