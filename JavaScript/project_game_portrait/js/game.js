// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
    let score = 0;  // Initialize score variable
    let timer;  // Variable to hold the main game timer
    let imageTimer;  // Variable to hold the timer for adding images

    // Function to update the score
    function updateScore(increment) {
        score += increment;  // Increment score
        $("#score").text(score + " pts");  // Update the score display
    }

    // Function to generate a random position within the gamespace
    function randomPosition(axis) {
        const size = axis === 'x' ? $("#gamespace").width() - 50 : $("#gamespace").height() - 50;
        return Math.floor(Math.random() * size);  // Return a random position within the boundary
    }

    // Function to add an image to the gamespace at a random position
    function addImage() {
        const xPos = randomPosition('x');  // Get a random x position
        const yPos = randomPosition('y');  // Get a random y position
        const image = $("<img>", {
            src: "img/apple.png",  // Image source
            class: "clickable-image",  // CSS class for styling and identifying
            css: {
                left: xPos + "px",
                top: yPos + "px",
                position: "absolute",
                width: "50px",
                height: "50px"
            }
        }).appendTo("#gamespace");  // Add to the gamespace

        // Event handler for clicking the image
        image.click(function() {
            updateScore(1);  // Update score when image is clicked
            $(this).fadeOut("fast", function() { $(this).remove(); });  // Fade out and remove the image
        });
    }

    // Function to start and manage the game timer
    function startTimer() {
        let timeLeft = 30;  // Set the initial time
        $(".timer").text(timeLeft + " seconds left");  // Update the timer display
        timer = setInterval(function() {
            if (timeLeft > 0) {
                timeLeft--;  // Decrement the time left
                $(".timer").text(timeLeft + " seconds left");  // Update the timer display
            } else {
                clearInterval(timer);  // Clear the timer interval
                clearInterval(imageTimer);  // Stop adding images
                $(".timer").text("Time's up!");  // Notify the player
                $("#gamespace").empty();  // Clear the gamespace
                $("#start_button").prop("disabled", false);  // Re-enable the start button
            }
        }, 1000);  // Set the interval to 1 second
        $(".timer").show();  // Show the timer
    }

    // Event handler for the start button
    $("#start_button").click(function() {
        $(this).prop("disabled", true);  // Disable the start button to prevent re-starts
        startTimer();  // Start the game timer
        imageTimer = setInterval(addImage, randomTime());  // Start adding images at random intervals
    });

    // Function to generate a random time interval for image appearance
    function randomTime() {
        return Math.floor(Math.random() * 2001);  // Return a random time between 0 and 2000 milliseconds
    }

    // Set custom styles for the gamespace
    $("#gamespace").css({
        "position": "relative",
        "width": "600px",
        "height": "400px",
        "background-color": "#f4f4f9",
        "border": "1px solid black"
    });

    // Set custom styles for the start button
    $("#start_button").css({
        width: "150px",
        height: "50px",
        fontSize: "18px",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer"
    });
});
