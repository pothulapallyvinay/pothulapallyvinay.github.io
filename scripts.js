document.addEventListener('DOMContentLoaded', () => {
    console.log('CompaniesBuilder rebranded website loaded');
});

function submitContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! Our team will reach out soon.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please complete all fields.');
    }
}

function submitDemo() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const service = document.getElementById('service').value;
    
    if (name && email && company && service) {
        alert('Demo request received! We’ll contact you to schedule.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('company').value = '';
        document.getElementById('service').value = '';
    } else {
        alert('Please complete all fields.');
    }
}
