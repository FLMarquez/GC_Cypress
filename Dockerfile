# # Usa la imagen base de Node con navegadores preinstalados
# FROM cypress/base:16.17.1

# # Establece el directorio de trabajo en el contenedor
# WORKDIR /app

# # Copia los archivos del proyecto al contenedor
# COPY . .

# # Instala las dependencias del proyecto
# RUN npm install

# # Descarga el binario de Cypress
# RUN npx cypress install

# # Comando por defecto para ejecutar las pruebas
# CMD ["npx", "cypress", "run"]

