const express = require('express')
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/posts")

app.get('/', function (req, res){
    res.send("HI")
})

app.get('/create', async function (req, res){
    let user = await userModel.create({
        username: "Harsh",
        age: 25,
        email: "harsh@gmail.com"
    })
    res.send(user)
})

app.get('/post/create', async function (req, res){
    let post = await postModel.create({
        postData: "Hello saare log kaise ho",
        user: "6720df797d3a966e91cd3252"
    })
    let user = await userModel.findOne({_id:"6720df797d3a966e91cd3252"})
    user.posts.push(post._id)
    await user.save()

    res.send({post, user})
})

app.listen(3000)