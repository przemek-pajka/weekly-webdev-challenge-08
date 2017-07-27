(function() {

$('.toggle-menu').jPushMenu();
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
  });

  $(window).click(function() {
    if($('.hamburger').hasClass('is-active')) {
      $('.hamburger').removeClass('is-active');
    }
  });

  var circle_colors = ['#f34739','#009989','#1d3243'];

 $('#our-stats-box-1').circleProgress({
    startAngle: 45,
    value: 0.5,
    size: 221,
    thickness: 4,
    fill: {color: circle_colors[0]}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('#stats__numbers-1').html(Math.round(50 * progress));
  });

 $('#our-stats-box-2').circleProgress({
    startAngle: 45,
    value: 0.35,
    size: 221,
    thickness: 4,
    fill: {color: circle_colors[1]}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('#stats__numbers-2').html(Math.round(35 * progress));
  });

 $('#our-stats-box-3').circleProgress({
    startAngle: 45,
    value: 0.8,
    size: 221,
    thickness: 4,
    fill: {color: circle_colors[2]}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('#stats__numbers-3').html(Math.round(80 * progress));
  });


  for(var i=1;i<=3;i++) {
      $('#stats__numbers-' +i).css('color',circle_colors[--i]);    
    
      i++;
  }

  if(window.screen.width > 768) {
    (function animate_scroll() {

      $('.our-stats-box').viewportChecker({
        classToAdd: 'visible animated flipInY fadeIn', // Class to add to the elements when they are visible,
        classToAddForFullView: 'visible animated flipInY fadeIn', // Class to add when an item is completely visible in the viewport
        classToRemove: 'visible animated flipInY fadeIn'
        });

        $('.head-box').viewportChecker({
          classToAdd: 'animated slideInDown', // Class to add to the elements when they are visible,
          classToAddForFullView: 'animated slideInDown', // Class to add when an item is completely visible in the viewport
          classToRemove: 'animated slideInDown',
          repeat: true
        });
    })(); 
  }
})();








