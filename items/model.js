const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
	name: { type: 'String' },
	price: { type: 'String' },
	description: { type: 'String' },
	userEmail: { type: 'String'}

})

const Item = mongoose.model('Item', ItemSchema);

module.exports = { Item, ItemSchema }