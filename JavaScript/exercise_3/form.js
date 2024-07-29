window.addEventListener('load', (event) => {
     const h2Element = document.querySelector('h2');
     h2Element.textContent = 'Video Game Cost Calculator';
 
     const paragraph = document.getElementById('gameList');
     paragraph.textContent = 'To calculate the cost of the game, type the price of the game within the prompt.';
 
     const logoImage = document.getElementById('logo');
     logoImage.src = 'img/logo.png';
 
     const gamePrice = prompt('What is the price of the game?');
 
     const TAX_RATE = 0.05;
 
     const salesTax = gamePrice * TAX_RATE;
 
     const totalPrice = parseFloat(gamePrice) + salesTax;
 
     document.getElementById('sales').value = `$${salesTax.toFixed(2)}`;
     document.getElementById('total').value = `$${totalPrice.toFixed(2)}`;
 });
 