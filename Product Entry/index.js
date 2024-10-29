document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const cost = document.getElementById('cost').value;
    
    // Placeholder for form handling logic
    alert(`Form submitted!\nDate: ${date}\nName: ${name}\nQuantity: ${quantity}\nCost: ${cost}\nAvg:${cost/quantity}`);
});