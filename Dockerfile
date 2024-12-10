FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . /app/

RUN npm run build 

EXPOSE 3000

CMD ["npm", "run", "start","--", "--host", "0.0.0.0"]

## RUN COMMAND
## docker run -p 3000:3000 -v $(pwd):/app portfolio:latest
