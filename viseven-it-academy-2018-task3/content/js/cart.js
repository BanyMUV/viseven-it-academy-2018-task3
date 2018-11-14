let cart = {}; //корзина

$.getJSON('goods.json', function (data) {
    let goods = data;
    checkShopBasket();
    showCart();
    clearAll();

    function showCart() {

            //в корзине есть товари
            let out = '';
            for (let key in cart) {
                out +='<div class="good">';
                out += '<button class="delete" data-art="' + key + '"><img src="content/img/buttons/delete.png"></button>';
                out += '<p>' + goods[key].name +'</p>';
                out += '<button class="minus" data-art="' + key + '"><img src="content/img/buttons/minus.png"></button>';
                out += '<p>' + cart[key] + '</p>';
                out += '<button class="plus" data-art="' + key + '"><img src="content/img/buttons/plus.png"></button>';
                out += '<p>$' + cart[key] * goods[key].cost + '</p>';
                out += '</br>';

                out +='</div>';
            }

            $('#my_cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);

    }
    function plusGoods() {
        //добавление товаров
        let articul = $(this).attr('data-art');
        cart[articul]++;
        saveCardToLocalStorage();
        showCart();
    }
    function minusGoods() {
        //уменьшение товаров
        let articul = $(this).attr('data-art');
        if(cart[articul] > 1){
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        saveCardToLocalStorage();
        showCart();
    }

    function deleteGoods() {
        //удаление товаров
        let articul = $(this).attr('data-art');
        delete cart[articul];
        saveCardToLocalStorage();
        showCart();
    }
});

function saveCardToLocalStorage() {
    //сохранение (plus and minus)товаров в Local Storage
    localStorage.setItem('cart', JSON.stringify(cart) );
}
function checkShopBasket() {
    //проверка в localStorage
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}
/*function clearAll() {
    let clear = '';
    if ($.isEmptyObject(cart)) {
        let out = 'Cart empty';
        $('#my_cart').html(out)
    }
    else {
        clear += '<button>Clear All</button>';
    }
    $('#my_cart').html(clear);
}*/