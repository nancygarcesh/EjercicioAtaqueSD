FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./  # Copia package.json y package-lock.json
RUN npm install         # Instala las dependencias
COPY . .                # Copia el resto de los archivos al contenedor
EXPOSE 5160
CMD ["node", "vulnerable_app.js"]
