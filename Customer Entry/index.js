

function saveData(event) {
    event.preventDefault();

    // Store form data in sessionStorage
    sessionStorage.setItem('customerName', document.getElementById('customerName').value);
    sessionStorage.setItem('date', document.getElementById('date').value);
    sessionStorage.setItem('totalBuy', document.getElementById('totalBuy').value);
    sessionStorage.setItem('cashTk', document.getElementById('cashTk').value);
    sessionStorage.setItem('collectionTk', document.getElementById('collectionTk').value);
    sessionStorage.setItem('dueTk', document.getElementById('dueTk').value);

    // Redirect to the second page
    window.location.href = "../Customer Name/index.html"; // Replace with the actual path to the second page
}