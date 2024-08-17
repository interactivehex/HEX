// Function to disable scrolling
function disableScrolling() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling and scroll to the top
function enableScrolling() {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Run the animation after a delay of 0.5 seconds
    setTimeout(() => {
        document.querySelectorAll('.logo-title, .logo-subtitle').forEach(el => {
        el.style.animation = 'moveUp 1.5s ease-in-out forwards';
        });
    }, 100); // 200 milliseconds = 0.2 seconds
}

// Disable scrolling initially
disableScrolling();

// Enable scrolling and scroll to the top once the page is fully loaded
window.addEventListener('load', enableScrolling);
