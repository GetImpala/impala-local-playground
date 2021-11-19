FROM node:16
WORKDIR /impala-playground
COPY . .
RUN npm install
CMD ["npm", "start"]