$(document).ready(function () {
  var trigger = $('.hamburger');
  var pauseContent = $('.pause_content button');
      isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      pauseContent.removeClass('trigger_is_open');
      pauseContent.addClass('trigger_is_closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      pauseContent.removeClass('trigger_is_closed');
      pauseContent.addClass('trigger_is_open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $('#sidebar-wrapper').toggleClass('toggled');
  });
});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector(".pause_content button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
  vid.pause();
// to capture IE10
  vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});