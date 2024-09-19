// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Georgia", time: 8 },
  { text: "wrap me up in all your", time: 11 },
  { text: "I want you, in my arms", time: 15 },
  { text: "Oh, let me hold you", time: 21 },
  { text: "i'll never let you again, like I did", time: 27 },
  { text: "Oh, I used to say,", time: 33 },
  { text: "I would never fall in love again, until I found her", time: 37 },
  { text: "I said, I would never fall, unless it's you I fall into", time: 43 },
  { text: "I was lost within the darkness, but then I found her", time: 52 },
  { text: "I found you", time: 57 },
  { text: "Heaven, when I held you again", time: 67 },
  { text: "How could, we ever just be friends", time: 74 },
  { text: "I would, rather die than let you go", time: 81 },
  { text: "Juliet to your Romeo, how I heard you say", time: 86 },
  { text: "I would never fall in love again, until I found her", time: 94 },
  { text: "I said, “I would never fall, unless it's you I fall into", time: 101 },
  { text: "I was lost within the darkness, but then I found her", time: 108 },
  { text: "I found you", time: 115 },
  { text: "I would never fall in love again, until I found her", time: 136 },
  { text: "I said, I would never fall, unless it's you I fall into", time: 143 },
  { text: "I was lost within the darkness, but then I found her", time: 151 },
  { text: "I found you...", time: 157 },
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
