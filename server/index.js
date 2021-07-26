const express = require('express');
const server = express();
const cors = require("cors");
const movieController = require('./movieController')


server.use(cors());
server.use(express.json());
server.use('/api', movieController);




const port = process.env.PORT || 3000;
server.listen(3000, () => console.log(`Listenning on ${port}...`));
