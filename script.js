// ==========================================================================
// Elige tu destino - Lógica del juego
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const btnRed = document.getElementById('btn-red');
  const btnBlue = document.getElementById('btn-blue');
  const btnRestart = document.getElementById('btn-restart');
  const choiceContainer = document.getElementById('choice-container');
  const resultContainer = document.getElementById('result-container');
  const resultIcon = document.getElementById('result-icon');
  const resultMessage = document.getElementById('result-message');
  const resultDetail = document.getElementById('result-detail');
  const scoreWinsCount = document.getElementById('score-wins-count');
  const scoreLossesCount = document.getElementById('score-losses-count');

  // Estado del juego
  let wins = 0;
  let losses = 0;

  /**
   * Ejecuta el sorteo aleatorio al pulsar un botón
   * @param {string} colorName Nombre del botón pulsado ('rojo' o 'azul')
   */
  function handleChoice(colorName) {
    // Generar resultado aleatorio (50% probabilidad)
    const isWinner = Math.random() < 0.5;

    // Ocultar botones de elección y preparar resultado
    choiceContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden', 'win', 'loss');

    if (isWinner) {
      wins++;
      resultContainer.classList.add('win');
      resultIcon.textContent = '🎉';
      resultMessage.textContent = 'Has ganado';
      resultDetail.textContent = `¡Excelente elección! El botón ${colorName} te ha dado la victoria.`;
      scoreWinsCount.textContent = wins;
    } else {
      losses++;
      resultContainer.classList.add('loss');
      resultIcon.textContent = '😢';
      resultMessage.textContent = 'Has perdido';
      resultDetail.textContent = `Mala suerte esta vez con el botón ${colorName}. ¡Prueba de nuevo!`;
      scoreLossesCount.textContent = losses;
    }

    // Foco en el botón de reinicio para accesibilidad por teclado
    btnRestart.focus();
  }

  /**
   * Restablece la interfaz para jugar una nueva ronda
   */
  function resetGame() {
    resultContainer.classList.add('hidden');
    choiceContainer.classList.remove('hidden');

    // Devolver el foco al primer botón de elección
    btnRed.focus();
  }

  // Event Listeners
  btnRed.addEventListener('click', () => handleChoice('rojo'));
  btnBlue.addEventListener('click', () => handleChoice('azul'));
  btnRestart.addEventListener('click', resetGame);
});
