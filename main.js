'use strict'

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

// task 1
var positionNumber = 1;
var quantityItems = 561;

function lotCalculator(arr, quantityItems){
  var position = arr;
  var minimumQuantityOfLots = Math.ceil(quantityItems / position.producer.lot);
  var totalPrice = minimumQuantityOfLots * position.producer.lot * position.price;
  var information = {};
  information.lots = minimumQuantityOfLots;
  information.total = totalPrice;
  return information; 
}
var calculator = lotCalculator(positions[1], 15);
console.log(calculator);

var calculator2 = lotCalculator(positions[2], 1);
console.log(calculator2);

//task 2
const deferedPayments = [];
var position = 1; 

function deferPay(arr, totalSum, shippingDate){
  
  const paymentDate = new Date(shippingDate.getTime());
  paymentDate.setDate(shippingDate.getDate() + producer.deferPeriod);
  var paymentInformation = {};
  paymentInformation.producer = producer;
  paymentInformation.amount = totalSum;
  paymentInformation.paymentDate = paymentDate;
  deferedPayments.push(paymentInformation);
}

const producer = {
  name: 'Рязанский телепортостроительный завод',
  deferPeriod: 10
};

deferPay(producer, 7200, new Date(2030, 4 - 1, 10));

console.log(deferedPayments.length); 
console.log(deferedPayments[0].producer.name); 
console.log(deferedPayments[0].amount); 
console.log(deferedPayments[0].paymentDate); 



//task 3
function loadCurrencyJSON(){
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

var amount = 516;
var from = "EUR";
var to = "USD";

function convertCurrency(amount, from, to){
    try{
      var currency = JSON.parse(loadCurrencyJSON());
      var courseFrom = currency[from];
      var courseTo = currency[to];
      var currencyChange = ((amount * courseFrom) / courseTo).toFixed(2);
      return currencyChange;
    } catch(e){
      console.error(e.name, e.message);
    }
}

convertCurrency(500, "EUR", "USD");
