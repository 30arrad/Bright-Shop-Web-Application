// script.js

function displayCustomers() {
    const customerTable = document.getElementById("customerTable").querySelector("tbody");
    customerTable.innerHTML = "";

    customers.forEach((customer, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>
                <button onclick="viewCustomerDetails(${index})">View Details</button>
                <button onclick="editCustomer(${index})">Edit</button>
                <button onclick="deleteCustomer(${index})">Delete</button>
            </td>
        `;
        customerTable.appendChild(row);
    });
}

// Function to view customer details
function viewCustomerDetails(index) {
    const customer = customers[index];
    localStorage.setItem("selectedCustomer", JSON.stringify(customer));
    window.location.href = "value.html";
}
