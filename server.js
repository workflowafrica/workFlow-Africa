const express = require("express");
const { PORT } = require("./src/config/constants");
const db = require("./src/database/db");

const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
