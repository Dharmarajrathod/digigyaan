document.addEventListener('DOMContentLoaded', function () {
    const roleSelectors = document.querySelectorAll('input[name="role"]');
    const allForms = document.querySelectorAll('.form-section');

    roleSelectors.forEach(selector => {
        selector.addEventListener('change', function () {
            // Get the value of the selected role (e.g., "student", "principal")
            const selectedRole = this.value;

            // Hide all forms first
            allForms.forEach(form => {
                form.classList.remove('active-form');
            });

            // Find the form that corresponds to the selected role
            // The form's ID should be "{role}-form" (e.g., "principal-form")
            const activeForm = document.getElementById(selectedRole + '-form');

            // If a matching form is found, show it
            if (activeForm) {
                activeForm.classList.add('active-form');
            }
        });
    });

    // Ensure the initially checked radio button's form is visible on page load
    const initiallyChecked = document.querySelector('input[name="role"]:checked');
    if (initiallyChecked) {
        const initialFormId = initiallyChecked.value + '-form';
        const initialForm = document.getElementById(initialFormId);
        if (initialForm) {
            allForms.forEach(form => form.classList.remove('active-form'));
            initialForm.classList.add('active-form');
        }
    }
});
