$(function () { "use strict"; $(document).ready(function () { $(".intro-Rev_Video").revolution({ sliderType: "hero", delay: 9e3, startwidth: 1170, startheight: 500, fullScreen: "on", forceFullWidth: "on", minFullScreenHeight: "320", touchenabled: "off" }); var e = $(".intro-RevSlider"); e.revolution({ delay: 15e3, startwidth: 1170, startheight: 500, hideThumbs: 10, hideTimerBar: "off", fullWidth: "off", fullScreen: "on", fullScreenOffsetContainer: "", navigationStyle: "preview4", navigationType: "none" }), e.bind("revolution.slide.onchange", function (e, a) { var d = $(this).find("li").eq(a.slideIndex - 1).data("slide"); "dark-slide" == d && ($("#header").addClass("header").removeClass("header-light"), $("#header").removeClass("header-default")), "light-slide" == d && ($("#header").addClass("header-light").removeClass("header-dark"), $("#header").removeClass("header-default")), "default-slide" == d && ($("#header").removeClass("header-dark"), $("#header").removeClass("header-light"), $("#header").addClass("header")) }) }) });