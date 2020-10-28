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