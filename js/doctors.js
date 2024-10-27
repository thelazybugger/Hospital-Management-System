document.addEventListener('DOMContentLoaded', () => {
    const addDoctorBtn = document.getElementById('addDoctorBtn');
    const doctorModal = document.getElementById('doctorModal');
    const closeBtn = document.querySelector('.close-btn');
    const doctorForm = document.getElementById('doctorForm');
    const doctorTable = document.getElementById('doctorTable');
    const modalTitle = document.getElementById('modalTitle');
    let editingDoctor = null;

    // Show modal to add a new doctor
    addDoctorBtn.addEventListener('click', () => {
        doctorForm.reset();
        modalTitle.textContent = "Add New Doctor";
        editingDoctor = null;
        doctorModal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        doctorModal.style.display = 'none';
    });

    // Save or Edit Doctor
    doctorForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const doctorID = document.getElementById('doctorID').value;
        const doctorName = document.getElementById('doctorName').value;
        const specialization = document.getElementById('specialization').value;

        if (editingDoctor) {
            // Edit existing doctor
            editingDoctor.cells[1].textContent = doctorName;
            editingDoctor.cells[2].textContent = specialization;
        } else {
            // Add new doctor
            const newRow = doctorTable.insertRow();
            newRow.innerHTML = `
                <td>${doctorID}</td>
                <td>${doctorName}</td>
                <td>${specialization}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            `;
            addEditAndDeleteEvents(newRow);
        }

        doctorModal.style.display = 'none';
    });

    // Add events to edit and delete buttons
    function addEditAndDeleteEvents(row) {
        const editBtn = row.querySelector('.edit-btn');
        const deleteBtn = row.querySelector('.delete-btn');

        // Edit Doctor
        editBtn.addEventListener('click', () => {
            editingDoctor = row;
            modalTitle.textContent = "Edit Doctor";
            document.getElementById('doctorID').value = row.cells[0].textContent;
            document.getElementById('doctorName').value = row.cells[1].textContent;
            document.getElementById('specialization').value = row.cells[2].textContent;
            doctorModal.style.display = 'block';
        });

        // Delete Doctor
        deleteBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this doctor?")) {
                row.remove();
            }
        });
    }
});


    // Logout functionality
    document.getElementById('logout').addEventListener('click', function() {
        if (confirm("Are you sure you want to logout?")) {
            window.location.href = 'index.html';
        }
    });
