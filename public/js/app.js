$(document).ready(function () {
    // Loading
    $('body').removeClass('preloading');
    // $('.load').delay(1000).fadeOut('fast');
    $('.load').delay(900).fadeOut('fast');
    $('.add-cart .icon-cart-add-featured').click(function (e) { 
        e.preventDefault();
        let cart = $(document).find(".cart");
        let cartTop = cart.offset().top;
        let cartLeft = cart.offset().left;
        let imageSrc = $(this).parents('.item-featured-products').find('a img').attr('src');
        let imtemFuturedProduct = $(this).parents('.item-featured-products');
        let imtemFuturedProductWidth = imtemFuturedProduct.width();
        let imtemFuturedProductTop = imtemFuturedProduct.offset().top;
        let imtemFuturedProductLeft = imtemFuturedProduct.offset().left;
        if($(document).find('.icon-cart-add-featured').hasClass('disable')) {
            return false;
        } else {
            $(document).find('.icon-cart-add-featured').addClass('disable');
        }
        $('<img />', {
            class: 'img-fly',
            src: imageSrc
        }).appendTo('body').css({
            'top' : imtemFuturedProductTop,
            'left' : imtemFuturedProductLeft + imtemFuturedProductWidth - 24
        });

        setTimeout(function() {
            $(document).find('.img-fly').css({
                'top': cartTop,
                'left': cartLeft,
            });
            setTimeout(function() {
                $(document).find('.img-fly').remove();
                let qty = parseInt(cart.find('.cart-quantity').data('count')) + 1;
                cart.find('.cart-quantity').text(qty).data('count', qty);
                $(document).find('.icon-cart-add-featured').removeClass('disable');
            }, 1000);
        }, 1000);
    });

    $('.add-cart .icon-cart-add-milktea').click(function(e) {
        e.preventDefault();
        let cart = $(document).find(".cart");
        let cartTop = cart.offset().top;
        let cartLeft = cart.offset().left;
        let imageSrc = $(this).parents('.item-milktea-products').find('a img').attr('src');
        let imtemFuturedProduct = $(this).parents('.item-milktea-products');
        let imtemFuturedProductWidth = imtemFuturedProduct.width();
        let imtemFuturedProductTop = imtemFuturedProduct.offset().top;
        let imtemFuturedProductLeft = imtemFuturedProduct.offset().left;
        if($(document).find('.icon-cart-add-milktea').hasClass('disable')) {
            return false;
        } else {
            $(document).find('.icon-cart-add-milktea').addClass('disable');
        }
        $('<img />', {
            class: 'img-fly',
            src: imageSrc
        }).appendTo('body').css({
            'top' : imtemFuturedProductTop,
            'left' : imtemFuturedProductLeft + imtemFuturedProductWidth - 24
        });

        setTimeout(function() {
            $(document).find('.img-fly').css({
                'top': cartTop,
                'left': cartLeft,
            });
            setTimeout(function() {
                $(document).find('.img-fly').remove();
                let qty = parseInt(cart.find('.cart-quantity').data('count')) + 1;
                cart.find('.cart-quantity').text(qty).data('count', qty);
                $(document).find('.icon-cart-add-milktea').removeClass('disable');
            }, 1000);
        }, 1000);
    });

    $('.add-cart .icon-cart-add-fruit').click(function(e) {
        e.preventDefault();
        let cart = $(document).find(".cart");
        let cartTop = cart.offset().top;
        let cartLeft = cart.offset().left;
        let imageSrc = $(this).parents('.item-fresh-fruit-products').find('a img').attr('src');
        let imtemFuturedProduct = $(this).parents('.item-fresh-fruit-products');
        let imtemFuturedProductWidth = imtemFuturedProduct.width();
        let imtemFuturedProductTop = imtemFuturedProduct.offset().top;
        let imtemFuturedProductLeft = imtemFuturedProduct.offset().left;
        if($(document).find('.icon-cart-add-fruit').hasClass('disable')) {
            return false;
        } else {
            $(document).find('.icon-cart-add-fruit').addClass('disable');
        }
        $('<img />', {
            class: 'img-fly',
            src: imageSrc
        }).appendTo('body').css({
            'top' : imtemFuturedProductTop,
            'left' : imtemFuturedProductLeft + imtemFuturedProductWidth - 24
        });

        setTimeout(function() {
            $(document).find('.img-fly').css({
                'top': cartTop,
                'left': cartLeft,
            });
            setTimeout(function() {
                $(document).find('.img-fly').remove();
                let qty = parseInt(cart.find('.cart-quantity').data('count')) + 1;
                cart.find('.cart-quantity').text(qty).data('count', qty);
                $(document).find('.icon-cart-add-fruit').removeClass('disable');
            }, 1000);
        }, 1000);
    });

    $('.add-cart .icon-cart-add-yogurt').click(function(e) {
        e.preventDefault();
        let cart = $(document).find(".cart");
        let cartTop = cart.offset().top;
        let cartLeft = cart.offset().left;
        let imageSrc = $(this).parents('.item-soft-yogurt-products').find('a img').attr('src');
        let imtemFuturedProduct = $(this).parents('.item-soft-yogurt-products');
        let imtemFuturedProductWidth = imtemFuturedProduct.width();
        let imtemFuturedProductTop = imtemFuturedProduct.offset().top;
        let imtemFuturedProductLeft = imtemFuturedProduct.offset().left;
        if($(document).find('.icon-cart-add-yogurt').hasClass('disable')) {
            return false;
        } else {
            $(document).find('.icon-cart-add-yogurt').addClass('disable');
        }
        $('<img />', {
            class: 'img-fly',
            src: imageSrc
        }).appendTo('body').css({
            'top' : imtemFuturedProductTop,
            'left' : imtemFuturedProductLeft + imtemFuturedProductWidth - 24
        });

        setTimeout(function() {
            $(document).find('.img-fly').css({
                'top': cartTop,
                'left': cartLeft,
            });
            setTimeout(function() {
                $(document).find('.img-fly').remove();
                let qty = parseInt(cart.find('.cart-quantity').data('count')) + 1;
                cart.find('.cart-quantity').text(qty).data('count', qty);
                $(document).find('.icon-cart-add-yogurt').removeClass('disable');
            }, 1000);
        }, 1000);
    });
});