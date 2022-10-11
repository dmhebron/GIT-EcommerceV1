   
var content = {
    "product1": "Emergency Mechanical Services",
    "product2": "Emergency Tire Replacement Services",
    "product3": "Towing Services",
    "product4": "Tractor Tire Discount Program",
    "product5": "Trailer Tire Discount Program",
    "product6": "Trailer Rental",
    "product7": "GPS", 
    "product8": "Dash Camera", 
    "product9": "Headset",
    "price": [500, 450, 100, 400, 300, 250, 60, 75, 50],
    "merchandise": {}
}
var output = document.getElementById('output');
output.innerHTML = content.product1 + ' ' + '$' + content.price[0] + '/hour'
var output = document.getElementById('output2');
output.innerHTML = content.product2