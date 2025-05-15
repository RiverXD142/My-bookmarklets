javascript:(function() {
    // Change background color every 300 milliseconds
    setInterval(function() {
        document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }, 300);

    // Open new tabs with scary smiley faces every second
    setInterval(function() {
        window.open('data:text/html,<html><body style="font-size:150px; text-align:center; color:red; background:black;">😱👻😈💀</body></html>', '_blank');
    }, 1000);

    // Rotate the screen at a faster speed
    let angle = 0;
    setInterval(function() {
        angle = (angle + 20) % 360; // Increment angle
        document.body.style.transform = 'rotate(' + angle + 'deg)';
    }, 50); // Rotate every 50ms

    // Add a scary audio sound
    var audio = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');
    setInterval(function() {
        audio.play();
    }, 500);
    
    alert('WARNING! The screen is going to spin and colors will change rapidly! Brace yourself for the scary faces!');
})();
