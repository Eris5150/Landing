document.addEventListener("DOMContentLoaded", () => {
    //get cards element
    const coffeeCard = document.getElementById("coffee-card");
    const gamesCard = document.getElementById("games-card");

    //Save the original content of the cards
    const coffeeCardContent = coffeeCard.innerHTML;
    const gamesCardContent = gamesCard.innerHTML;

    
    // Coffee Card Click Event
    let coffeeCardClicked = false;
    coffeeCard.addEventListener("click", () => {
        if (!coffeeCardClicked){
            coffeeCard.innerHTML = `
            <h3>Freshly Brewed Coffee</h3>
            <p>Our coffee is crafted from the finest beans sourced worldwide.</p>
            <p>Enjoy a variety of options like Espresso, Latte, Cappuccino, and more!</p>
            <p>Prices start from $3.50 per cup.</p>
            `;
            coffeeCardClicked = true;
        } else {
            coffeeCard.innerHTML = coffeeCardContent; //restore original content 
            coffeeCardClicked = false; 
        }

    });

    // Games Card Click Event
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
            gamesCardClicked = true; // Set flag to true
        } else {
            gamesCard.innerHTML = gamesCardContent; // Restore original content
            gamesCardClicked = false; // Reset flag
        }
    });
});

// Get all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item =>{
    const viewMore = item.querySelector('.view-more');
    const moreInfo = item.querySelector('.more-info');
    const image = item.querySelector('img');

    moreInfo.style.display = 'none';

    item.addEventListener('mouseenter', () => {
        viewMore.style.opacity = '1';
        viewMore.style.pointerEvents = 'auto';
    });

    item.addEventListener('mouseleave', () => {
        viewMore.style.opacity = '0';
        viewMore.style.pointerEvents = 'none';
        moreInfo.style.display = 'none';
    });

    viewMore.addEventListener('click', () =>{
        moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
    });

    image.addEventListener('click', ()=>{
        moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
    })
});