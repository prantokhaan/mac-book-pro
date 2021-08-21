// extra memory cost
function memoryCost(isExtraMemory){
    const memoryPrice = document.getElementById('memory-cost');
    if(isExtraMemory == false){
        memoryPrice.innerText = 0;
    }
    else if(isExtraMemory == true){
        memoryPrice.innerText = 180;
    }
};
// 8 GB Memory Cost
document.getElementById('memory-8-gb').addEventListener('click', function(){
    memoryCost(false);
    calculateTotal();
});
// 16 GB Memory Cost
document.getElementById('memory-16-gb').addEventListener('click', function(){
    memoryCost(true);
    calculateTotal();
});

// extra storage cost
function storageCost(storage){
    const storagePrice = document.getElementById('storage-cost');
    if(storage == 256){
        storagePrice.innerText = 0;
    }
    else if(storage == 512){
        storagePrice.innerText = 100;
    }
    else if(storage == 1){
        storagePrice.innerText = 180;
    }

};
// 256 GB SSD Cost
document.getElementById('storage-256-gb').addEventListener('click', function(){
    storageCost(256);
    calculateTotal();
});
// 512 GB SSD Cost
document.getElementById('storage-512-gb').addEventListener('click', function(){
    storageCost(512);
    calculateTotal();
});
// 1 TB SSD Cost
document.getElementById('storage-1-tb').addEventListener('click', function(){
    storageCost(1);
    calculateTotal();
});

// delivery cost
function deliveryCost(isFreeDelivery){
    const deliveryCharge = document.getElementById('delivery-cost');
    if(isFreeDelivery == true){
        deliveryCharge.innerText = 0;
    }
    else{
        deliveryCharge.innerText = 20;
    }
};
// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCost(true);
    calculateTotal();
});
// Paid Delivery
document.getElementById('paid-delivery').addEventListener('click', function(){
    deliveryCost(false);
    calculateTotal();
});

// total price 
function calculateTotal(){
    // adding total price 
    const total = document.getElementById('total');
    const basePrice = 1299;
    const extraMemoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const extraStoragePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = basePrice + extraStoragePrice + extraMemoryPrice + deliveryCharge;
    total.innerText = totalPrice;

    // Grand Total & Total after using Promo Code
    const grandTotal = document.getElementById('grand-total');
    const promoCodeInput = document.getElementById('promo-code');
    const promoCode = promoCodeInput.value;
    grandTotal.innerText = totalPrice;

    if(promoCode == 'stevekaku'){
        grandTotal.innerText = Math.round(total.innerText - total.innerText / 5);
    }
    promoCodeInput.value = '';
};

// Promo Code 
document.getElementById('discount-button').addEventListener('click', function (){
    calculateTotal();
});