document.getElementById('clickButton').addEventListener('click', function(event) {
    // Retrieve the click count from local storage, or set it to 0 if it doesn't exist
    let clickCount = localStorage.getItem('clickCount') || 0;
    clickCount = parseInt(clickCount); // Ensure it's treated as a number

    // Update the button's behavior based on the click count
    if (clickCount === 0) {
        event.preventDefault();
        window.location.href = "page01.html";
    } else if (clickCount === 1) {
        event.preventDefault();
        window.location.href = "page02.html";
    }

    // Increment the click count and reset it after the third click
    clickCount = (clickCount + 1) % 3;
    localStorage.setItem('clickCount', clickCount);
});