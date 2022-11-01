const express = require("express");
// ////////
// READ
// ////////

// ////
// GET ALL
const getAll = (req, res, Model) => {
	// try get all
	try {
		Model.find((err, obj) => {
			if (err) {
				console.log(err);
				res.status(400).send({ error: err });
			} else res.status(200).send({ data: obj });
		});
	} catch {
		res.status(404).send({ error: "Does not exist!" });
	}
};

// ////
// GET ONE
const getOne = (req, res, Model) => {
	// get the incoming id
	const id = req.params.id;

	// try get by id
	try {
		Model.findById(id, (err, obj) => {
			if (err) {
				console.log(err);
				res.status(400).send({ error: err });
			} else res.status(200).send({ data: obj });
		});
	} catch {
		res.status(404).send({ error: "Does not exist!" });
	}
};

// ////////
// WRITE
// ////////

// ////
// CREATE
const create = (req, res, newModel) => {
	// save
	newModel.save((err, obj) => {
		if (err) res.status(400).send({ error: err });
		else res.status(201).send({ data: obj });
	});
};

// ////
// UPDATE
const update = (req, res, Model, newValues) => {
	// find one to update
	Model.findById(req.params.id, (err, obj) => {
		if (err) {
			//console.log(err);
			res.status(400).send({ error: err });
		} else {
			// replace fields
			// assumes all the fields are in body
			obj = newValues;

			// save
			obj.save((saveErr, updatedObj) => {
				if (saveErr) {
					//console.log(saveErr);
					res.status(400).send({ error: saveErr });
				} else res.status(200).send({ data: updatedObj });
			});
		}
	});
};
const patch = (req, res, Model, newValues) => {
	// find one to update
	Model.findById(req.params.id, (err, obj) => {
		if (err) {
			console.log(err);
			res.status(400).send({ error: err });
		} else {
			// Update user with the available fields
			obj.set(newValues);

			// save
			obj.save((saveErr, updatedObj) => {
				if (saveErr) {
					console.log(saveErr);
					res.status(400).send({ error: saveErr });
				} else res.status(200).send({ data: updatedObj });
			});
		}
	});
};

// ////
// DELETE
const deleteRoute = (req, res, Model) => {
	// find one to delete
	Model.findById(req.params.id, (err, obj) => {
		if (err) {
			console.log(err);
			res.status(400).send({ error: err });
		} else {
			// remove
			project.remove((removeErr, removedObj) => {
				if (removeErr) {
					console.log(removeErr);
					res.status(400).send({ error: removeErr });
				} else res.status(200).send({ data: removedObj });
			});
		}
	});
};

// // ////
// // Forms
// //
// // GET - New
// router.get("/new", async (req, res) => {
// 	// return html form for new
// });
// // GET - ID
// router.get("/:id/edit", async (req, res) => {
// 	// return html for for editing
// });

const getRoutes = (uri, Model) => {
	const router = express.Router();

	// GET ALL
	router.get(`/`, async (req, res) => getAll(req, res, Model));

	// GET ONE
	router.get(`/:id`, async (req, res) => getOne(req, res, Model));

	// CREATE
	router.post(`/`, async (req, res) => {
		// create new
		const newObj = new Model({
			...req.body,
		});

		// create
		create(req, res, newObj);
	});

	// UPDATE
	router.put(`/:id`, async (req, res) => {
		const values = { ...req.body };

		update(req, res, Model, values);
	});
	router.patch(`/:id`, async (req, res) => {
		const values = { ...req.body };

		patch(req, res, Model, values);
	});

	// DELETE
	router.delete(`/:id`, async (req, res) => deleteRoute(req, res, Model));

	return router;
};

module.exports = {
	getRoutes,
};
