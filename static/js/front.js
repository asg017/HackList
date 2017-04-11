$(document).ready(function() {

  /*Changing Arrows in API Cart when minimized/maximized*/
  $('.menu-arrow').each(function(){
    $(this).click(function(){
      $(this).find('span').toggleClass('glyphicon-triangle-right').toggleClass('glyphicon-triangle-bottom');
    });
  });

  var drake = dragula([document.getElementById('api_post_container')], {copy:true})
  var apiCartDetailDivs = document.getElementsByClassName('api-cart-details');
  for(var i = 0; i < apiCartDetailDivs.length; i++) {
    dragula([apiCartDetailDivs[i]]);
    drake.containers.push(apiCartDetailDivs[i]);
  }
  drake.on('over', function(el, container, source) {
    console.log(el);
    var div = document.createElement('div');
    div.style.height = '150px';
    div.style.width = '150px';
    div.style.backgroundColor = 'yellow';
    $(el).empty();
    el.appendChild(div);
  });



  /*Modal testing*/
  $("#myModal").on('show.bs.modal', function() {
    window.history.pushState('', '', '/lol');
  });
  $("#myModal").on('hide.bs.modal', function() {
    alert('wloo')
    window.history.pushState('', '', '/');
  });

});

function exam() {
  $("#myModal").modal();
}
