const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-login');
    const signupForm = document.querySelector('.form-signup');

    const users = [
        { username: 'Salma', email: 'salma@gmail.com', password: '123456789' }
    ];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            window.location.href = 'home.html';
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (!username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('User already exists with this email');
            return;
        }

        users.push({ username, email, password });
        alert('User registered successfully');
        signupForm.reset();
    });

    const switchers = document.querySelectorAll('.switcher');
    switchers.forEach(switcher => {
        switcher.addEventListener('click', function() {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'));
            switcher.parentElement.classList.add('is-active');
        });
    });
});

