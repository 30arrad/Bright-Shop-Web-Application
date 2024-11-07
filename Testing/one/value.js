// value.js

document.addEventListener("DOMContentLoaded", function() {
    // Fetch customer data if stored in localStorage (for example)
    const customerData = JSON.parse(localStorage.getItem("selectedCustomer"));
    
    if (customerData) {
        document.getElementById("customerName").value = customerData.name;
        document.getElementById("customerAddress").value = customerData.address;
        document.getElementById("totalSell").value = customerData.totalSell;
        document.getElementById("dueTk").value = customerData.dueTk;
        
        // Add rows to transaction table if any
        const transactions = customerData.transactions || [];
        const transactionTable = document.getElementById("transactionTable").querySelector("tbody");

        transactions.forEach(transaction => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.totalSell}</td>
                <td>${transaction.cash}</td>
                <td>${transaction.collection}</td>
                <td>${transaction.due}</td>
                <td>${transaction.balance}</td>
                <td><button>Edit</button></td>
            `;
            transactionTable.appendChild(row);
        });
    }
});
