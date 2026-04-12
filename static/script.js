document.addEventListener('DOMContentLoaded', () => {
    // 1. Remove Loader
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 1500);
    });

    // 2. Scroll Progress
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progress + '%';
    });

    // 3. Background Music
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            bgMusic.play().catch(e => console.log("Autoplay blocked: ", e));
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });



    // 5. AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 6. Simple Floral Particle Effect
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 7 + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        
        // Randomly choose a petal color or shape
        const colors = ['#f8c291', '#fad390', '#f6b93b', '#fffdd0'];
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }

    // Add styles for petals dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .petal {
            position: fixed;
            top: -10px;
            width: 15px;
            height: 15px;
            background: #fad390;
            border-radius: 150% 0 150% 0;
            z-index: 500;
            pointer-events: none;
            animation: fall linear forwards;
        }
        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(110vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    setInterval(createPetal, 500);

    // 7. Parallax Effect Refresh
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('hero');
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
});
