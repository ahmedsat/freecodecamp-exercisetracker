const User = require("../models/User");

const createUser = async (req, res) => {
  const {
    body: { username },
  } = req;
  user = new User({ username });
  await user.save();
  res.json({
    username: user.username,
    _id: user._id,
  });
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = {
  createUser,
  getUsers,
};
