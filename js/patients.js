let patients = [];
let editingIndex = null;

// DOM Elements
const patientModal = document.getElementById('patientModal');
const closeModalBtn = document.querySelector('.close-btn');
const addPatientBtn = document.getElementById('addPatientBtn');
const patientTable = document.getElementById('patientTable');
const patientForm = document.getElementById('patientForm');
const modalTitle = document.getElementById('modalTitle');
const savePatientBtn = document.getElementById('savePatientBtn');

// Open modal to add a new patient
addPatientBtn.addEventListener('click', () => {
    editingIndex = null;
    patientForm.reset();
    modalTitle.textContent = "Add New Patient";
    patientModal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    patientModal.style.display = 'none';
});

// Add or edit patient
patientForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const patient = {
        id: document.getElementById('patientID').value,
        name: document.getElementById('patientName').value,
        gender: document.getElementById('patientGender').value,
        bloodGroup: document.getElementById('patientBloodGroup').value
    };

    if (editingIndex === null) {
        // Add new patient
        patients.push(patient);
    } else {
        // Edit existing patient
        patients[editingIndex] = patient;
    }

    renderPatients();
    patientModal.style.display = 'none';
});

// Render patients table
function renderPatients() {
    patientTable.innerHTML = '';
    patients.forEach((patient, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.gender}</td>
            <td>${patient.bloodGroup}</td>
            <td>
                <button onclick="editPatient(${index})">Edit</button>
                <button onclick="deletePatient(${index})">Delete</button>
            </td>
        `;
        patientTable.appendChild(row);
    });
}

// Edit patient
function editPatient(index) {
    editingIndex = index;
    const patient = patients[index];

    document.getElementById('patientID').value = patient.id;
    document.getElementById('patientName').value = patient.name;
    document.getElementById('patientGender').value = patient.gender;
    document.getElementById('patientBloodGroup').value = patient.bloodGroup;

    modalTitle.textContent = "Edit Patient";
    patientModal.style.display = 'block';
}

// Delete patient
function deletePatient(index) {
    patients.splice(index, 1);
    renderPatients();
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === patientModal) {
        patientModal.style.display = 'none';
    }
});
 
    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        if (confirm("Are you sure you want to logout?")) {
            window.location.href = 'index.html';
        }
    });



   


