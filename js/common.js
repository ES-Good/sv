function dowlandProduct(){
    let btnDowland = document.getElementById('btn-dowland-product');
    let product = document.querySelectorAll('.dowland-product-mobile');

    btnDowland.onclick = function(){
        document.querySelector('.container_btn-dowland-product').classList.add('d-none');
        for (let i = 0; i < product.length; i++) {
            product[i].classList.add('d-block')
        }
    }
}

dowlandProduct();

function dowlandPrice(){
    let btn = document.getElementById('open-price-item');
    let priceItem = document.querySelectorAll('.price-item');

    btn.onclick = function () {
        document.querySelector('.container_btn-dowland-price').classList.add('d-none');
        for (let i = 0; i < priceItem.length; i++) {
            priceItem[i].classList.remove('d-none');
            priceItem[i].classList.add('d-flex')
        }
    }
}

dowlandPrice();

let select = document.querySelector('.select-r');

select.onchange = function () {
        createPrice(this.value);
}

function createPrice(name){
    switch (name) {
        case 'R13':
            price('50', '80', '150', 'от 800', '80', '120', '100','от 50');
            break;
        case 'R14':
            price('60', '80', '150', 'от 800', '80', '120', '100','от 50');
            break;
        case 'R15':
            price('70', '100', '150', 'от 800', '100', '120', '100','от 50');
            break;
        case 'R16':
            price('70', '100', '150', 'от 800', '100', '120', '100','от 50');
            break;
        case 'R17':
            price('100', '120', '150', 'от 800', '120', '120', '100','от 50');
            break;
        case 'R18':
            price('100', '120', '150', 'от 800', '120', '120', '100','от 50');
            break;
        case 'Газель, Уаз':
            price('120', '120', '150', 'от 800', '120', '120', '100','от 50');
            break;
        case 'свыше R18':
            price('120', '150', '150', 'от 800', '150', '120', '100','от 50');
            break;
        case 'Низкопрофильная резина R17, R18':
            price('100', '150', '150', 'от 800', '150', '120', '100','от 50');
            break;
        case 'Внедорожники от R17':
            price('150', '150', '150', 'от 800', '150', '120', '100','от 50');
            break;
    }
}

function price(cut, bulkhead, repairs, cooking, balancing, sealant, cameraRepair,straightening){
    let price1 = document.getElementById('price_cut');
    let price2 = document.getElementById('price_bulkhead');
    let price3 = document.getElementById('price_repairs');
    let price4 = document.getElementById('price_cooking');
    let price5 = document.getElementById('price_balancing');
    let price6 = document.getElementById('price_sealant');
    let price7 = document.getElementById('price_camera-repair');
    let price8 = document.getElementById('price_straightening');

    price1.innerText = cut;
    price2.innerText = bulkhead;
    price3.innerText = repairs;
    price4.innerText = cooking;
    price5.innerText = balancing;
    price6.innerText = sealant;
    price7.innerText = cameraRepair;
    price8.innerText = straightening;
}
$('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
