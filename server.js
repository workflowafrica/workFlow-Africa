require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/config/constants");
const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
