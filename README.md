# Checkout Pro

Checkout Pro es un proyecto de prueba que demuestra cómo integrar la pasarela de pago de Mercado Pago en una aplicación web utilizando React en el frontend, Express en el backend y Tailwind CSS para los estilos.

## Descripción

Este proyecto ha sido creado como parte de un ejercicio de aprendizaje para familiarizarse con el proceso de integración de Mercado Pago en una aplicación web. Utiliza una implementación simple de un carrito de compras donde se puede comprar un artículo de prueba utilizando la pasarela de pago de Mercado Pago.

![vista previa](https://private-user-images.githubusercontent.com/130471266/330846227-f509c289-14f9-433b-8d09-ea66d853f91e.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU3ODM4MDcsIm5iZiI6MTcxNTc4MzUwNywicGF0aCI6Ii8xMzA0NzEyNjYvMzMwODQ2MjI3LWY1MDljMjg5LTE0ZjktNDMzYi04ZDA5LWVhNjZkODUzZjkxZS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxNVQxNDMxNDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YzliYzA3ZWM3MWJiMTUzNjQzMzJmNmQyOWQzNjJlYTYxYWRlODcyMjk3YmY0ODQ2MDBhMjEwMWFkZGVlOWYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.EEyzIs08WhaPMtv1PNQgd53QHa3gjF7DexzeHeawH-k).
## Funcionalidades

- Visualización de un artículo de prueba (Nike Air Force One) en una interfaz de usuario atractiva.
- Proceso de compra simulado con la opción de pagar mediante Mercado Pago.
- Generación dinámica de preferencias de pago en el backend utilizando la API de Mercado Pago.

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- Express: Framework de Node.js para construir aplicaciones web y APIs.
- Tailwind CSS: Framework de diseño CSS utilitario para crear rápidamente diseños personalizados.
- Mercado Pago: Pasarela de pago utilizada para procesar pagos en línea de forma segura y confiable.

## Instrucciones de Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del frontend y backend ejecutando `npm install` en las carpetas `client` y `server`.
3. Configura tus variables de entorno:
   - Crea archivos `.env` en las carpetas `client` y `server`.
   - Define tus claves y tokens de Mercado Pago en los archivos `.env` correspondientes.
4. Inicia el servidor backend ejecutando `node index.js` en la carpeta `server`.
5. Inicia la aplicación frontend ejecutando `npm run dev` en la carpeta `client`.

## Notas Adicionales

Este proyecto es solo con fines educativos y de prueba. No contiene información ni funcionalidades de producción reales.
