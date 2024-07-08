const API_URL = 'https://script.google.com/macros/s/AKfycbyBnjPPHIo3kDN9OoEThht6AjqWtNuY3yNA8qbYzdoMSD7I31RFcu9GR_RV19LW03cW/exec'; // Replace with your Google Script API URL

// Fetch all contacts from the server
function fetchContacts() {
    fetch(`${API_URL}?action=getContacts`)
        .then(response => response.json())
        .then(data => {
            const contactsTable = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
            contactsTable.innerHTML = ''; // Clear the table
            data.forEach(contact => {
                const row = contactsTable.insertRow();
                row.insertCell(0).textContent = contact.id;
                row.insertCell(1).textContent = contact.firstName;
                row.insertCell(2).textContent = contact.lastName;
                row.insertCell(3).textContent = contact.dob;
                row.insertCell(4).textContent = contact.gender;
                row.insertCell(5).textContent = contact.passportNumber;
                row.insertCell(6).textContent = contact.dateOfExpiry;
                row.insertCell(7).textContent = contact.nationality;
                row.insertCell(8).textContent = contact.email;
                row.insertCell(9).textContent = contact.mobile;
                row.insertCell(10).textContent = contact.organization;
                row.insertCell(11).textContent = contact.designation;
                row.insertCell(12).textContent = contact.houseStreetVillage;
                row.insertCell(13).textContent = contact.city;
                row.insertCell(14).textContent = contact.postalCode;
                row.insertCell(15).textContent = contact.country;
                const actionsCell = row.insertCell(16);
                actionsCell.innerHTML = `<button onclick="deleteContact('${contact.id}')">Delete</button>`;
            });
        })
        .catch(error => console.error('Error fetching contacts:', error));
}

// Add a new contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.action = 'addContact';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        fetchContacts();
        event.target.reset();
    })
    .catch(error => console.error('Error adding contact:', error));
});

// Delete a contact
function deleteContact(id) {
    if (confirm('Are you sure you want to delete this contact?')) {
        fetch(`${API_URL}?action=deleteContact&id=${id}`)
            .then(response => response.json())
            .then(result => {
                alert(result);
                fetchContacts();
            })
            .catch(error => console.error('Error deleting contact:', error));
    }
}

// Initial fetch of contacts when the page loads
document.addEventListener('DOMContentLoaded', fetchContacts);

        })
        .catch(error => console.error('Error fetching contacts:', error));
}

// Add a new contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.action = 'addContact';

    fetch(https://script.google.com/macros/s/AKfycbyBnjPPHIo3kDN9OoEThht6AjqWtNuY3yNA8qbYzdoMSD7I31RFcu9GR_RV19LW03cW/exec, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        fetchContacts();
        event.target.reset();
    })
    .catch(error => console.error('Error adding contact:', error));
});

// Delete a contact
function deleteContact(id) {
    if (confirm('Are you sure you want to delete this contact?')) {
        fetch(`${https://script.google.com/macros/s/AKfycbyBnjPPHIo3kDN9OoEThht6AjqWtNuY3yNA8qbYzdoMSD7I31RFcu9GR_RV19LW03cW/exec}?action=deleteContact&id=${id}`)
            .then(response => response.json())
            .then(result => {
                alert(result);
                fetchContacts();
            })
            .catch(error => console.error('Error deleting contact:', error));
    }
}

// Initial fetch of contacts when the page loads
document.addEventListener('DOMContentLoaded', fetchContacts);
