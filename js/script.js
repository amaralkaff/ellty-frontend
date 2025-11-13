// JavaScript for Ellty Frontend Test Assignment
// Checkbox Component State Machine

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ellty Frontend Test - Component Loaded');

    const checkbox = document.querySelector('.desktop-variant');
    let isChecked = true; // Start in checked state to match Figma image

    // Click handler - Toggle between checked/unchecked
    checkbox.addEventListener('click', function() {
        isChecked = !isChecked;

        if (isChecked) {
            // Variant4 - Checked state
            checkbox.classList.add('checked');
            checkbox.classList.remove('unchecking', 'variant9');
        } else {
            // Variant8/9 - Unchecked state
            checkbox.classList.remove('checked');
            checkbox.classList.add('unchecking');

            // Transition to Variant9 after a brief moment
            setTimeout(() => {
                checkbox.classList.remove('unchecking');
                checkbox.classList.add('variant9');
            }, 100);
        }
    });

    // Mouse enter/leave for state transitions
    checkbox.addEventListener('mouseenter', function() {
        if (!isChecked) {
            // Variant2 - Hover on unchecked (CSS handles this with :hover)
        } else {
            // Variant5/6 - Hover on checked
        }
    });

    checkbox.addEventListener('mouseleave', function() {
        if (isChecked) {
            // Variant5 - Mouse outside while checked
        }
    });

    console.log('Checkbox state machine initialized');
});
