  // Function to disable scrolling
  function disableScrolling() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  
  // Function to enable scrolling
  function enableScrolling() {
    setTimeout(() => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.getElementById('header').style.overflow = 'none';
    }, 1500); // 1500 milliseconds = 1.5 second
  }
  
  disableScrolling();
  enableScrolling();