document.querySelectorAll('.is-menu').forEach(function(el) {
    el.addEventListener('click', function(e) {
        if (el.classList.contains('is-open')) {
            el.classList.remove('is-open')
        } else {
            el.classList.add('is-open')
        }
    });
});