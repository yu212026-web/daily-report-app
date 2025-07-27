FROM node:18
WORKDIR /app
COPY src ./src
RUN npm init -y && npm install express cors body-parser
EXPOSE 8000
CMD ["node", "src/app.js"]