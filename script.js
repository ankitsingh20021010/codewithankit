
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    
   
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
  
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const menuToggle = document.getElementById('menu-toggle');
          const icon = menuToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });




  const firebaseConfig = {
    apiKey: "AIzaSyD9l8DGJiBSDGIWa5A_uB8NbDXIsHUgb7o",
    authDomain: "codewithankit-c2a01.firebaseapp.com",
    projectId: "codewithankit-c2a01",
    databaseURL: "https://codewithankit-c2a01-default-rtdb.firebaseio.com/",
    storageBucket: "codewithankit-c2a01.appspot.com",
    messagingSenderId: "90103506908",
    appId: "1:90103506908:web:a5eeb8fad633d087d0d119"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    const authLink = document.getElementById('authLink');
    const authText = document.getElementById('authText');
    const username = localStorage.getItem('username');



    if (user) {
      // ✅ User is logged in
      authText.innerText = `${username}`;
      authLink.href = "#"; // ya koi aur dashboard profile.html
    } else {
      // ❌ Not logged in
      authText.innerText = "Sign-up";
      authLink.href = "loging.html";
    }
  });

const usernamee = localStorage.getItem('username');
document.getElementById('username').innerText=`${usernamee}`;




 
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
 
    for (const [key, value] of Object.entries(formValues)) {
      if (!value.trim()) {
        Swal.fire({
          title: 'Oops...',
          text: `Please fill in the ${key} field`,
          icon: 'error',
          confirmButtonColor: '#3B82F6',
          confirmButtonText: 'OK',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        });
        return;
      }
    }
    
   
    emailjs.send('service_q5lfa79', 'template_bwqfjei', formValues)
      .then(function(response) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully',
          icon: 'success',
          confirmButtonColor: '#10B981',
          confirmButtonText: 'Great!'
        });
        form.reset();
      }, function(error) {
        Swal.fire({
          title: 'Error!',
          text: 'There was a problem sending your message. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#EF4444',
          confirmButtonText: 'OK'
        });
      });
  });