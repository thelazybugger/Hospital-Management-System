// Select DOM elements
const addBillBtn = document.getElementById('addBillBtn');
const billingModal = document.getElementById('billingModal');
const closeBillingModal = document.getElementById('closeBillingModal');
const saveBillBtn = document.getElementById('saveBillBtn');
const billingTableBody = document.getElementById('billingTableBody');
const billingForm = document.getElementById('billingForm');

// Example data (can be replaced with actual data)
let bills = [
    { id: 1, patientName: 'John Doe', date: '2024-10-21', totalAmount: 500 },
    { id: 2, patientName: 'Jane Smith', date: '2024-10-20', totalAmount: 300 }
];

// Function to render bills in the table
function renderBills() {
    billingTableBody.innerHTML = '';
    bills.forEach((bill, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bill.id}</td>
            <td>${bill.patientName}</td>
            <td>${bill.date}</td>
            <td>$${bill.totalAmount}</td>
            <td>
                <button class="edit-btn" onclick="editBill(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteBill(${index})">Delete</button>
            </td>
        `;
        billingTableBody.appendChild(row);
    });
}

// Function to open the modal
addBillBtn.addEventListener('click', () => {
    billingForm.reset();
    document.getElementById('modalTitle').textContent = 'Add New Bill';
    billingModal.style.display = 'block';
});

// Function to close the modal
closeBillingModal.addEventListener('click', () => {
    billingModal.style.display = 'none';
});

// Function to save a new bill
billingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const patientName = document.getElementById('patientName').value;
    const billingDate = document.getElementById('billingDate').value;
    const totalAmount = document.getElementById('totalAmount').value;
    
    const newBill = {
        id: bills.length + 1,
        patientName,
        date: billingDate,
        totalAmount
    };
    
    bills.push(newBill);
    renderBills();
    billingModal.style.display = 'none';
});

// Function to edit an existing bill
function editBill(index) {
    const bill = bills[index];
    document.getElementById('patientName').value = bill.patientName;
    document.getElementById('billingDate').value = bill.date;
    document.getElementById('totalAmount').value = bill.totalAmount;
    document.getElementById('modalTitle').textContent = 'Edit Bill';
    billingModal.style.display = 'block';
    
    saveBillBtn.addEventListener('click', () => {
        bills[index].patientName = document.getElementById('patientName').value;
        bills[index].date = document.getElementById('billingDate').value;
        bills[index].totalAmount = document.getElementById('totalAmount').value;
        
        renderBills();
        billingModal.style.display = 'none';
    });
}

// Function to delete a bill
function deleteBill(index) {
    bills.splice(index, 1);
    renderBills();
}

// Close the modal if clicked outside of it
window.addEventListener('click', (event) => {
    if (event.target === billingModal) {
        billingModal.style.display = 'none';
    }
});

// Initial render of bills
renderBills();
