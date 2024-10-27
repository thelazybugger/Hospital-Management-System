document.addEventListener('DOMContentLoaded', function() {
    // Mock data for statistics (could be fetched from backend)
    const totalPatients = 120;
    const totalAppointments = 45;
    const totalDoctors = 15;

    // Update dashboard stats
    document.getElementById('totalPatients').textContent = totalPatients;
    document.getElementById('totalAppointments').textContent = totalAppointments;
    document.getElementById('totalDoctors').textContent = totalDoctors;

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        if (confirm("Are you sure you want to logout?")) {
            window.location.href = 'index.html';
        }
    });
});
