$(document).ready(function() {

//add list items
  $('#append').click(function(){
    var txtentry = document.getElementById('task');
    var txttask = txtentry.value;
    event.preventDefault();

    $('<li></li>').appendTo('#list').html('<div class="control">\n' +
      '<div class="fa fa-square-o nocheck" ></div>\n' +
      '<div class="fa fa-check-square-o ycheck" style="display:none"></div>\n' +
      '</div>\n' +
      '<div class="fa fa-minus-square remove"></div><div class="item">\n' +
      txttask + '</div>');
  });

//delete list items
 $('#list').on('click', '.fa-minus-square', function(e){
  e.preventDefault();
    $(this).parent().remove(); 
  });

//toggle add and remove controls
 $('#list').on('click', '.nocheck', function(e){
    $(this).next('.ycheck').toggle();
    $(this).toggle();
}); 
 $('#list').on('click', '.ycheck', function(e){
    $(this).prev('.nocheck').toggle();
    $(this).toggle();
}); 

});
