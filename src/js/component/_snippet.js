document.querySelectorAll('[data-language]').forEach(function(el) {
    el.classList.add('language-' + el.dataset.language);
});