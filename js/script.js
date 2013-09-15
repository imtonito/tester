$(document).ready(function () {
    $("#btnSell").click(function () {
		/*$logoPos = $(".logo").css("top");
		
		if ($logoPos == '0px') {
        $(".logo").animate({ 'top': '-105px' }, 'fast');*/
    });
	
	
	/*------INIT------*/
	$('.popupBgAbout').css('opacity','0');
	$('.popupBgThx').css('opacity','0');
	$('.popupBgThx2').css('opacity','0');
	$('.popupBgPolicy').css('opacity','0');
	$('.popupBgTerms').css('opacity','0');
	$('#popupContentAbout').animate({'top':'-500px'});
	$('#popupContentThx').animate({'top':'-500px'});
	$('#popupContentThx2').animate({'top':'-500px'});
	$('#popupContentPolicy').animate({'top':'-500px'});
	$('#popupContentTerms').animate({'top':'-500px'});
	
	/*------RADIO BUTTON------*/
	$('#location .radio').click(function(){
		console.log($('input#text33').prop('checked'))
		if ($('#text33').prop('checked') == true){
			$('.formRow.noLabel').css('opacity','1');
			$('#text4').removeAttr('disabled').removeClass('disabled');
		}
		else {
			$('.formRow.noLabel').css('opacity','0');
			$('#text4').attr('disabled','disabled').addClass('disabled');
		}
	});
	
	/*------ADD NOTIF------*/
	$('.notificationNew').css('height','0');
	
	$('.btnAdd').click(function(){
		$('.notificationNew').animate({'height':'240px'}); 
	});
	
	$('#btnCancelAdd').click(function(){
		$('.notificationNew').animate({'height':'0px'});
	});
	
	/*------- POPUP ABOUT -------*/
	$('#btnClose').click(function(){
		$('#popupAbout').fadeOut(200,function(){
			$('#popupAbout').hide();
			$('.popupBgAbout').css('opacity','0');
			$('#popupContentAbout').css('top','-500px');
		});
	});
	
	$('.popupBgAbout').click(function(){
		$('#popupAbout').fadeOut(200,function(){
			$('#popupAbout').hide();
			$('.popupBgAbout').css('opacity','0');
			$('#popupContentAbout').css('top','-500px');
		});
	});
	
	$('#aboutUs').click(function(){
		$('#popupAbout').show();
		$('.popupBgAbout').fadeTo(200,0.8,function(){
			$('#popupContentAbout').animate({'top':'70px'});
		});
	});
	
	/*------- POPUP THANKYOU -------*/
	
	
//	$('#btnSubmit').click(function(){
//		$('#popupThx').show();
//		$('.popupBgThx').fadeTo(200,0.8,function(){
//			$('#popupContentThx').animate({'top':'70px'});
//		});
//	});
	
	
	$('.popupBgThx').click(function(){
		$('#formSellCon').css('height','0');
		$('#logo').css('margin-top','150px');
		/*$('#tagline').css('display','block');*/
		$('#popupThx').fadeOut(200,function(){
			$('#popupThx').hide();
			$('.popupBgThx').css('opacity','0');
			$('#popupContentThx').css('top','-500px');
			
			$('#formSellCon').css('height','0');
			$('#logo').css('margin-top','150px');
			/*$('#tagline').css('display','block');*/
		});
	});	
	
	/*------- POPUP POLICY -------*/
	$('#btnClosePolicy').click(function(){
		$('#popupPolicy').fadeOut(200,function(){
			$('#popupPolicy').hide();
			$('.popupBgPolicy').css('opacity','0');
			$('#popupContentPolicy').css('top','-500px');
		});
	});
	
	$('.popupBgPolicy').click(function(){
		$('#popupPolicy').fadeOut(200,function(){
			$('#popupPolicy').hide();
			$('.popupBgPolicy').css('opacity','0');
			$('#popupContentPolicy').css('top','-500px');
		});
	});
	
	$('#btnPolicy').click(function(){
		$('#popupPolicy').show();
		$('.popupBgPolicy').fadeTo(200,0.8,function(){
			$('#popupContentPolicy').animate({'top':'70px'});
		});
	});
	
	/*------- POPUP TERMS -------*/
	$('#btnCloseTerms').click(function(){
		$('#popupTerms').fadeOut(200,function(){
			$('#popupTerms').hide();
			$('.popupBgTerms').css('opacity','0');
			$('#popupContentTerms').css('top','-500px');
		});
	});
	
	$('.popupBgTerms').click(function(){
		$('#popupTerms').fadeOut(200,function(){
			$('#popupTerms').hide();
			$('.popupBgTerms').css('opacity','0');
			$('#popupContentTerms').css('top','-500px');
		});
	});
	
	$('#btnTerms').click(function(){
		$('#popupTerms').show();
		$('.popupBgTerms').fadeTo(200,0.8,function(){
			$('#popupContentTerms').animate({'top':'70px'});
		});
	});
	
	/*-----------------POPUP SHARE----------------*/
	$('#btnCloseShare').click(function(){
		$('#popupShare').fadeOut(200,function(){
			$('#popupShare').hide();
			$('.popupBgShare').css('opacity','0');
			$('#popupContentShare').css('top','-500px');
		});
	});
	
	$('.popupBgShare').click(function(){
		$('#popupShare').fadeOut(200,function(){
			$('#popupShare').hide();
			$('.popupBgShare').css('opacity','0');
			$('#popupContentShare').css('top','-500px');
		});
	});
	
	$('#btnShare').click(function(){
		$('#popupShare').show();
		$('.popupBgShare').fadeTo(200,0.8,function(){
			$('#popupContentShare').animate({'top':'70px'});
		});
	});
	
	
	/*--------------------------------------------*/
	$('#formSellCon').css('height','0');
	$('#logo').css('margin-top','150px');
	/*$('#tagline').css('display','block');*/
	
	$('#btnSell').click(function(){	
		/*$('#tagline').fadeOut(200,function(){*/
			$('#formSellCon').animate({'height':'300px'});
			$('#logo').animate({'margin-top':'0'});
			$('#btnBuy').removeClass('orange').addClass('ActiveMenu');
			$('#btnSell').removeClass('activeMenu').addClass('orange');
		/*});*/
	});
	
	$('#btnBuy').click(function(){
		/*$('#tagline').fadeOut(200,function(){*/
			$('#formSellCon').animate({'height':'300px'});
			$('#logo').animate({'margin-top':'0'});
			$('#btnSell').removeClass('orange').addClass('ActiveMenu');
			$('#btnBuy').removeClass('activeMenu').addClass('orange');
		/*});*/
	});
	
	/*-------------------------------------------*/
	$('#btnSaveUpdate').click(function(){
//		$('#popupThx2').show();
//		$('.popupBgThx2').fadeTo(200,0.8,function(){
//			$('#popupContentThx2').animate({'top':'70px'});
//		});
	});
        
        var $text ;
        $(document).ajaxStart(function() {
            $text = $('button.ajax').text();
            $('button.ajax').text('LOADING..');
        })
        
        $(document).ajaxStop(function() {
            $('button.ajax').text($text);
        })
        
	/*--------------------------------------------*/
	
});