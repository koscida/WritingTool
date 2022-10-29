const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const { Project } = require("../models/project.model.js");

const router = express.Router();

// ////
// All
//
// GET
router.get("/", async (req, res) => {
	// Return all
	// find all
	const projects = Project.find((err, found) => {
		if (err) console.log(err);
		else return found;
	});
	// return json
	res.send(projects);
});
// POST
router.post("/", async (req, res) => {
	// // Ad new
	// // create new post
	// const project = new Project({
	// 	name: req.body.name,
	// });
	// // save
	// await project.save();
	// // return json
	// res.send(project);
});

// ////
// ID
//
// GET
router.get("/:id", async (req, res) => {
	// // get id
	// // get the incoming id
	// const id = req.params.id;
	// try {
	// 	const project = await Project.findById(id, (err, found) => {
	// 		if (err) console.log(err);
	// 		else return found;
	// 	});
	// 	res.send(project);
	// } catch {
	// 	res.status(404);
	// 	res.send({ error: "Post doesn't exist!" });
	// }
});

// PUT/(PATCH)
router.put("/:id", async (req, res) => {
	// update id
});
// DELETE
router.delete("/:id", async (req, res) => {
	// delete id
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
