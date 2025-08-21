require("dotenv").config();

const express = require('express');
const app = express();
const connectDB = require('./DB/DB')
const cors = require("cors");
const router = require("./routes/routes")
app.use(cors());
app.use(express.json());
connectDB();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, your Express server is running!');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
