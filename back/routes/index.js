const express = require('express');
const router = express.Router();
const { User } = require('../models')
const passport = require('passport')

router.post("/login", passport.authenticate("local"), (req, res, next)=>{
    res.json(req.user)
})

router.post("/register", (req, res, next)=>{
  User.create(req.body)
    .then((user)=>res.json(user))
})

router.get("/users", (req, res, next)=>{
  User.find()
   .then(users=>res.json(users))
})

router.get("/logout", function (req, res, next) {
  req.logout();
  res.sendStatus(200)
});

module.exports = router