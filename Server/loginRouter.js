const Users = require("./Models/Users");
const bcrypt = require("bcrypt");

const router = require("express").Router;

const loginRouter = router();

loginRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  await Users.findOne({ Email: email }).then((result) => {
    if (result) {
      bcrypt
        .compare(password, result.Password)
        .then((result) => {
          if (result) {
            res.json({ login: result });
          } else {
            res.status(400).json({ password: { msg: "Incorrect Password" } });
          }
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else {
      res.status(404).json({ email: { msg: "No user found with this email" } });
    }
  });
});

loginRouter.post("/signup", async (req, res, next) => {
  const { name, password, email } = req.body;
  console.log(password);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new Users({
      Name: name,
      Email: email,
      Password: hashedPassword,
    });
    user
      .save()
      .then((result) => res.json(result))
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: err });
      });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = loginRouter;
