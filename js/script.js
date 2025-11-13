// JavaScript for Ellty Frontend Test Assignment
// Checkbox Component State Machine

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ellty Frontend Test - Component Loaded');

    const checkboxes = document.querySelectorAll('.desktop-variant');

    checkboxes.forEach((checkbox, index) => {
        let isChecked = checkbox.classList.contains('checked');

        // Click handler - Toggle between checked/unchecked
        checkbox.addEventListener('click', function() {
            isChecked = !isChecked;

            if (isChecked) {
                // Variant4 - Checked state
                checkbox.classList.add('checked');
                checkbox.classList.remove('unchecking', 'variant9');
                checkbox.removeAttribute('style');
            } else {
                // Variant8/9 - Unchecked state
                checkbox.classList.remove('checked');
                checkbox.classList.add('unchecking');

                // Transition to Variant9 after a brief moment
                setTimeout(() => {
                    checkbox.classList.remove('unchecking');
                    checkbox.classList.add('variant9');
                    checkbox.removeAttribute('style');
                }, 100);
            }
        });
    });

    console.log(`Checkbox state machine initialized for ${checkboxes.length} checkboxes`);
});
