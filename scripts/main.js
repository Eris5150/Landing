// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get card elements
    const coffeeCard = document.getElementById("coffee-card");
    const gamesCard = document.getElementById("games-card");

    // Save original card content
    const coffeeCardContent = coffeeCard.innerHTML;
    const gamesCardContent = gamesCard.innerHTML;

    // Toggle coffee card content
    let coffeeCardClicked = false;
    coffeeCard.addEventListener("click", () => {
        if (!coffeeCardClicked) {
            coffeeCard.innerHTML = `
                <h3>Freshly Brewed Coffee</h3>
                <p>Our coffee is crafted from the finest beans sourced worldwide.</p>
                <p>Enjoy a variety of options like Espresso, Latte, Cappuccino, and more!</p>
                <p>Prices start from $3.50 per cup.</p>
            `;
            coffeeCardClicked = true;
        } else {
            coffeeCard.innerHTML = coffeeCardContent;
            coffeeCardClicked = false;
        }
    });

    // Toggle games card content
    let gamesCardClicked = false;
    gamesCard.addEventListener("click", () => {
        if (!gamesCardClicked) {
            gamesCard.innerHTML = `
                <h3>Free Board Games</h3>
                <p>We have a wide variety of board games for you to enjoy:</p>
                <ul>
                    <li>Chess</li>
                    <li>Monopoly</li>
                    <li>Scrabble</li>
                    <li>Catan</li>
                    <li>Risk</li>
                </ul>
                <p>Free to play with any purchase!</p>
            `;
            gamesCardClicked = true;
        } else {
            gamesCard.innerHTML = gamesCardContent;
            gamesCardClicked = false;
        }
    });
});

// Gallery hover and click effects
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    const viewMore = item.querySelector('.view-more');
    const moreInfo = item.querySelector('.more-info');
    const image = item.querySelector('img');

    // Hide extra info by default
    moreInfo.style.display = 'none';

    // Show "View More" on hover
    item.addEventListener('mouseenter', () => {
        viewMore.style.opacity = '1';
        viewMore.style.pointerEvents = 'auto';
    });

    // Hide when mouse leaves
    item.addEventListener('mouseleave', () => {
        viewMore.style.opacity = '0';
        viewMore.style.pointerEvents = 'none';
        moreInfo.style.display = 'none';
    });

    // Toggle extra info on button or image click
    viewMore.addEventListener('click', () => {
        moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
    });

    image.addEventListener('click', () => {
        moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
    });
});
