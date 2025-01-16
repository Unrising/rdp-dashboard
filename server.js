const express = require("express");
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Welcome to the RDP Dashboard');
});

const PORT = 8080;

app.listen(PORT,() => console.log(`Server is listenning to port : ${PORT}`));

