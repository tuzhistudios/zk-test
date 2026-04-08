// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const basket = document.getElementById('basket');
    const gameWidth = gameContainer.clientWidth;
    const basketWidth = basket.clientWidth;
    let score = 0;

    function createItem() {
        const item = document.createElement('div');
        item.classList.add('item');
        item.style.left = Math.random() * (gameWidth - 30) + 'px';
        item.style.top = '-30px';
        gameContainer.appendChild(item);

        function fall() {
            const itemTop = parseInt(item.style.top);
            if (itemTop < gameContainer.clientHeight) {
                item.style.top = itemTop + 2 + 'px';
                requestAnimationFrame(fall);
            } else {
                gameContainer.removeChild(item);
            }
        }

        fall();
    }

    setInterval(createItem, 1000);

    function moveBasket(event) {
        if (event.key === 'ArrowLeft') {
            const basketLeft = parseInt(basket.style.left) || gameWidth / 2 - basketWidth / 2;
            if (basketLeft > 0) {
                basket.style.left = basketLeft - 10 + 'px';
            }
        } else if (event.key === 'ArrowRight') {
            const basketLeft = parseInt(basket.style.left) || gameWidth / 2 - basketWidth / 2;
            if (basketLeft < gameWidth - basketWidth) {
                basket.style.left = basketLeft + 10 + 'px';
            }
        }
    }

    document.addEventListener('keydown', moveBasket);
});
