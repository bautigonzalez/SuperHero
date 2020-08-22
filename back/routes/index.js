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

router.get("/users/:id", (req, res, next)=>{
  User.findById(req.params.id)
   .then(user=>res.json(user))
})

router.get("/logout", function (req, res, next) {
  req.logout();
  res.sendStatus(200)
});

router.get("/check", (req, res, next) => {
  console.log(req.user)
  res.json(req.user);
});

router.post("/addfav", (req, res, next)=> {
  User.findByIdAndUpdate({_id: req.body.userId}, { $push: { favs: req.body.fav }})
  .then(user=>{
    console.log(user, req.body)
    res.json(user)})
})

module.exports = router