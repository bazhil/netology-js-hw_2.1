'use strict'

//task 1
function guaranteePrice(termOfGuarantee){
  var priceOfOneYearGuarantee = 1250;
  var priceOfTwoYearGuarantee = 2300;
  
  if (termOfGuarantee === 1) {
    return priceOfOneYearGuarantee;
  } else if (termOfGuarantee === 2) {
    return priceOfTwoYearGuarantee;
  } else {
    priceOfGuarantee = 0;
    return priceOfGuarantee;
  }
} 

var price = guaranteePrice(1);
console.log(`Дополнительное гарантийное обслуживание: ${price} Q`);

//task 2
function engraving(engravingText) {
  if (engravingText === ''){
    return 0;
  } else if (engravingText === undefined && typeof(engravingText) === 'number'){
    return 0;
  } else if (typeof(engravingText) === 'string'){
  var priceOfWord = 20;
  var words = engravingText.split(' ');
  var wordsCount = words.length;
  var engravingPrice = priceOfWord * wordsCount;
  return engravingPrice;
  } 
}

var engravingResult = engraving('best of the best of the best');
console.log(`Подарочная упаковка и гравировка: ${engravingResult} Q`);

//task 3
var needShipping = true;
var shippingAdress = 'Nabu';


function shipping(needShipping, shippingAdress) {
var shippingPrice;  

if (needShipping === true){
  switch (shippingAdress){
    case 'Earth':
      return 550;
    case 'Moon':
      return 550;
    case 'Mars':
      return 550;  
    case 'Mercury':
      return 550;   
    case 'Andromeda':
      return 550;    
    case 'Cassiopeia':
      return 550;   
    case 'Tatooine':
      return 550;     
    case 'Nabu':
      return 550;  
    default:
      return NaN;
  }

} else if(shippingAdress === undefined || needShipping === undefined){
  return NaN;
} else {
  return 0;
}
}

var shippingResult = shipping(true, 'Moon');

if (shippingResult > 0){
  console.log(`Стоимость доставки: ${shippingResult} Q`);
} else if (shippingResult === 0){
  console.log('Доставка не требуется');
} else{
  console.log('Ошибка при расчете стоимости доставки');
}
