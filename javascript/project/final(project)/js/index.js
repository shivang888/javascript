const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let scrollPosition = 0;

// Function to scroll the slider
const scrollSlider = (direction) => {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const visibleCards = Math.floor(slider.offsetWidth / cardWidth);

    if (direction === 'next') {
        if (scrollPosition < slider.children.length - visibleCards) {
            scrollPosition++;
        } else {
            scrollPosition = 0; // loop back to the start
        }
        slider.style.transform = `translateX(-${scrollPosition * cardWidth}px)`;
    } else if (direction === 'prev') {
        if (scrollPosition > 0) {
            scrollPosition--;
        } else {
            scrollPosition = slider.children.length - visibleCards;
        }
        slider.style.transform = `translateX(-${scrollPosition * cardWidth}px)`;
    }
};

// Event listeners for the buttons
nextBtn.addEventListener('click', () => scrollSlider('next'));
prevBtn.addEventListener('click', () => scrollSlider('prev'));

// Auto slide every 3 seconds
const autoSlide = () => {
    setInterval(() => {
        scrollSlider('next');
    }, 3000); // Change slide every 3 seconds
};

// Start the automatic slide
autoSlide();


// company shoes section started

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,  // Ek screen par kitne slides dikhane hain
    spaceBetween: 10,   // Har slide ke beech space
    loop: true,         // Loop main chalaye
    autoplay: {
      delay: 3000,      // Automatic slide time (ms)
      disableOnInteraction: false,  // Interaction ke baad bhi autoplay chalu rahe
    },
  });