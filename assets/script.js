window.addEventListener('DOMContentLoaded', () => {
    const buttonAll = document.getElementById('button-all');
    buttonAll.click();
})

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-bar button');
    const gallery = document.querySelector('.gallery');
    const items   = [...document.querySelectorAll('.gallery a')];

    function filterGallery(category) {
        gallery.innerHTML = '';
        items.forEach(item => {
            const imgCategory = item.querySelector('img').dataset.category;
            const match       = category === 'all' || imgCategory === category;
            if (match) {
                gallery.appendChild(item);
            }
        });
        baguetteBox.run('.gallery');
    }
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;

            buttons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filterGallery(category);
        });
    });
    filterGallery('all');
});