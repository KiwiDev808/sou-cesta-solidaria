const bcrypt = require("bcrypt");

const { User } = require("../models");

module.exports = {
  signUp(req, res, next) {
    res.render("sign-up");
  },

  async register(req, res, next) {
    // Encrypting Password
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    let user = { ...req.body };

    // Adding to DataBase
    await User.create(user)

    res.render("sign-up", { added: true });
  },
  login(req, res, next) {
    res.render("login");
  },

  async authenticating(req, res, next) {
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render("login", { notFound: true });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.render("login", { notFound: true });
    }

    // Hidding Password
    user.password = undefined;

    // Creating Session
    req.session.user = user;

    res.redirect("/");
  },

  logout(req, res, next) {
    req.session.destroy();
    res.redirect("/");
  },
};
