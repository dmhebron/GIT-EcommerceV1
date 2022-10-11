   
var content = {
    "product": [
        "Emergency Mechanical Services", 
        "Emergency Tire Replacement Services", 
        "Towing Services", 
        "Tractor Tire Discount Program",
        "Trailer Tire Discount Program",
        "Trailer Rental",
        "GPS",
        "Dash Camera", 
        "Headset",
    ],

    "price": [500, 450, 100, 400, 300, 250, 60, 75, 50, 20, 15, 30],
    "merchandise": [
        "T-shirts",
        "Tumbler",
        "Hoodie",
    ]
}
var output = document.getElementById('output');
output.innerHTML = content.product[0] + ' ' + '$' + content.price[0] + '/hour'

var output = document.getElementById('output2');
output.innerHTML = content.product[1] + ' ' + '$' + content.price[1] + '/hour'

var output = document.getElementById('output3');
output.innerHTML = content.product[2] + ' ' + '$' + content.price[2] + '/mile'

var output = document.getElementById('output4');
output.innerHTML = content.product[3] + ' ' + '$' + content.price[3] + '/tire'

var output = document.getElementById('output5');
output.innerHTML = content.product[4] + ' ' + '$' + content.price[4] + '/tire'

var output = document.getElementById('output6');
output.innerHTML = content.product[5] + ' ' + '$' + content.price[5] + '/load'

var output = document.getElementById('output7');
output.innerHTML = content.product[6] + ' ' + '$' + content.price[6]

var output = document.getElementById('output8');
output.innerHTML = content.product[7] + ' ' + '$' + content.price[7]

var output = document.getElementById('output9');
output.innerHTML = content.product[8] + ' ' + '$' + content.price[8]

var output = document.getElementById('output10');
output.innerHTML = content.merchandise[0] + ' ' + '$' + content.price[9]

var output = document.getElementById('output11');
output.innerHTML = content.merchandise[1] + ' ' + '$' + content.price[10]

var output = document.getElementById('output12');
output.innerHTML = content.merchandise[2] + ' ' + '$' + content.price[11]