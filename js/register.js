$(document).ready(function() {
    // Event handler for state selection
    $('#state').on('change', function() {
        const selectedState = $(this).val();
        if (selectedState) {
            fetchDistrictsByState(selectedState.toUpperCase());
        }
    });

    // Function to fetch districts based on selected state
    function fetchDistrictsByState(selectedState) {
        const apiKey = '579b464db66ec23bdd0000018a4c8dd2de6342056f8180ec232edc7d';
        const apiUrl = `https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=${apiKey}&format=json&limit=1000&filters[statename]=${selectedState}`;

        $.get(apiUrl)
            .done(function(data) {
                const districtDropdown = $('#city');
                districtDropdown.empty();
                const uniqueDistricts = new Set();

                data.records.forEach(item => {
                    uniqueDistricts.add(item.districtname);
                });

                districtDropdown.append('<option value="">Select a City/District</option>');
                uniqueDistricts.forEach(district => {
                    districtDropdown.append(`<option value="${district}">${district}</option>`);
                });
            })
            .fail(function(error) {
                console.error('Error fetching districts:', error);
            });
    }

    // Update city based on entered pincode
    $('#pincode').on('blur', function() {
        const enteredPincode = $(this).val();
        // Rest of the code for updating city based on pincode
    });

    // Initialize Select2 for the fields
    $('.select-field').select2({
        theme: 'bootstrap-5',
        // placeholder: 'Select an option'
    });

    // Other event handlers, form submission, etc.
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.regForm');
    const registerBtn = document.querySelector('.btn-register');
    const declareCheckbox = document.querySelector('#declare');
    const toastContainer = document.getElementById('toastContainer');

    // Function to validate the form fields
    function validateForm() {
        // Implement your validation logic here
        // Return true if all fields are valid, otherwise false
        return true;
    }

    // Function to display a Bootstrap Toast
    function showToast(message) {
        const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'), {
            autohide: true,
            animation: true
        });
        
        toastContainer.querySelector('.toast-body').innerText = message;
        toast.show();
    }

    // Function to handle form submission
    function submitForm() {
        if (validateForm()) {
            // Implement your form submission logic here
            // This could include sending data to a server or performing any other actions
            $('#successModal').modal('show'); // Show the modal using Bootstrap's modal method
        }
    }

    // Function to handle registration button click
    function handleRegisterClick(event) {
        event.preventDefault();
        if (declareCheckbox && declareCheckbox.checked) {
            submitForm();
        } else {
            showToast('Please accept the privacy policy and declaration.');
        }
    }

    // Attach event listeners
    registerBtn.addEventListener('click', handleRegisterClick);
});
