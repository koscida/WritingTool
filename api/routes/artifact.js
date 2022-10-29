const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const router = express.Router();

// ////
// GET ALL
router.get("/", async (req, res) => {
	const posts = await Post.find();
	res.send(posts);
});

// ////
// CREATE
router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	});
	await post.save();
	res.send(post);
});

// ////
// GET ONE
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });
		res.send(post);
	} catch {
		res.status(404);
		res.send({ error: "Post doesn't exist!" });
	}
});

// ////
// UPDATE
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });

		if (req.body.title) {
			post.title = req.body.title;
		}

		if (req.body.content) {
			post.content = req.body.content;
		}

		await post.save();
		res.send(post);
	} catch {
		res.status(404);
		res.send({ error: "Post doesn't exist!" });
	}
});

// ////
// DELETE
router.delete("/:id", async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id });
		res.status(204).send();
	} catch {
		res.status(404);
		res.send({ error: "Post doesn't exist!" });
	}
});

// ////
// Forms
//
// GET - New
router.get("/new", async (req, res) => {
	// return html form for new
});
// GET - ID
router.get("/:id/edit", async (req, res) => {
	// return html for for editing
});

module.exports = router;
