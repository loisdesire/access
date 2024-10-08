document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from submitting normally

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Check if user exists and password is correct
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password && u.role === role);

    if (user) {
        alert('Login successful!');
        // You can add code here to redirect to a dashboard or main page
        switch (user.role) {
            case 'admin':
                window.location.href = '/dashboard/dash.html';
                break;
            case 'staff':
                window.location.href = '/dashboard/staff.html';
                break;
            case 'student':
                window.location.href = '/dashboard/student.html';
                break;
            default:
                alert('Invalid role. Please contact the administrator.');
        }

    } else {
        alert('Invalid email, password, or role. Please try again.');
    }
});


/*In nav, display username and role. Protect the route*/
