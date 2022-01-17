FROM node:10-alpine

RUN mkdir -p /usr/share/express/app
WORKDIR /usr/share/express/app
ENV NODE_ENV=local
#RUN cp -a ./node_modules .

COPY package*.json ./
RUN npm i

#RUN npm install nodemon -g
#COPY ./ ./
COPY . .

EXPOSE 4100

CMD ["npm", "run", "startmon"]