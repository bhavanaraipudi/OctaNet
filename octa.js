document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning! Welcome to Brewed Bliss';
    } else if (hours < 18) {
        greeting = 'Good Afternoon! Welcome to Brewed Bliss';
    } else {
        greeting = 'Good Evening! Welcome to Brewed Bliss';
    }

    greetingElement.textContent = greeting;

    // Modal functionality
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactBtn');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Order functionality
    const orderButtons = document.querySelectorAll('.order-btn');
    const orderList = document.getElementById('order-list');
    const placeOrderBtn = document.getElementById('place-order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const listItem = document.createElement('li');
            listItem.textContent = item;
            orderList.appendChild(listItem);
        });
    });

    placeOrderBtn.addEventListener('click', () => {
        alert('Thank you for your order! Your items: ' + Array.from(orderList.children).map(li => li.textContent).join(', '));
        while (orderList.firstChild) {
            orderList.removeChild(orderList.firstChild);
        }
    });
});