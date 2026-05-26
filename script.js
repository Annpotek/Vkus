let cart = [];


function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    updateCart();
}


function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItemsElement.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span>${item.name} - ${item.price} руб. × ${item.quantity}</span>
            <span>${item.price * item.quantity} руб.</span>
            <button class="remove-btn" onclick="removeFromCart('${item.name}')">Удалить</button>
        `;
        
        cartItemsElement.appendChild(li);
        
        total += item.price * item.quantity;
    });
    
    cartTotalElement.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    alert(`Заказ оформлен! Сумма: ${document.getElementById('cart-total').textContent} руб.`);
}
updateCart();
