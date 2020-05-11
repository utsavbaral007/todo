const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

//get all
router.get('/posts', async (req, res) => {
	try {
		const posts = await Post.find()
		res.send(posts)
	} catch (err) {
		res.send({ message: err })
	}
})

//post
router.post('/newpost', async (req, res) => {
	// console.log(req.body)
	const post = new Post({
		title: req.body.title,
	})
	try {
		const savedPost = await post.save()
		res.send(savedPost)
	} catch (err) {
		res.send({ message: err })
	}
})
//get by specific
router.get('/:postId', async (req, res) => {
	try {
		const post = await Post.findById(req.params.postId)
		res.send(post)
	} catch (err) {
		res.send({ messsage: err })
	}
})
//delete
router.delete('/delete/:postId', async (req, res) => {
	try {
		const removedPost = await Post.deleteOne({ _id: req.params.postId })
		res.send(removedPost)
	} catch (err) {
		res.send({ message: err })
	}
})
//update posts
router.patch('/edit/:postId', async (req, res) => {
	try {
		const updatePost = await Post.updateOne(
			{ _id: req.params.postId },
			{ $set: { title: req.body.title } }
		)
		res.send(updatePost)
	} catch (err) {
		res.send({ message: err })
	}
})
module.exports = router
