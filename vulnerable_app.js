const express = require('express');
const app = express();

const PORT = 5000; // Puerto donde estará escuchando la aplicación vulnerable
let attackCount = 0; // Contador de ataques recibidos

// Middleware para registrar cada ataque
app.use((req, res, next) => {
  attackCount++;
  console.log(`Ataque recibido. Total hasta ahora: ${attackCount}`);
  next();
});

// Ruta principal
app.get('/', (req, res) => {
  res.send(`La aplicación ha recibido ${attackCount} ataques.`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Aplicación vulnerable escuchando en el puerto ${PORT}`);
});
