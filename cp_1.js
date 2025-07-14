let form = document.getElementById('feedbackForm');
let feedbackDisplay = document.getElementById('feedbackDisplay');
let inputs = form.querySelectorAll('input, textarea');
let comments = document.getElementById('comments');
let charcount = document.getElementById('charCount');

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

comments.addEventListener('input', () => {
    charcount.textContent = `Character count: ${comments.value.length}`;
});

