document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
  
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    window.location.href = 'login.html';
  });
  