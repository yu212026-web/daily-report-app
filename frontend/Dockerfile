FROM node:18
WORKDIR /app
COPY src ./src
RUN npm init -y && npm install react react-dom @fullcalendar/react @fullcalendar/timegrid @fullcalendar/interaction axios
EXPOSE 3000
CMD ["npx", "webpack-dev-server", "--config", "webpack.config.js", "--host", "0.0.0.0"]