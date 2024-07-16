document.querySelectorAll('.sizes button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.sizes button').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    });
});
