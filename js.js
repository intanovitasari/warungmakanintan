document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var item = document.getElementById('item').value;
    var price = 0;
    switch(item) {
        case 'spaghetti':
            price = 10;
            break;
        case 'burger':
            price = 8;
            break;
        case 'salad':
            price = 6;
            break;
    }
    var orderList = document.getElementById('order-list');
    var listItem = document.createElement('li');
    listItem.textContent = item + ' - $' + price;
    orderList.appendChild(listItem);
    updateTotalPrice(price);
});

function updateTotalPrice(price) {
    var totalPriceElement = document.getElementById('total-price');
    var currentTotal = parseFloat(totalPriceElement.textContent.replace('$', ''));
    var newTotal = currentTotal + price;
    totalPriceElement.textContent = 'Total Price: $' + newTotal.toFixed(2);
}