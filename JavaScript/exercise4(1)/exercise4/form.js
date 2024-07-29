window.addEventListener('load', (event) => {
     let userScore = prompt("What was your score?");
     userScore = Number(userScore);
     const averageScore = 50;
     let message;
     if (!isNaN(userScore)) { 
         if (userScore >= averageScore) {
             message = "WOW, you scored higher than most gamers!";
         } else {
             message = "Better luck next time!";
         }
     } else {
         message = "Please enter a valid score."; 
     }
     document.getElementById("message").textContent = message;
 });
 