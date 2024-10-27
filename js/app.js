document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Placeholder for login logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid login credentials");
    }
});

let patients = [];

function addPatient() {
    const id = prompt("Enter patient ID:");
    const name = prompt("Enter patient name:");
    const gender = prompt("Enter gender (M/F):");
    const bloodGroup = prompt("Enter blood group:");

    patients.push({ id, name, gender, bloodGroup });
    renderPatients();
}

function renderPatients() {
    const patientTable = document.getElementById('patientTable');
    patientTable.innerHTML = '';
    patients.forEach((patient, index) => {
        patientTable.innerHTML += `
            <tr>
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${patient.gender}</td>
                <td>${patient.bloodGroup}</td>
                <td>
                    <button onclick="deletePatient(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deletePatient(index) {
    patients.splice(index, 1);
    renderPatients();
}
