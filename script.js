document.addEventListener('DOMContentLoaded', () => {
    let tiempo = 0; // tiempo en segundos
    let cronometro; // variable para el setInterval
    let enFuncionamiento = false; // estado del cronómetro

    const tiempoDisplay = document.getElementById('tiempo');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    function actualizarDisplay() {
        const horas = Math.floor(tiempo / 3600);
        const minutos = Math.floor((tiempo % 3600) / 60);
        const segundos = tiempo % 60;
        tiempoDisplay.textContent = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }

    startButton.addEventListener('click', () => {
        if (!enFuncionamiento) {
            enFuncionamiento = true;
            cronometro = setInterval(() => {
                tiempo++;
                actualizarDisplay();
            }, 1000);
        }
    });

    stopButton.addEventListener('click', () => {
        clearInterval(cronometro);
        enFuncionamiento = false;
    });

    resetButton.addEventListener('click', () => {
        clearInterval(cronometro);
        enFuncionamiento = false;
        tiempo = 0;
        actualizarDisplay();
    });
});
