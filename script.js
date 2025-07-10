function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    localStorage.setItem('userEmail', email);
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('chat-box').style.display = 'block';
    const name = email.split('@')[0];
    document.getElementById('greeting').innerText = `Welcome back, ${name} 👋`;
  } else {
    alert("Please enter your email and password.");
  }
}

function logout() {
  localStorage.removeItem('userEmail');
  document.getElementById('login-box').style.display = 'block';
  document.getElementById('chat-box').style.display = 'none';
}

function sendMessage() {
  const input = document.getElementById('userInput').value;
  const messages = document.getElementById('messages');
  if (input.trim()) {
    const userMsg = document.createElement('p');
    userMsg.innerText = '👤 ' + input;
    messages.appendChild(userMsg);

    const botMsg = document.createElement('p');
    botMsg.innerText = '🤖 FaithJayBot says: This is a test response.';
    messages.appendChild(botMsg);

    document.getElementById('userInput').value = '';
  }
}

document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('dark-mode');
};

window.onload = () => {
  const user = localStorage.getItem('userEmail');
  if (user) {
    login();
  }
};