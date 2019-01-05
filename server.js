express = require("express");
const app = express();
const port = "3040";

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`recommends listening on port ${port}`);
});
