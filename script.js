/**
 * Gushwork Assignment - Vanilla JS Logic
 * Features: Sticky Header, Carousel, Hover Zoom
 */

window.onload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initCarousel();
    initHoverZoom();
});

/**
 * 1. Sticky Header Functionality
 * Shows header when scrolling beyond the first fold (Hero)
 */
function initStickyHeader() {
    const header = document.querySelector('#main-header');
    const hero = document.querySelector('.hero');
    const body = document.body;

    window.addEventListener('scroll', () => {
        // Calculate the height of the first fold
        const firstFoldHeight = hero.offsetHeight;

        if (window.scrollY > firstFoldHeight) {
            header.classList.add('sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('sticky');
            body.classList.remove('is-sticky');
        }
    });
}

/**
 * 2. Image Carousel Functionality
 * Swaps main image based on thumbnail clicks
 */
function initCarousel() {
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImg = document.querySelector('#main-display-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Update Source
            mainImg.src = this.src;

            // Update Active State
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * 3. Hover Zoom Functionality
 * Magnifies the image based on mouse position
 */
function initHoverZoom() {
    const container = document.querySelector('.main-image-wrapper');
    const img = document.querySelector('#main-display-img');

    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        
        // Calculate mouse position in percentage
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;

        // Apply zoom and move the origin to mouse coordinates
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2)";
    });

    container.addEventListener('mouseleave', () => {
        // Reset image to normal state
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
    });
}

function initAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        button.addEventListener('click', () => {
            // Check if the clicked item is already open
            const isAlreadyOpen = item.classList.contains('active');

            // 1. Close ALL questions first
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // 2. If the one we clicked wasn't open, open it now
            if (!isAlreadyOpen) {
                item.classList.add('active');
                // Dynamically set height so it slides open smoothly
                answer.style.maxHeight = answer.scrollHeight + "px"; 
            }
        });
    });
}

// Ensure this runs when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // ... your other init functions (initStickyHeader, initCarousel, etc) ...
    initAccordion(); 
});
/* === APPLICATIONS SLIDER LOGIC === */
function initHorizontalSlider() {
    const track = document.getElementById('app-track');
    const prevBtn = document.getElementById('app-prev');
    const nextBtn = document.getElementById('app-next');

    // Stop if the section doesn't exist on the page
    if (!track || !prevBtn || !nextBtn) return;

    // Click Right
    nextBtn.addEventListener('click', () => {
        const cardWidth = track.querySelector('.app-card').offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
        
        track.scrollBy({
            left: cardWidth + gap, // Move right by exactly one card width
            behavior: 'smooth'
        });
    });

    // Click Left
    prevBtn.addEventListener('click', () => {
        const cardWidth = track.querySelector('.app-card').offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).gap) || 0;
        
        track.scrollBy({
            left: -(cardWidth + gap), // Move left by exactly one card width
            behavior: 'smooth'
        });
    });
}

// Make sure you are calling this when the page loads!
document.addEventListener('DOMContentLoaded', () => {
    initHorizontalSlider(); 
});

/* === MANUFACTURING PROCESS LOGIC === */
document.addEventListener('DOMContentLoaded', () => {
    
    const tabsContainer = document.getElementById('process-tabs');
    // If the HTML isn't on the page, stop the script so it doesn't cause errors
    if (!tabsContainer) return;

    // 1. All the data for the tabs
    const processData = [
        {
            tab: "Raw Material",
            title: "High-Grade Raw Material Selection",
            desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
            bullets: ["PE100 grade material", "Optimal molecular weight distribution"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg" 
        },
        {
            tab: "Extrusion",
            title: "Precision Extrusion Technology",
            desc: "Our high-efficiency extruders melt and form the HDPE material with absolute thermal consistency.",
            bullets: ["Consistent thermal melting", "High-efficiency output"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        },
        {
            tab: "Cooling",
            title: "Controlled Cooling Baths",
            desc: "Pipes pass through extensive water cooling baths to prevent internal stress and maintain stability.",
            bullets: ["Multi-stage cooling", "Stress-free stabilization"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        },
        {
            tab: "Sizing",
            title: "Vacuum Calibration",
            desc: "Pipes are drawn through vacuum calibrators to permanently set their exact outer diameter.",
            bullets: ["Perfect circularity", "Exact OD calibration"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        },
        {
            tab: "Quality Control",
            title: "Rigorous Quality Testing",
            desc: "Every batch undergoes hydrostatic pressure testing and ultrasonic thickness monitoring.",
            bullets: ["Ultrasonic monitoring", "Hydrostatic testing"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        },
        {
            tab: "Marking",
            title: "Automated Laser Marking",
            desc: "Clear, permanent laser marking applies brand details and specifications along the pipe.",
            bullets: ["Permanent laser etching", "Traceability codes"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        },
        {
            tab: "Cutting",
            title: "Precision Length Cutting",
            desc: "Planetary saws automatically cut pipes to exact standard lengths with smooth edges.",
            bullets: ["Automated saws", "Smooth chamfered edges"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        },
        {
            tab: "Packaging",
            title: "Secure Coiling & Packaging",
            desc: "Smaller diameters are expertly coiled, while larger pipes are bundled and strapped securely.",
            bullets: ["Tension-controlled coiling", "Secure bundling"],
            img: "..//gushwork-assignment/assets/images/product-banner.jpg"
        }
    ];

    let currentIndex = 0;
    
    // 2. Grab HTML elements
    const titleEl = document.getElementById('process-title');
    const descEl = document.getElementById('process-desc');
    const bulletsEl = document.getElementById('process-bullets');
    const imgEl = document.getElementById('process-img');
    const prevBtn = document.getElementById('proc-prev');
    const nextBtn = document.getElementById('proc-next');

    const checkIcon = `<svg class="bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    // 3. Create the Tab Buttons dynamically
    processData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = `process-tab ${index === 0 ? 'active' : ''}`;
        btn.innerText = item.tab;
        btn.onclick = () => updateView(index);
        tabsContainer.appendChild(btn);
    });

    const tabButtons = document.querySelectorAll('.process-tab');

    // 4. Update Function (Changes text, image, and active tab)
    function updateView(index) {
        currentIndex = index;
        const data = processData[index];

        titleEl.innerText = data.title;
        descEl.innerText = data.desc;
        bulletsEl.innerHTML = data.bullets.map(b => `<li>${checkIcon} ${b}</li>`).join('');
        imgEl.src = data.img;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabButtons[index].classList.add('active');
        
        // Keeps the active tab visible on mobile screens
        tabButtons[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // 5. Arrow Buttons Logic
    nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= processData.length) newIndex = 0; 
        updateView(newIndex);
    });

    prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = processData.length - 1;
        updateView(newIndex);
    });

    // 6. Run the first load
    updateView(0);
});


// JavaScript to enable drag-to-scroll functionality on desktop
    const slider = document.getElementById('carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        // Force removal of smooth scroll during drag so it feels responsive
        slider.style.scrollBehavior = 'auto'; 
        slider.style.scrollSnapType = 'none';
        
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
        slider.style.scrollBehavior = 'smooth';
        slider.style.scrollSnapType = 'x mandatory';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
        slider.style.scrollBehavior = 'smooth';
        slider.style.scrollSnapType = 'x mandatory';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        slider.scrollLeft = scrollLeft - walk;
    });

   //Request a Quote popup
    // Get the elements
    const modal = document.getElementById("quoteModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");

    // When the user clicks the "Request a Quote" button, open the modal
    openBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the link from jumping to the top of the page
        modal.style.display = "flex";
    });

    // When the user clicks the "x" button, close the modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal content, close it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    //Download Full Technical Datasheet popup

    document.addEventListener('DOMContentLoaded', function() {
        const catModal = document.getElementById("catalogueModal");
        const openCatBtn = document.getElementById("openCatalogueBtn");
        const closeCatBtn = document.getElementById("closeCatalogueBtn");

        // Open modal on button click
        openCatBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevents page jump
            catModal.style.display = "flex";
        });

        // Close modal on 'X' click
        closeCatBtn.addEventListener("click", function() {
            catModal.style.display = "none";
        });

        // Close modal when clicking on the dark background overlay
        window.addEventListener("click", function(event) {
            if (event.target === catModal) {
                catModal.style.display = "none";
            }
        });
    });
