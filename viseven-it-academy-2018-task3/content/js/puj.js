let cart = {}; //корзина

$('document').ready(function () {
    loadGoods();
    checkShopBasket();
    miniShopBasket();
});

function loadGoods() {
    //загрузка товаров
    $.getJSON('../../../goods.json', function (data) {
        let out = '';
        for (let key in data){
            out +='<div class="shirts-goods">';
            out +='<img src="'+data[key].image+'">';
            out +='<p class="name-shirts">'+data[key]['name']+'</p>';
            out +='<p class="cost-shirts">$'+data[key]['cost']+'</p>';
            out +='<div class="add">';
            out +='<button class="minus" data-art="'+key+'"></button>';
            out +='<p class="amount">amount</p>';
            out +='<p class="count">0</p>';
            out +='<button class="plus" data-art="'+key+'"></button>';
            out +='</div>';
            out +='</div>';
        }
        $('.shirts').html(out);
        $('button.plus').on('click', plusGood);
        $('button.minus').on('click', minusGood);
    });
}
function plusGood() {
    //добавка товара
    let articule = $(this).attr('data-art');
    if(cart[articule] >= 0){
        cart[articule]++;
    }
    else {
        cart[articule] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart) );
    miniShopBasket();
    saveCardToLocalStorage();
}
function minusGood() {
    let articule = $(this).attr('data-art');
    if(cart[articule] > 1){
        cart[articule]--;
    }
    else {
        delete cart[articule];
    }
    localStorage.setItem('cart', JSON.stringify(cart) );
    miniShopBasket();
    saveCardToLocalStorage();
}
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
function miniShopBasket() {
let out = '';
        out += '<p class="text-card">Goods in card</p>';
    $('.allcoct').html(out);
}


