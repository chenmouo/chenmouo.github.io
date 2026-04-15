// 雪花飘落
function createSnow() {
    const snow = document.createElement('div');
    snow.style.position = 'fixed';
    snow.style.top = '-10px';
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.opacity = Math.random() * 0.8 + 0.2;
    snow.style.fontSize = Math.random() * 10 + 10 + 'px';
    snow.innerHTML = '❄';
    snow.style.color = 'white';
    snow.style.zIndex = '-1';
    snow.style.pointerEvents = 'none';

    const duration = Math.random() * 3 + 2;
    snow.style.animation = `fall ${duration}s linear`;

    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), duration * 1000);
}

setInterval(createSnow, 500);

// 粒子效果
function createParticles() {
    const container = document.querySelector('.particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 5 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.opacity = Math.random() * 0.5;

        container.appendChild(particle);
    }
}

createParticles();

// 鼠标轨迹效果
let lastTrailTime = 0;
document.addEventListener('mousemove', function (e) {
    const now = Date.now();
    if (now - lastTrailTime < 50) return;
    lastTrailTime = now;

    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = e.pageX - 5 + 'px';
    trail.style.top = e.pageY - 5 + 'px';
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 500);
});

// 烟花效果
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';

    const particles = 50;
    const colors = [
        '#ff0000', '#ffd700', '#ff69b4',
        '#ff4500', '#ff8c00'
    ];

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';

        const angle = (i / particles) * 360 + Math.random() * 20;
        const distance = Math.random() * 100 + 50;
        const rad = angle * Math.PI / 180;

        const tx = Math.cos(rad) * distance;
        const ty = Math.sin(rad) * distance;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.color = color;

        firework.appendChild(particle);
    }

    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
}

// 自动烟花
function autoFireworks() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);
    createFirework(x, y);

    setTimeout(autoFireworks, Math.random() * 1000 + 500);
}

setTimeout(autoFireworks, 1000);

// 漂浮表情符号
const emojis = ['🎉', '✨', '🌟', '💫', '⭐', '🎊', '🎈', '🎆', '🎇', '🌸', '💝', '💖', '🏮', '🐉', '🍀'];

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.fontSize = Math.random() * 20 + 25 + 'px';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
}

setInterval(createFloatingEmoji, 500);

// 花瓣效果
function createPetal() {
    const petals = ['🌸', '🌺', '🌹', '💮', '🏵️'];
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];

    const startX = Math.random() * window.innerWidth;
    const drift = (Math.random() - 0.5) * 200;
    petal.style.setProperty('--startX', startX + 'px');
    petal.style.setProperty('--endX', (startX + drift) + 'px');
    petal.style.left = startX + 'px';
    petal.style.fontSize = Math.random() * 15 + 15 + 'px';

    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 500);

// 蛇效果
function createSnake() {
    const snake = document.createElement('div');
    snake.className = 'snake';
    document.body.appendChild(snake);

    const segments = [];
    const segmentCount = 20;
    const colors = [
        '#ff3333', '#ff6633', '#ff9933', '#ffcc33',
        '#ffff33', '#99ff33', '#33ff33', '#33ff99',
        '#33ffff', '#3399ff', '#3333ff', '#9933ff'
    ];

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    for (let i = 0; i < segmentCount; i++) {
        const segment = document.createElement('div');
        segment.className = 'snake-segment';
        segment.style.setProperty('--color', colors[i % colors.length]);
        snake.appendChild(segment);

        segments.push({
            element: segment,
            x: startX,
            y: startY
        });
    }

    let time = 0;

    function updateSnake() {
        time += 0.003;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const radius = Math.min(window.innerWidth, window.innerHeight) * 0.2;
        const t1 = time * 0.7;
        const t2 = time * 2;
        const t3 = time * 0.3;

        const x1 = Math.sin(t1) * radius * 0.8;
        const y1 = Math.cos(t1) * radius * 0.8;

        const x2 = Math.sin(t2) * radius * 0.3;
        const y2 = Math.cos(t2 * 1.5) * radius * 0.3;

        const x3 = Math.sin(t3) * radius * 0.2;
        const y3 = Math.cos(t3 * 2) * radius * 0.2;

        const targetX = centerX + x1 + x2 + x3;
        const targetY = centerY + y1 + y2 + y3;

        segments.forEach((segment, index) => {
            if (index === 0) {
                const dx = targetX - segment.x;
                const dy = targetY - segment.y;
                segment.x += dx * 0.08;
                segment.y += dy * 0.08;
            } else {
                const prevSegment = segments[index - 1];
                const dx = prevSegment.x - segment.x;
                const dy = prevSegment.y - segment.y;
                const wiggle = Math.sin(time * 5 + index * 0.5) * 0.3;
                const speed = 0.15 + Math.sin(time * 2 + index * 0.2) * 0.05;
                segment.x += dx * speed;
                segment.y += dy * speed;
            }

            const scale = 1 - index * 0.02;
            const breathe = 1 + Math.sin(time * 3 + index * 0.2) * 0.05;
            segment.element.style.left = `${segment.x}px`;
            segment.element.style.top = `${segment.y}px`;
            segment.element.style.transform = `translate(-50%, -50%) scale(${scale * breathe})`;
            segment.element.style.opacity = 1 - (index / segmentCount) * 0.3;
        });

        requestAnimationFrame(updateSnake);
    }

    updateSnake();
}

createSnake();

// 星空效果
function createStarrySky() {
    const sky = document.createElement('div');
    sky.className = 'starry-sky';
    document.body.appendChild(sky);

    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        const hue = Math.random() * 60 - 30 + 60;
        const saturation = Math.random() * 30 + 70;
        const lightness = Math.random() * 30 + 70;
        star.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        star.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, ${saturation}%, ${lightness}%)`;

        star.style.setProperty('--duration', Math.random() * 4 + 2 + 's');
        star.style.setProperty('--brightness', Math.random() * 0.7 + 0.3);
        star.style.animationDelay = Math.random() * 4 + 's';

        sky.appendChild(star);
    }

    // 流星
    setInterval(() => {
        if (Math.random() > 0.3) {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';

            const angle = Math.random() * 20 - 45;
            const distance = Math.random() * 1000 + 800;
            const duration = Math.random() * 0.6 + 0.4;
            const length = Math.random() * 300 + 200;

            const startX = Math.random() * (window.innerWidth + 500) - 200;
            const startY = -50;

            shootingStar.style.left = startX + 'px';
            shootingStar.style.top = startY + 'px';
            shootingStar.style.setProperty('--angle', angle + 'deg');
            shootingStar.style.setProperty('--distance', distance + 'px');
            shootingStar.style.setProperty('--duration', duration + 's');
            shootingStar.style.setProperty('--length', length + 'px');

            document.body.appendChild(shootingStar);
            setTimeout(() => shootingStar.remove(), duration * 1000);
        }
    }, 500);
}

createStarrySky();

// 背景烟花效果
function createBackgroundFireworks() {
    setTimeout(createBackgroundFireworks, Math.random() * 1000 + 800);

    if (Math.random() > 0.7) return;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.7);
    createBackgroundBurst(x, y);
}

function createBackgroundBurst(x, y) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.zIndex = '-1';

    const colors = [
        '#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1',
        '#96f7d2', '#f7d794', '#f8a5c2', '#778beb'
    ];

    const particles = 20;
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';

        const shapes = ['✦', '✬', '⭐', '✶', '●'];
        particle.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
        particle.style.fontSize = Math.random() * 8 + 6 + 'px';

        const angle = (i / particles) * Math.PI * 2;
        const distance = Math.random() * 60 + 30;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.opacity = '0.6';

        firework.appendChild(particle);
    }

    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1500);
}

createBackgroundFireworks();
