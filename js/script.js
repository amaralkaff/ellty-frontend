// JavaScript for Ellty Frontend Test Assignment
// Checkbox Component State Machine

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ellty Frontend Test - Component Loaded');

    // Select only interactive checkboxes (not static variants)
    const checkboxes = document.querySelectorAll('.desktop-variant:not(.static)');

    // Get all checkboxes in the pages card
    const pagesCard = document.querySelector('.pages-card');
    if (pagesCard) {
        const allCheckboxes = pagesCard.querySelectorAll('.desktop-variant');
        const allPagesCheckbox = allCheckboxes[0]; // First checkbox is "All pages"
        const pageCheckboxes = Array.from(allCheckboxes).slice(1); // Rest are individual pages

        // All pages checkbox click handler
        if (allPagesCheckbox) {
            allPagesCheckbox.addEventListener('click', function() {
                const isAllChecked = allPagesCheckbox.classList.contains('checked');

                // Toggle all page checkboxes to match "All pages" state
                pageCheckboxes.forEach(checkbox => {
                    if (isAllChecked) {
                        checkbox.classList.add('checked');
                        checkbox.classList.remove('unchecking', 'variant9');
                        checkbox.removeAttribute('style');
                    } else {
                        checkbox.classList.remove('checked');
                        checkbox.classList.add('variant9');
                        checkbox.removeAttribute('style');
                    }
                });
            });
        }

        // Individual page checkboxes - update "All pages" if all are checked/unchecked
        pageCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('click', function() {
                setTimeout(() => {
                    const allChecked = pageCheckboxes.every(cb => cb.classList.contains('checked'));
                    const noneChecked = pageCheckboxes.every(cb => !cb.classList.contains('checked'));

                    if (allChecked) {
                        allPagesCheckbox.classList.add('checked');
                        allPagesCheckbox.classList.remove('variant9');
                    } else if (noneChecked) {
                        allPagesCheckbox.classList.remove('checked');
                        allPagesCheckbox.classList.add('variant9');
                    }
                }, 10);
            });
        });
    }

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

    console.log(`Interactive checkboxes initialized: ${checkboxes.length}`);
});
