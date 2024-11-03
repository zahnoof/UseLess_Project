const cat = document.getElementById('bouncingCat');
let isBouncing = false;

function bounce() {
    if (!isBouncing) {
        isBouncing = true;
        cat.style.transform = 'translateY(-150px)'; // Adjust height of bounce
        setTimeout(() => {
            cat.style.transform = 'translateY(0)';
            isBouncing = false;
        }, 500); // Adjust time for bounce duration
    }
}

// Make the cat bounce when the container is clicked
document.querySelector('.container').addEventListener('click', bounce);
