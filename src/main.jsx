import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

var currentScene = "intro";
var newScene = "";

var visitedScreensArray = [];

var anyTransitionWorking = false;
var buttonTouch = false;

document.getElementById("c").style.pointerEvents = 'none';

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

		function waxon_tm_cursor(){

			var myCursor	= jQuery('.mouse-cursor');
		
			if(myCursor.length){
				if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n, i = 0,
					o = !1;
				window.onmousemove = function (s) {
					o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
				}, $("body").on("mouseenter", "data, .cursor-pointer", function () {
					e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
				}), $("body").on("mouseleave", "data, .cursor-pointer", function () {
					$(this).is("img") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
				}), e.style.visibility = "visible", t.style.visibility = "visible"
			}
			}
		};

		document.body.style.cursor = 'none';
		waxon_tm_cursor();
		
		$('img').on('dragstart', function(event) { event.preventDefault(); });

      });       

  	})

  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade',
	  closeOnBgClick: false,
	  enableEscapeKey: false
   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   		e.preventDefault();
		secondClickOnGrid();
   		$.magnificPopup.close();
	});

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});

	
	$(window).on("navigate", function (event, data) {
		var direction = data.state.direction;
		/*
		if (direction == 'back') {
			if(currentScene != "intro"){
				document.getElementById(currentScene).click();
			}
		}*/
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  
  	------------------------------------------------------ */

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  

 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);

			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});	

})(jQuery);

import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterCustomizationProvider } from "./contexts/CharacterCustomizationContext";

const myReactDom = ReactDOM.createRoot(document.getElementById("root"));

myReactDom.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }),
      }}
    >
	<CharacterCustomizationProvider>
        <CharacterAnimationsProvider>
          <App />
        </CharacterAnimationsProvider>
	</CharacterCustomizationProvider>
    </MantineProvider>
  </React.StrictMode>
)

export function renderReactDom(){
	myReactDom.render(
		<React.StrictMode>
		  <MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
			  globalStyles: (_theme) => ({
				body: {
				  width: "100vw",
				  height: "100vh",
				},
				"#root": {
				  width: "100%",
				  height: "100%",
				},
			  }),
			}}
		  >
		  <CharacterCustomizationProvider>
			  <CharacterAnimationsProvider>
				<App />
			  </CharacterAnimationsProvider>
		  </CharacterCustomizationProvider>
		  </MantineProvider>
		</React.StrictMode>
	  )
}

export default renderReactDom;

/*

function testPrint(){
	console.log("Printeando");
}

function ToGraduate(){
	ReactDOM.destroy();
	ReactDOM.createRoot(document.getElementById("root")).render(
		<React.StrictMode>
		  <MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
			  globalStyles: (_theme) => ({
				body: {
				  width: "100vw",
				  height: "100vh",
				},
				"#root": {
				  width: "100%",
				  height: "100%",
				},
			  }),
			}}
		  >
			<CharacterCustomizationProvider>
			  <CharacterAnimationsProvider>
				<GraduateApp />
			  </CharacterAnimationsProvider>
			</CharacterCustomizationProvider>
		  </MantineProvider>
		</React.StrictMode>
	);	
}*/