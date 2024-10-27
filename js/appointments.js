document.addEventListener('DOMContentLoaded', () => {
    const addAppointmentBtn = document.getElementById('addAppointmentBtn');
    const appointmentModal = document.getElementById('appointmentModal');
    const closeBtn = document.querySelector('.close-btn');
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentTable = document.getElementById('appointmentTable');
    const modalTitle = document.getElementById('modalTitle');
    let editingAppointment = null;

    // Show modal to add a new appointment
    addAppointmentBtn.addEventListener('click', () => {
        appointmentForm.reset();
        modalTitle.textContent = "Add New Appointment";
        editingAppointment = null;
        appointmentModal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        appointmentModal.style.display = 'none';
    });

    // Save or Edit Appointment
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const appointmentID = document.getElementById('appointmentID').value;
        const patientName = document.getElementById('patientName').value;
        const doctorName = document.getElementById('doctorName').value;
        const appointmentDate = document.getElementById('appointmentDate').value;
        const appointmentTime = document.getElementById('appointmentTime').value;

        if (editingAppointment) {
            // Edit existing appointment
            editingAppointment.cells[1].textContent = patientName;
            editingAppointment.cells[2].textContent = doctorName;
            editingAppointment.cells[3].textContent = appointmentDate;
            editingAppointment.cells[4].textContent = appointmentTime;
        } else {
            // Add new appointment
            const newRow = appointmentTable.insertRow();
            newRow.innerHTML = `
                <td>${appointmentID}</td>
                <td>${patientName}</td>
                <td>${doctorName}</td>
                <td>${appointmentDate}</td>
                <td>${appointmentTime}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            `;
            addEditAndDeleteEvents(newRow);
        }

        appointmentModal.style.display = 'none';
    });

    // Add events to edit and delete buttons
    function addEditAndDeleteEvents(row) {
        const editBtn = row.querySelector('.edit-btn');
        const deleteBtn = row.querySelector('.delete-btn');

        // Edit Appointment
        editBtn.addEventListener('click', () => {
            editingAppointment = row;
            modalTitle.textContent = "Edit Appointment";
            document.getElementById('appointmentID').value = row.cells[0].textContent;
            document.getElementById('patientName').value = row.cells[1].textContent;
            document.getElementById('doctorName').value = row.cells[2].textContent;
            document.getElementById('appointmentDate').value = row.cells[3].textContent;
            document.getElementById('appointmentTime').value = row.cells[4].textContent;
            appointmentModal.style.display = 'block';
        });

        // Delete Appointment
        deleteBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this appointment?")) {
                row.remove();
            }
        });
    }
});
``

    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        if (confirm("Are you sure you want to logout?")) {
            window.location.href = 'index.html';
        }
    });
