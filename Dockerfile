# Etapa de construcción
FROM node:14-alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build --configuration=production

# Etapa de producción
FROM nginx:alpine

# Copia los archivos de la aplicación desde la etapa de construcción
COPY --from=build /app/dist/tu-app-angular /usr/share/nginx/html

# Expone el puerto en el que se ejecutará Nginx
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

