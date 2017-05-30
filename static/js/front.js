
var apiCartDetailTemplate =
'<div class="panel panel-default">' +
  '<div class="media">' +
    '<div class="media-left">' +
      '<img src="<%=api.apiIcon%>" class="media-object api-cart-details-pic">' +
    '</div>' +
    '<div class="media-body">' +
      '<p><%=api.apiTitle%></p>' +
    '</div>' +
  '</div>' +
'</div>';

var apiSubmissionTemplate;

$.get('/api/templates/modal', function(data) {
  apiSubmissionTemplate = data;
});
/*'<!-- Modal -->' +
'<div class="modal fade" id="myModal" role="dialog">' +
  '<div class="modal-dialog">' +
    '<!-- Modal content-->' +
    '<div class="modal-content">' +
      '<div class="modal-body">' +
        '<p><%= api.quickDescr %></p>' +
      '</div>' +
    '</div>'
  /*'</div>' +
'</div>'*/;

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

  var renderEjsDetail;

  function createCartDetail(el) {
      var apiTitle = el.getElementsByClassName('api_title')[0].text;
      var apiPic = el.getElementsByClassName('api_post_pic')[0].getAttribute('src');
      var apiId = 'TODO';

      return ejs.render(apiCartDetailTemplate, {'api': {'apiTitle': apiTitle, 'apiIcon':apiPic} });
  }

  drake.on('drop', function(el, source) {
    $('#tester').text('drop');
    if(renderEjsDetail) {
      el.innerHTML = renderEjsDetail;
    }
    else {
      renderEjsDetail = createCartDetail(el);

      /*Empty it out*/
      $(el).empty();
      el.className = '';
      el.innerHTML = renderEjsDetail; //This is safe (lol)
    }

  });

  drake.on('shadow', function(el, con, src) {
    $('#tester').text('shadow');
    if(renderEjsDetail) {
      el.innerHTML = renderEjsDetail;
    }
    else {
      renderEjsDetail = createCartDetail(el);
      /*Empty it out*/
      $(el).empty();
      el.className = '';
      el.innerHTML = renderEjsDetail; //This is safe (lol)
    }
  });

  drake.on('dragend', function(el) {
    $('#tester').text('dragend');
    renderEjsDetail = undefined;
  });

  drake.on('cloned', function(clone, orig, type) {
    $('#tester').text('cloned');
    if(renderEjsDetail) {
      clone.innerHTML = renderEjsDetail;
    }
    else {
      renderEjsDetail = createCartDetail(clone);
      /*Empty it out*/
      $(clone).empty();
      clone.className = '';
      clone.innerHTML = renderEjsDetail; //This is safe (lol)
    }
  });



  /*Modal testing*/
  $("#myModal").on('show.bs.modal', function() {
    window.history.pushState('', '', '/lol');
  });
  $("#myModal").on('hide.bs.modal', function() {
    window.history.pushState('', '', '/');
  });


  /*API Submission onclick handlers for modals*/
  $('.api_post').each(function() {
    $(this).click(function() {
      var postId = $(this).data('post-id');

        $.get('/api/apis/' + postId, function(data, status) {
          var html = ejs.render( apiSubmissionTemplate, {api:data} );
          $('#myModal').html(html);

          $("#myModal").on('show.bs.modal', function() {
            window.history.pushState('', '', '/a/' + postId);
          });
          $("#myModal").on('hide.bs.modal', function() {
            window.history.pushState('', '', '/');
          });

          $("#myModal").modal();
        });
    });
  });

});

function exam() {
  $("#myModal").modal();
}
