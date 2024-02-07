
function initContactManagerListeners() {
    const contactManagerButton = document.getElementById('contact-manager-button');
    const contactManagerCollapseIcon = document.getElementById('contact-manager-collapse-icon');

    contactManagerButton.addEventListener('click', () => {
        const contactManagerButtonClasses = contactManagerButton.classList;
        const contactManagerButtonCollapsed = contactManagerButtonClasses.contains('collapsed');
        if (contactManagerButtonCollapsed) {
            contactManagerCollapseIcon.className = 'bi bi-plus-square';
        }
        else {
            contactManagerCollapseIcon.className = 'bi bi-dash-square';
        }
    });
}
function initSidebarListeners() {
    initContactManagerListeners()
}

document.addEventListener('DOMContentLoaded', () => {
    initSidebarListeners();
})