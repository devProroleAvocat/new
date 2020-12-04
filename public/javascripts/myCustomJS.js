jQuery(window).on('scroll',function(){
    if($(this).scrollTop()>10){
        $('#_idContainer000').addClass("sticky");
    }
    else{
        $('#_idContainer000').removeClass("sticky");
    }
});
$('#lien').on('click',function(){
    alert('ok')
    if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
        var $target=$(this.hash);
        $target=$target.length&&$target||$('[name='+this.hash.slice(1)+']');
        if($target.length){
            var targetOffset=$target.offset().top;$('html,body').animate({scrollTop:targetOffset},2000);
            return false;
        }
    }
});
$(window).on('scroll',function(){
    if($(this).scrollTop()>600){
        $('#_idContainer314').fadeIn();
    }else{
        $('#_idContainer314').fadeOut();
    }
});
$('.scrollToTop').on('click',function(){
    $('html, body').animate({scrollTop:0},2000);
    return false;
});