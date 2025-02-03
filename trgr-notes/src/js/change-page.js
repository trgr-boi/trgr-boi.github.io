function loadContent(page) {
    fetch('note-pages/' + page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            window.scrollTo(0, 0); // Scroll to the top of the page
        })
        .catch(error => console.error('Error loading content:', error));
};

// Load default page
window.onload = () => loadContent('welcome.html');