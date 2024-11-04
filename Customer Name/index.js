function addCustomerSell() {

  document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get input values
    const customerName = document.getElementById('customerName').value;
    const date = document.getElementById('date').value;
    const totalBuy = parseFloat(document.getElementById('totalBuy').value);
    const cashTk = parseFloat(document.getElementById('cashTk').value);
    const collectionTk = parseFloat(document.getElementById('collectionTk').value);
    const dueTk = parseFloat(document.getElementById('dueTk').value);
  
    // Calculate balance
    const balance = totalBuy - (cashTk + collectionTk);
  
    // Add data to the table
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
  
    // Clear the form
    document.getElementById('customerForm').reset();
  });
  
  function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
  }
  
}




