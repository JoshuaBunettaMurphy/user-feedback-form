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

form.addEventListener('mouseover', (e) => {
    if (e.target.dataset.tooltip) {
        tooltip.textContent = e.target.dataset.tooltip;
        tooltip.style.display = 'block';

    let rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
        tooltip.style.top = `${rect.top + window.scrollY + 10}px`;
    }
});

