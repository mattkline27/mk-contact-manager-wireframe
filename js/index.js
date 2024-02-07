const contacts = [
    {
        id: 1,
        type: 'call',
        date: '1/26/2024',
        name: 'Todd Shea',
        phone: '(404) 308 7473',
        email: 'tshea@aodct.com',
        source: 'Organic',
    },
    {
        id: 2,
        type: 'call',
        date: '1/26/2024',
        name: 'Chuck Stevens',
        phone: '(404) 308 7473',
        email: 'chuck@castevenbuilders.com',
        source: 'Organic',
    },
    {
        id: 3,
        type: 'quote',
        date: '1/22/2024',
        name: 'Anna M',
        phone: '(866) 673 7347',
        email: 'annam@yahoo.com',
        source: 'Paid',
    },
    {
        id: 4,
        type: 'call',
        date: '1/21/2024',
        name: 'Zach Pound',
        phone: '(413) 653 3112',
        email: 'zpound22@gmail.com',
        source: 'Organic',
    },
    {
        id: 5,
        type: 'call',
        date: '1/21/2024',
        name: 'Shaba Nassar',
        phone: '(202) 492 9069',
        email: 'snassar@gmail.com',
        source: 'Organic',
    },
    {
        id: 6,
        type: 'call',
        date: '1/21/2024',
        name: 'Claudia Duck',
        phone: '(443) 633-2865',
        email: 'cduck@gmail.com',
        source: 'Organic',
    },
]

function getTypeIcon(type) {
    switch (type) {
        case 'call':
            return '<i style="" class="type-icon bi bi-telephone-fill"></i>';
        case 'quote':
            return '<i class="type-icon bi-telephone-fill"></i>';
        default:
            return '';
    }
}

function getSourceBadge(source) {
    switch (source) {
            case 'Organic':
                return '<div class="badge bg-success rounded-0 mx-1 source-badge">Organic</div>';
            case 'Paid':
                return '<div class="badge bg-primary rounded-0 mx-1 source-badge">Paid</div>';
            default:
                return '';
        }
}

function populateTable() {
    const table = document.getElementById('contacts-table');
    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.className = 'border-bottom';
        const contactId = contact.id;
        const typeIcon = getTypeIcon(contact.type);
        const sourceBadge = getSourceBadge(contact.source);

        row.innerHTML = `
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="contact-${contactId}">
                </div>
            </td>
            <td>${typeIcon}</td>
            <td>${contact.date}</td>
            <td>${contact.name}</td>
            <td>
                <a href="tel:${contact.phone}" class="fw-semibold text-decoration-none">${contact.phone}</a>
            </td>            
            <td>
                <a href="mailto:${contact.email}" class="fw-semibold text-decoration-none">${contact.email}</a>
            </td>
            <td>${sourceBadge}</td>
            <td>
                <div class="dropdown d-flex align-items-center justify-content-end h-100">
                    <button class="btn btn-secondary dropdown-toggle rounded-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <ul class="dropdown-menu rounded-0" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#"><i class="bi bi-ui-checks"></i>&nbsp;&nbsp;Send Survey</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-star-fill"></i>&nbsp;&nbsp;Send Review Request</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi bi-envelope-fill"></i>&nbsp;&nbsp;Send Message</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-calendar-fill"></i>&nbsp;&nbsp;Create Appointment</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-arrow-90deg-left"></i>&nbsp;&nbsp;Create Follow Up</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-pin-fill"></i>&nbsp;&nbsp;Add Note</a></li>
                    </ul>
                </div>
            </td>
        `;
        table.appendChild(row);
    });
}

window.onload = populateTable;
