document.getElementById('name').value = sessionStorage.getItem('customerName') || '';
document.getElementById('total-sell').value = sessionStorage.getItem('totalBuy') || '';
document.getElementById('due-tk').value = sessionStorage.getItem('dueTk') || '';

// Add retrieved data to the table
const date = sessionStorage.getItem('date');
const totalBuy = parseFloat(sessionStorage.getItem('totalBuy') || 0);
const cashTk = parseFloat(sessionStorage.getItem('cashTk') || 0);
const collectionTk = parseFloat(sessionStorage.getItem('collectionTk') || 0);
const dueTk = parseFloat(sessionStorage.getItem('dueTk') || 0);
const balance = totalBuy - (cashTk + collectionTk);

const tableBody = document.getElementById('customerTable').querySelector('tbody');
const row = document.createElement('tr');

row.innerHTML = `
    <td>${date}</td>
    <td>${totalBuy}</td>
    <td>${cashTk}</td>
    <td>${collectionTk}</td>
    <td>${dueTk}</td>
    <td>${balance}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
`;

tableBody.appendChild(row);

// Function to delete a row
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}