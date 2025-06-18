document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        snowContainer.appendChild(snowflake);

        snowflake.addEventListener('mouseover', () => {
            snowflake.classList.add('explode');
            setTimeout(() => snowflake.remove(), 500);
        });

        setTimeout(() => snowflake.remove(), 5000);
    }

    setInterval(createSnowflake, 100);
});
