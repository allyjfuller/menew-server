const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {MenuItem} = require('./models');

// add some items so there's data to look at

MenuItem.create('Unagi Sushi', 'Fresh water eel', '$6.00');
MenuItem.create('Sake Iura Don','Raw sliced salmon and salmon roe on rice', '$20.00' );

router.get('/', (req, res) => {
	res.json(MenuItem.get());
});

// when a new menu item is posted, make sure it's
// got required fields ('name','description', 'price'). if not,
// log an error and return a 400 status code. if okay,
// add new item to MenuItem and return it with a 201.

router.post('/', jsonParser, (req, res) => {
	// ensure `name`, `description`, and `price` are in request body
	const requireFields = 'name', 'description', 'price'];
  		for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    	if (!(field in req.body)) {
    const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
    const item = MenuItem.create(req.body.name, req.body.description, req.body.price);
  	res.status(201).json(item);
});


// when DELETE request comes in with an id in path,
// try to delete that item from MenuItem.
router.delete('/:id', (req, res) => {
  ShoppingList.delete(req.params.id);
  console.log(`Deleted menu item \`${req.params.ID}\``);
  res.status(204).end();
});

// when PUT request comes in with updated item, ensure has
// required fields. also ensure that item id in url path, and
// item id in updated item object match. if problems with any
// of that, log error and send back status code 400. otherwise
// call `MenuItem.update` with updated item.
router.put('/:id', jsonParser, (req, res) => {
  const requiredFields = ['name', 'description', 'price', 'id'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = (
      `Request path id (${req.params.id}) and request body id `
      `(${req.body.id}) must match`);
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating menu item \`${req.params.id}\``);
  const updatedItem = ShoppingList.update({
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  res.status(204).end();
})

module.exports = router;