$(function(){

  $('nav .gnb').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('nav .gnb li').toggleClass('visible');
  })


  var $container = $('.g-list'),
      $loadBtn= $('.load-more'),
      $addItemCount = 6,
      $added = 0, //더보기 버튼을 클릭해서 추가된 항목수가 0가 될때 버튼을 사라지게
      $allData = [];
  
  $.toJSON('https://gist.github.com/ZoeyNjoy/e10c33cdbbfec3708c9eaae62df5d172.js', initGallery)
    function initGallery(data){
      $allData = data;      
      addItem();
      $loadBtn.click(addItem);
    }
        /* 
          $.getJSON('./content.json', initGallery)  =
          $.getJSON('./content.json', functin( data ){
            initGallery( data ); })라고 쓰는 것과 같다
        */
  
  function addItem(){
    var slicedData;
    var elements = [];
    /*  var A = [0,1,2,3,4]  A = allData
        var b = A.slice(0,2)  A배열에서 0-2번째전까지의 값을 가져온다 b=slicedData
    = 0,1을 가지고 온다는 뜻 */

    slicedData = $allData.slice($added, $added+$addItemCount);
    $.each(slicedData, function(idx, item){
      var itemHTML =
       '<li class="g-item"><a href="#"><p>'+ item.date +'<span>'+ item.no +'</span></p>' + 
       '<img src="'+ item.images +'"alt="이미지"><h3>'+ item.title +'</h3><p class="item-cont">'+ item.contents +'</p><span class="plus">'+ item.more +'</span></a></li>';

        elements.push($(itemHTML).get(0));
        
    });
    $container.append(elements);
    $added += slicedData.length;
  }


  $('nav .menubar').click(function(){
    $('.snb-wrap').addClass('on')
    $('body').addClass('scrollLock')
    $('.snb').css({'animation':'snbslide .5s'})
  })
  $('.snb .m-bar').click(function(){
    $('.snb-wrap').removeClass('on')
    $('body').removeClass('scrollLock')
  })
  

  
}); // ready function
