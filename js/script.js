
	var html = document.documentElement;
	var body = document.body;


$(document).ready(function(){

	var lurl = window.location.href;
	
	// NAV DROP DOWN
	$('.mainNavItem1').hover(function(){
		$('.subNav')
		.stop()
		.slideDown(300)
	},function(){
		$('.subNav')
		.stop()
		.slideUp(400)
	});


	// goto opacity
	$('.goto').hover(function(){
		$(this).stop().animate({opacity: 0.5}, 350)
	},function(){
		$(this).stop().animate({opacity: 1}, 350)
	})
	

	// bg color
	var loc = window.location.pathname
	console.log(loc.indexOf("mosaik-page.html"));
	if(loc.indexOf("mosaik-page.html") != -1){
		$('body').css({'background':'#fafafa'})
	}
	else if(loc.indexOf("skulpture-page.html") != -1){
		$('body').css({'background':'#fafafa'})
	}
	else if(loc.indexOf("tech-page.html") != -1){
		$('body').css({'background':'#fafafa'})
	}
	else if(loc.indexOf("stone-page.html") != -1){
		$('body').css({'background':'#fafafa'})
	}	
	else if(loc.indexOf("waterjet-page.html") != -1){
		$('body').css({'background':'#fafafa'})
	}	
	else{
		$('body').css({
			'background':'url(./img/bg.png) repeat',
			'background-attachment':'fixed'
		})
	}


	//social opacity
	$('.social').children().hover(function(){
		$(this).stop().animate({opacity: 0.5}, 350)
	}, function(){
		$(this).stop().animate({opacity: 1}, 350)
	})

	//gal tabs
	$('.wtGalNav').children().on('click', function(){
		$('.wtjGalWrap').children().removeClass('activeBl');
		// $('.wtGalBlock').css({'opacity':0});
		var li_id = $(this).attr('id').replace('wgbn','');
		var div_id = "#wgb"+li_id
		$(div_id).addClass('activeBl');
	})

	//fancybox
	$(".fancybox").fancybox();

	//slider
	$("#owl-carousel").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carousel2").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carousel3").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carousel4").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carousel0").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselWJ").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselSp").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselSp1").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselSp2").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselSp3").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselMp").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselMp1").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	$("#owl-carouselMp2").owlCarousel({animateOut: 'fadeOut', mouseDrag: false,touchDrag: false});
	
	$('#owl-carousel .owl-dots').prependTo('#owl-carousel .owl-controls');
	$('#owl-carousel2 .owl-dots').prependTo('#owl-carousel2 .owl-controls');
	$('#owl-carousel3 .owl-dots').prependTo('#owl-carousel3 .owl-controls');
	$('#owl-carousel4 .owl-dots').prependTo('#owl-carousel4 .owl-controls');
	$('#owl-carousel0 .owl-dots').prependTo('#owl-carousel0 .owl-controls');
	$('#owl-carouselWJ .owl-dots').prependTo('#owl-carouselWJ .owl-controls');
	$('#owl-carouselSp .owl-dots').prependTo('#owl-carouselSp .owl-controls');
	$('#owl-carouselSp1 .owl-dots').prependTo('#owl-carouselSp1 .owl-controls');
	$('#owl-carouselSp2 .owl-dots').prependTo('#owl-carouselSp2 .owl-controls');
	$('#owl-carouselSp3 .owl-dots').prependTo('#owl-carouselSp3 .owl-controls');
	$('#owl-carouselMp .owl-dots').prependTo('#owl-carouselMp .owl-controls');
	$('#owl-carouselMp1 .owl-dots').prependTo('#owl-carouselMp1 .owl-controls');
	$('#owl-carouselMp2 .owl-dots').prependTo('#owl-carouselMp2 .owl-controls');

	

	//start
	var winh = $(window).height() + $('header').outerHeight();
	var winh2 = $(window).height();
	var winw = $(window).width();
	var docw = $(document).width();
	var doch = $(document).height();
	var scroll1 = $('body').scrollTop()

	if(lurl.indexOf(".html") != -1 || $.cookie('start') == 'done'){

		$('.bigWrapOne').remove();
		$('header , .hbg').css({opacity: 1});
	}
	else{
		$('.bigWrapOne').css({
			height:winh,
			width:docw
		})
		$('.innerBigWrapOne').animate({opacity: 0},2200);
		$('.startLogo').animate({opacity: 1},2200);
		setTimeout(function(){
			$('.bigWrapOne')				
			.animate({
				marginTop:'-'+winh+'px'
			}, 2000, function(){
				
				$('header , .hbg').animate({
				'opacity': '1'
			}, 1000)
			})
		}, 3000)

		$.cookie('start', 'done');
	}

	// scrolltotop after restart
	// setTimeout(function(){
	// 	$('html, body').scrollTop(0)
	// },300)

	// click on contact
	// $('.mainNavItem3').on('click', function(){
	// 	$("body, html").animate({"scrollTop":doch},2000);	
	// })  

	//galery work
	// $('.wtGalBlockRight > a').on('click', function(){
	// 	var imgwidth = $('img', this).width()
	// 	var imgParId = $(this).parent().attr('id');
	// 	console.log(imgParId);
	// 	var imgSrc1 = $("img",this).attr('src');
	// 	var imgSrc2 = parseInt(imgSrc1.replace(/\D+/g,""));
	// 	if(imgwidth<250){			
	// 		var imgw = 726;
	// 		$('#'+imgParId+'> a').css({'display':'none'});
	// 		$(this).css({'display':'block'}).addClass("imgGalWidth");
	// 		$("img",this).attr('src','img/waterjet/gallery/'+imgParId+'/img'+imgSrc2+'.png').attr('width',imgw)
	// 		var imgsrc = $("img",this).attr('src');
	// 		$('#'+imgParId+' .imgClose').css({'display':'block'});
	// 		$('#'+imgParId+' .rightarrow').css({'display':'block'})
	// 		$('#'+imgParId+' .leftarrow').css({'display':'block'})
	// 	}
	// 	else{
	// 		$("img",this).attr('src','img/waterjet/gallery/'+imgParId+'/sml/img'+imgSrc2+'.png').attr('width','');
	// 		$('.imgClose').css({'display':'none'});
	// 		$(this).removeClass("imgGalWidth");
	// 		$('.wtGalBlockRight > a').css({'display':'inline-block'});
	// 		$('.rightarrow').css({'display':'none'});			
	// 		$('.leftarrow').css({'display':'none'});			
	// 	}
	// })
	// $('.imgClose ').on('click', function(){
	// 	var imgParId2 = $(this).parent().attr('id');
	// 	var cImgAttr = $('.wtGalBlockRight .imgGalWidth img').attr('src')
	// 	var cImgAttr2 = parseInt(cImgAttr.replace(/\D+/g,""));
	// 	$('.wtGalBlockRight .imgGalWidth img').attr('src','img/waterjet/gallery/'+imgParId2+'/sml/img'+cImgAttr2+'.png').attr('width','');
	// 	$(this).css({'display':'none'});
	// 	$('.rightarrow').css({'display':'none'});			
	// 	$('.leftarrow').css({'display':'none'});
	// 	$('.wtGalBlockRight > a').removeClass("imgGalWidth");
	// 	$('.wtGalBlockRight > a:eq(cImgAttr2-1)').removeClass("imgGalWidth");
	// 	$('.wtGalBlockRight a').css({'display':'inline-block'});	
	// });
	// var imgn = 1;
	// $('.leftarrow').on('click', function(){	
	// 	var wpid = $(this).parent().attr('id')
	// 	var lwpid = $('#'+wpid+' a').length
	// 	if(imgn <= lwpid-1){
	// 		imgn++;
	// 	}
	// 	else if(imgn >= lwpid-1){
	// 		imgn = 1
	// 	}
	// 	console.log(imgn);
	// 	var laimgattr = $('.imgGalWidth img').attr('src');
	// 	var newlaimgattr = laimgattr.replace( /\d/g, imgn)
	// 	$('.imgGalWidth img').attr('src',newlaimgattr);	
	// })
	// $('.rightarrow').on('click', function(){
	// 	var wpid = $(this).parent().attr('id')
	// 	var lwpid = $('#'+wpid+' a').length
	// 	if(imgn > 1){
	// 		imgn--;
	// 	}
	// 	else {
	// 		imgn = lwpid
	// 	}
	// 	console.log(imgn);
	// 	var laimgattr = $('.imgGalWidth img').attr('src');
	// 	var newlaimgattr = laimgattr.replace( /\d/g, imgn)
	// 	$('.imgGalWidth img').attr('src',newlaimgattr);
	// })


	//for safari
	if($.browser.safari&&!$.browser.mozilla&&!$.browser.msie&&!$.browser.opera){
		$('nav').css({
			'margin-left':'300px'
		})
	} 

	//sliderText
	$('.owl-next ,.owl-prev').find('i').on('click', function(){
		var $this = $(this),
			parent = $this.parents('div.secondPartRight'),
			textHolder = parent.find('.textmp')
			curentText = parent.find('div.active.center').next().find('img').attr('alt');						
			textHolder.css({
				opacity:0
			}).animate({
				opacity:1
			},500).text(curentText);
	})
	$('.secondPartRight').each(function(i) {
		var altText = $(this).find('.active img').attr('alt');
		var emptyP = $(this).find('p.textmp');
		console.log(altText)
		emptyP.text(altText);	
	})


	$('.stBlock .owl-next ,.stBlock .owl-prev').find('i').on('click', function(){
		var $this = $(this),
			parent = $this.parents('div.stBlock'),
			textHolder = parent.find('.textmp')
			curentText = parent.find('div.active.center').next().find('img').attr('alt');
			textHolder.css({
				opacity:0
			}).animate({
				opacity:1
			},500).text(curentText);
	})
	$('.stBlock').each(function(i) {
		var altText = $(this).find('.active img').attr('alt');
		var emptyP = $(this).find('p.textmp');
		console.log(altText)
		emptyP.text(altText);
	
	})

	//for yakor
	if(window.location.hash == "#Formax"){
		$('body').scrollTop(850);
		if ($.browser.msie){
			$(document).scrollTop(850) 
		}
	} else if(window.location.hash == "#Waterjet"){
		$('body').scrollTop(150);
		if ($.browser.msie){
			$(document).scrollTop(150) 
		}
	}else if(window.location.hash == "#Denver"){
		$('body').scrollTop(1490);
		if ($.browser.msie){
			$(document).scrollTop(1490) 
		}
	}

	//for start logo center
	var ibwow = $('.innerBigWrapOne').width()
	var ibwoh = $('.innerBigWrapOne').height()
	var slw = $('.startLogo').width()
	var slh = $('.startLogo').height()
	var sll = ibwow/2 - slw/2
	var slt = ibwoh/2 - slh/2

	$('.startLogo').css({
		'left': sll,
		'top': slt
	})


});













