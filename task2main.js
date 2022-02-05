
$(".m4").click(function(){
    //$(".m4").attr('src',$(".m1").attr('src'));
   // $(".m1").attr('src',$(".m4").attr('src'));
   // $(".m3").attr('src','image/3.jpg');
   // $(".m2").attr('src','image/2.jpg');
   let img = $('.m1').attr('src');
   $('.m1').attr('src' , $('.m4').attr('src') );
   $('.m4').attr('src' ,img);   
})
$(".m3").click(function(){
   // $(".m3").attr('src',$(".m1").attr('src'));
    //$(".m4").attr('src',"image/4.jpg");
    //$(".m1").attr('src',$(".m3").attr('src'));
   // $(".m2").attr('src','image/2.jpg');
   let img = $('.m1').attr('src');
   $('.m1').attr('src' , $('.m3').attr('src') );
   $('.m3').attr('src' ,img); 
})
$(".m2").click(function(){
   // $(".m3").attr('src','image/3.jpg');
    //$(".m4").attr('src',"image/4.jpg");
    //$(".m1").attr('src',$(".m2").attr('src'));
    //$(".m2").attr('src',$(".m1").attr('src'));
    let img = $('.m1').attr('src');
    $('.m1').attr('src' , $('.m2').attr('src') );
    $('.m2').attr('src' ,img); 
})