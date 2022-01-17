FROM node:12
RUN mkdir -p /usr/share/simplenode
WORKDIR /usr/share/simplenode
COPY package*.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "startmon"]
# CMD ["./node_modules/nodemon/bin/nodemon", "-L", "app.js"]
EXPOSE 5000