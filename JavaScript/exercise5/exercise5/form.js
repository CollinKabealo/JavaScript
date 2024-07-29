window.addEventListener('load', (event) => {
     // If I had the money!
     let favoriteRestaurants = ['The French Laundry', 'Noma', 'Osteria Francescana', 'Eleven Madison Park', 'Gaggan'];
     let userFavorite = prompt("What's your favorite restaurant?");
     favoriteRestaurants.push(userFavorite);
     favoriteRestaurants.sort();
     document.getElementById('rest1').textContent = favoriteRestaurants[0];    
     document.getElementById('rest2').textContent = favoriteRestaurants[1];
 });
 