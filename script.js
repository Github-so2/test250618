document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        snowContainer.appendChild(snowflake);

        snowflake.addEventListener('mouseover', () => {
            snowflake.style.transform = 'scale(2)';
            snowflake.style.opacity = '0';
            setTimeout(() => snowflake.remove(), 500);
        });

        setTimeout(() => snowflake.remove(), 5000);
    }

    setInterval(createSnowflake, 100);
});
