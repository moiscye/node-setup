exports.signup = async (req, res) => {
  //all logic goes here
  res.send(req.body.username);
};
exports.signin = async (req, res) => {
  //all logic goes here
  res.send("Signing in...");
};
exports.signout = async (req, res) => {
  //all logic goes here
  res.send("Signing out...");
};
