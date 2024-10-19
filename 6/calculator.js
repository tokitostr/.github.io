document.addEventListener('DOMContentLoaded', function () {
    const quantityInput = document.getElementById('quantity');
    const serviceTypeRadios = document.querySelectorAll('input[name="serviceType"]');
    const optionsDiv = document.getElementById('options');
    const propertiesDiv = document.getElementById('properties');
    const optionSelect = document.getElementById('optionSelect');
    const propertyCheckbox = document.getElementById('propertyCheckbox');
    const totalPriceDisplay = document.getElementById('totalPrice');

    function updatePrice() {
        let quantity = parseInt(quantityInput.value) || 0;
        let basePrice = 0;

        const selectedType = document.querySelector('input[name="serviceType"]:checked').value;
        if (selectedType === '1') {
            basePrice = 58;
        } else if (selectedType === '2') {
            basePrice = 157;
        } else if (selectedType === '3') {
            basePrice = 102;
        }

        let optionPrice = parseInt(optionSelect.value) || 0;
        let propertyPrice = propertyCheckbox.checked ? 50 : 0;
        let totalPrice = (basePrice + optionPrice + propertyPrice) * quantity;
        totalPriceDisplay.textContent = totalPrice;
    }

    function updateForm() {
        const selectedType = document.querySelector('input[name="serviceType"]:checked').value;

        if (selectedType === '1') {
            optionsDiv.classList.add('hidden');
            propertiesDiv.classList.add('hidden');
        } else if (selectedType === '2') {
            optionsDiv.classList.remove('hidden');
            propertiesDiv.classList.add('hidden');
        } else if (selectedType === '3') {
            optionsDiv.classList.add('hidden');
            propertiesDiv.classList.remove('hidden');
        }

        updatePrice();
    }

    quantityInput.addEventListener('input', updatePrice);
    serviceTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateForm);
    });
    optionSelect.addEventListener('change', updatePrice);
    propertyCheckbox.addEventListener('change', updatePrice);

    updateForm();
});