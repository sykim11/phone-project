$(document).ready(function(){

  $('.cancel').on('click',function(){
    $('.popup').removeClass('center');
    $('.insert').removeClass('show');

  });

  $('.submit').on('click',function(){
    $('.popup').removeClass('center');
    $('.insert').removeClass('show');

    var name = $('#user_name').val();
    var phone = $('[name="user_phone"]').val();
    var job = $('[name="jab"]').val();

    var tag = '<div class="box create">\
          <p class="title">\
          '+ name +' <span> '+ job +'</span></p>\
          <p><i class="fa fa-phone" aria-hidden="true"></i>'+ phone +'</p>\
          <span class="close"><i class="fa fa-plus" aria-hidden="true"></i></span>\
        </div>'
    $('.content').append(tag);

    $('.popup').one('transitionend',function(){
      $('.box').removeClass('create');
    });

    


  });

  $('.floating').bind('click',function(){
    var name = $('#user_name').val();
    var phone = $('[name="user_phone"]').val();
    var job = $('[name="jab"]').val();
    $('.popup').addClass('center');
    $('.insert').addClass('show');
  });

  //리스트삭제기능
  //++
  $(document).on('click','.close',function(){
    $(this).parents('.box').addClass('none');
    $(this).parents('.box').one('transitionend',function(){
      $(this).remove()
    });
  });





});
