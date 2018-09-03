//google maps api

function initMap() {
    var c = {lat: 59.960730, lng: 30.280291};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: c,
        scrollwheel: false,
        draggable: !("ontouchend" in document),
        gestureHandling: 'cooperative'
    });
    
    var marker = new google.maps.Marker({
        position: c,
        map: map,
        icon: {
            url: 'img/content/map-marker.png',
            size: new google.maps.Size(108,108),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,32),
        },
        scrollwheel: false,
        draggable: !("ontouchend" in document),
        gestureHandling: 'cooperative'
        
    });
    
    if(window.matchMedia('(max-width: 768px)').matches) {
    var c = {lat: 59.960730, lng: 30.280291};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: c,
        scrollwheel: false,
        draggable: !("ontouchend" in document),
        gestureHandling: 'cooperative'
    });
    
    var marker = new google.maps.Marker({
        position: c,
        map: map,
        icon: {
            url: 'img/content/map-marker.png',
            size: new google.maps.Size(108,108),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,32),
            },
        scrollwheel: false,
        draggable: !("ontouchend" in document),
        gestureHandling: 'cooperative'
        });
    };
}




//слайдер


$('.main').onepage_scroll({
            sectionContainer: "section",
            easing: 'linear',
            animationTime: 400,
            pagination: false,
            updateURL: false,
            loop: false,
        });  


$(function() {
    
    //главная навигация
    
    $('.go-to-2').click(function() {
        $('.main').moveTo(2);
        $('.second-page-nav_item:nth-child(2)').addClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
    });
      
    $('.go-to-3').click(function() {
        $('.main').moveTo(3);
        $('.second-page-nav_item:nth-child(3)').addClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
    });  
    
    $('.go-to-4').click(function() {
        $('.main').moveTo(4);
        $('.second-page-nav_item:nth-child(4)').addClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
    });
    
    
    
    //моб
    
    $('.mob-1').click(function() {
        $('.mobile-menu').addClass('mobile-anim-close');
        $('.main').moveTo(2);
    })
    
    $('.mob-2').click(function() {
        $('.mobile-menu').addClass('mobile-anim-close');
        $('.main').moveTo(3);
    })
    
    $('.mob-3').click(function() {
        $('.mobile-menu').addClass('mobile-anim-close');
        $('.main').moveTo(4);
    })
    
    $('.big-logo_menu').click(function() {
        $('.mobile-menu').addClass('mobile-anim-close');
        $('.main').moveTo(1);
    })
    
    //остальные старницы навигация
    
    $('.logo-min').click(function() {
        $('.main').moveTo(1);
    });
    
    $('.second-page-nav_item:nth-child(2)').click(function() {
        $('.main').moveTo(2);
        $('.second-page-nav_item:nth-child(2)').addClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
    });
    
    $('.second-page-nav_item:nth-child(3)').click(function() {
        $('.main').moveTo(3);
        $('.second-page-nav_item:nth-child(3)').addClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
    });
    
    $('.second-page-nav_item:nth-child(4)').click(function() {
        $('.main').moveTo(4);
        $('.second-page-nav_item:nth-child(4)').addClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
        $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
    })
});

//паралакс треугольников

$(document).ready(function(){
	$(document).find('.js-triangle').each(function() {
		$(this).attr('data-speed', ((Math.random() * 5) + 5));
	});
});

$(window).mousemove(function(e) {
	var xpos = e.clientX;
	var ypos = e.clientY;
	xpos = ($(window).width() / 15 -  xpos/25);
	ypos = ($(window).height() / 15 -  ypos/25);

	$(document).find('.js-triangle').each(function() {
		var speed = parseInt($(this).attr('data-speed'));
		$(this).css('transform','translateX(' + (xpos / speed) + 'px)' + ' translateY(' + (ypos / speed) + 'px)');
	});
});

//анимация контента

$.fn.topScreen = function (offset) {
 if(typeof(offset) == 'undefined')var offset = 200;
    if($(this).offset().top - offset <= $(window).scrollTop() + window.innerHeight)return true;
 return false;
};


//анимация контента дестоп

$(function() {
    
    if(window.matchMedia('(min-width:968px)').matches) {
        if($('body').scrollTop() == 0) {
            $('.main-header_right').addClass('main-header_right--anim');
            $('.first-page_bottom').addClass('first-page_bottom--anim');
            $('.first-page .triangles').addClass('triangles-show');
        }; 
    }
    
    if(window.matchMedia('(min-width: 968px)').matches) {
        $('body').scroll(function() {
            animContent();
        })
    }
    
    var h = $('.first-page').height();
    var h1 = $('.second-page').height();
    var h2 = $('.third-page').height();
    
    function animline() {
        if($('.first-page').topScreen(-200)) {
            $('.line-red').removeClass('line-red-30');
            $('.line-red').removeClass('line-red-60');
            $('.line-red').removeClass('line-red-100');
            $('.line-red').addClass('line-red-0');
        }
        
        if($('.second-page').topScreen(-h)) {
            $('.line-red').removeClass('line-red-0');
            $('.line-red').removeClass('line-red-60');
            $('.line-red').removeClass('line-red-100');
            $('.line-red').addClass('line-red-30');
        }
        
        if($('.third-page').topScreen(-h1)) {
            $('.line-red').removeClass('line-red-0');
            $('.line-red').removeClass('line-red-30');
            $('.line-red').removeClass('line-red-100');
            $('.line-red').addClass('line-red-60');
        }
        
        if($('.fourth-page').topScreen(-h1)) {
            $('.line-red').removeClass('line-red-0');
            $('.line-red').removeClass('line-red-60');
            $('.line-red').removeClass('line-red-30');
            $('.line-red').addClass('line-red-100');
        }
    }
    
    


//мобильное меню 

    $('.show-menu').click(function() {
        $('.mobile-menu').removeClass('mobile-anim-close');
        $('.mobile-menu').css('display', 'flex');
        $('.mobile-menu').addClass('mobile-animation');
    });
    
    $('.close-menu').click(function() {
        $('.mobile-menu').addClass('mobile-anim-close')
    })
    
    //fixed меню
    
    //адаптив
    
    function b() {
        if(Math.abs($('.first-page').offset().top) < $('.first-page').height()) {
            $('.tablet-menu_left').removeClass('tablet-menu_left--anim');
            $('.tablet-menu_left').addClass('tablet-menu_left--anim1');
            $('.tablet-menu_left').css('display', 'none');
        }
    }
    
    function a() {
        if(Math.abs($('.first-page').offset().top) > $('.first-page').height() * 0.5) {
            $('.tablet-menu_left').removeClass('tablet-menu_left--anim1');
            $('.tablet-menu_left').addClass('tablet-menu_left--anim');
            $('.tablet-menu_left').css('display', 'flex');
        }
    }
    
    function c() {
        if(Math.abs($('.first-page').offset().top) > $('.first-page').height() * 0.55) {
            $('.show-menu').addClass('show-menu_red');
        }
    }
    
    function d() {
        if(Math.abs($('.first-page').offset().top) > $('.first-page').height()) {
            $('.show-menu').removeClass('show-menu_white');
        }
    }
    
    if(window.matchMedia('(max-width: 968px)').matches) {
        $('body').scroll(function() {
            a();
            b();
            c();
        })
    }
    
    //descktop
    
    if(window.matchMedia('(max-width: 480px)').matches) { 
        $('.mobile-img_1 img').attr('src', 'img/content/thirdImg1.png');
        $('.mob-1').click(function() {
            $('.mob-1').find('a').addClass('this-menu_mobile');
            $('.mob-2 a').removeClass('this-menu_mobile');
            $('.mob-3 a').removeClass('this-menu_mobile');
        })
        
        $('.mob-2').click(function() {
            $('.mob-2').find('a').addClass('this-menu_mobile');
            $('.mob-1 a').removeClass('this-menu_mobile');
            $('.mob-3 a').removeClass('this-menu_mobile');
        })
        
        $('.mob-3').click(function() {
            $('.mob-3').find('a').addClass('this-menu_mobile');
            $('.mob-2 a').removeClass('this-menu_mobile');
            $('.mob-1 a').removeClass('this-menu_mobile');
        })
        
        $('.big-logo_menu').click(function() {
            $('.mob-3').find('a').removeClass('this-menu_mobile');
            $('.mob-2 a').removeClass('this-menu_mobile');
            $('.mob-1 a').removeClass('this-menu_mobile');
        })
    }

})

$(function() {
    
    
        
    $('.logo-min').click(function() {
        $('.fixed').removeClass('triangles-show');
        $('.fixed').addClass('opacity-anim'); 
    })
    
    $('.header-nav_item').click(function() {
        $('.fixed').addClass('triangles-show');
    })
    
    if(window.matchMedia('(min-width: 968px)').matches) {
        $('.main').onepage_scroll({
            afterMove: function(index) {
            a1();
            animContent();
            }
        });
        
    }
    
    function animContent() {
        
        if($('.first-page').topScreen(-200)) {
            $('.line-red').removeClass('line-red-30');
            $('.line-red').removeClass('line-red-60');
            $('.line-red').removeClass('line-red-100');
            $('.line-red').addClass('line-red-0');
        }
        
        if($('.second-page_img_wrap').topScreen(-200)) {
            $('.second-page_img_wrap').addClass('second-page_img_wrap--anim');
            $('.second-page_content').addClass('second-page_content--anim');
            $('.second-page .triangles').addClass('triangles-show');
            $('.line-red').removeClass('line-red-0');
            $('.line-red').removeClass('line-red-60');
            $('.line-red').removeClass('line-red-100');
            $('.line-red').addClass('line-red-30');
        }; 
        
        if($('.third-page_content-top').topScreen(-200)) {
            $('.third-page_content-top').addClass('third-page_content-top--anim');
            $('.third-page_content-bottom').addClass('third-page_content-bottom--anim');
            $('.mobile-img').addClass('mobile-img--anim');
            $('.third-page .triangles').addClass('triangles-show');
            $('.line-red').removeClass('line-red-0');
            $('.line-red').removeClass('line-red-30');
            $('.line-red').removeClass('line-red-100');
            $('.line-red').addClass('line-red-60');
        };
        
        
        if($('.fourth-page_content_left').topScreen(-200)) {
            $('.fourth-page_content_left').addClass('fourth-page_content_left--anim');
            $('.fourth-page_content_right').addClass('fourth-page_content_right--anim')
            $('.fourth-page .triangles').addClass('triangles-show');
            $('.line-red').removeClass('line-red-0');
            $('.line-red').removeClass('line-red-60');
            $('.line-red').removeClass('line-red-30');
            $('.line-red').addClass('line-red-100');
        };
        
    };
    
     var h = $('.first-page').height();
    var h1 = $('.second-page').height();
    var h2 = $('.third-page').height();
    
    function menuUnder() {
       if($('.first-page').topScreen(-200)) {            
            $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
        }
        
        if($('.second-page').topScreen(-h)) {
            $('.second-page-nav_item:nth-child(2)').addClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
        }
        
        if($('.third-page').topScreen(-h1)) {
            $('.second-page-nav_item:nth-child(3)').addClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(4)').removeClass('second-page-nav_active');
        }
        
        if($('.fourth-page').topScreen(-h1)) {
            $('.second-page-nav_item:nth-child(4)').addClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(3)').removeClass('second-page-nav_active');
            $('.second-page-nav_item:nth-child(2)').removeClass('second-page-nav_active');
        }
    }
    
     $('.main').onepage_scroll({
            afterMove: function(index) {
            animContent();
                a1();
                menuUnder();
            }
        });

    function a1() {
        if(Math.abs($('.first-page').offset().top) >= $('.first-page').height()) {
            $('.fixed').css('display', 'flex');
        }
    }
    
    function b1() {
        if(Math.abs($('.first-page').offset().top) < $('.first-page').height()) {
            $('.fixed').css('display', 'none');
        }
    }
    
    function mWheel() {
        $(document).addEventListener('mousewheel DOMMouseScroll MozMousePixelScroll');
    }
    
   $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function() {   
       b1();
       if(Math.abs($('.first-page').offset().top) < $('.first-page').height()) {
            $(document).trigger('mousewheel DOMMouseScroll MozMousePixelScroll');
           $(document).trigger('mousewheel DOMMouseScroll MozMousePixelScroll');
            $('.fixed').css('display', 'none');
            $('.fixed').removeClass('opacity-anim');
        }
   })
    
    //t,exbq rjcnskm
    
    $(document).bind('mousemove', function() {
        b1();
    })
    
    
    
    
})
      