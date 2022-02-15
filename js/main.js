
document.getElementById('primary-memory').addEventListener('click',function(){
    setPrice('extra-memory-cost',0);
  const total=  updateTotal();
})

document.getElementById('extra-memory').addEventListener('click',function(){
 setPrice('extra-memory-cost',180);
 const total= updateTotal();
})

document.getElementById('primary-storage').addEventListener('click',function(){
 setPrice('extra-storage-cost',0);
 const total= updateTotal();
})

document.getElementById('extra-storage').addEventListener('click',function(){
 setPrice('extra-storage-cost',100);
 const total= updateTotal();
})

document.getElementById('huge-storage').addEventListener('click',function(){
 setPrice('extra-storage-cost',180);
 const total= updateTotal();
})

document.getElementById('primary-delivery').addEventListener('click',function(){
 setPrice('extra-delivery-cost',0);
 const total= updateTotal();
})

document.getElementById('extra-delivery').addEventListener('click',function(){
 setPrice('extra-delivery-cost',20);
const total= updateTotal();
})



// setting the value by clicking 

function setPrice(input,price){
    const field = document.getElementById(input);
    const fieldText = field.innerText;
    field.innerText = price;
}

// update total 

function updateTotal(){
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const totalMemoryPrice = parseInt(document.getElementById('extra-memory-cost').innerText);
    const totalStoragePrice = parseInt(document.getElementById('extra-storage-cost').innerText);
    const totalDeliveryPrice = parseInt(document.getElementById('extra-delivery-cost').innerText);


    const totalPriceField = document.getElementById('total-price');
    const totalPrice = totalPriceField.innerText;

    const updatedTotal = bestPrice + totalMemoryPrice + totalDeliveryPrice + totalStoragePrice;
    totalPriceField.innerText = updatedTotal;

    return updatedTotal;
}

document.getElementById('promo-button').addEventListener('click',function(){
    const total = parseInt(document.getElementById('total-price').innerText);

    const promoField = document.getElementById('promo-field');
    const promoFieldText = promoField.value;

    if (promoFieldText == 'faysal'){
        const grandTotal = (total - total*.1);
        document.getElementById('grand-total').innerText = grandTotal;
    }

    // clear the value 
    promoField.value ='';
})
