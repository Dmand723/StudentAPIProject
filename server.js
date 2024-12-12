const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", require("./routes"));
app.use("/ttech", require("./routes"));
app.listen(PORT, () => {
  console.log(`Test server running on port: ${PORT}`);
});
