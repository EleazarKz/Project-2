// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Georgia", time: 11 },
  { text: "wrap me up in all your", time: 14 },
  { text: "I want you, in my arms", time: 17 },
  { text: "Oh, let me hold you", time: 24 },
  { text: "i'll never let you again, like I did", time: 28 },
  { text: "Oh, I used to say,", time: 34 },
  { text: "I would never fall in love again, until I found her", time: 38 },
  { text: "I said, I would never fall, unless it's you I fall into", time: 44 },
  { text: "I was lost within the darkness, but then I found her", time: 53 },
  { text: "I found you", time: 58 },
  { text: "Heaven, when I held you again", time: 68 },
  { text: "How could, we ever just be friends", time: 75 },
  { text: "I would, rather die than let you go", time: 82 },
  { text: "Juliet to your Romeo, how I heard you say", time: 87 },
  { text: "I would never fall in love again, until I found her", time: 95 },
  { text: "I said, “I would never fall, unless it's you I fall into", time: 102 },
  { text: "I was lost within the darkness, but then I found her", time: 109 },
  { text: "I found you", time: 116 },
  { text: "I would never fall in love again, until I found her", time: 137 },
  { text: "I said, I would never fall, unless it's you I fall into", time: 144 },
  { text: "I was lost within the darkness, but then I found her", time: 152 },
  { text: "I found you...", time: 158 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);