const awsomeFunction = (req, res) => {
  res.send("Hello World!");
};

const ttechFunction = (req, res) => {
  res.send("Tooele Tech Is Awesome");
};
const dawsonFunction = (req, res) => {
  res.send("Dawson is sooo cool :)");
};
module.exports = { awsomeFunction, ttechFunction, dawsonFunction };
