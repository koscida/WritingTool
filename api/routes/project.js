const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const router = express.Router();

// ////
// All
//
// GET
router.get("/", function (req, res) {
	// return all
});
// POST
router.post("/", function (req, res) {
	// add new
});

// ////
// ID
//
// GET
router.get("/:id", function (req, res) {
	// get id
});

// PUT/(PATCH)
router.put("/:id", function (req, res) {
	// update id
});
// DELETE
router.delete("/:id", function (req, res) {
	// delete id
});

// ////
// Forms
//
// GET - New
router.get("/new", function (req, res) {
	// return html form for new
});
// GET - ID
router.get("/:id/edit", function (req, res) {
	// return html for for editing
});

module.exports = router;
