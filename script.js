function filterProjects(category) {
    // Select all elements with class 'project-card'
    const cards = document.querySelectorAll('.project-card');

    // Loop through each card
    cards.forEach(card => {
        // If category is 'all' OR the card has the specific class (e.g., 'game')
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block'; // Show it
        } else {
            card.style.display = 'none'; // Hide it
        }
    });
}