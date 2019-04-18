'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const menuItemSchema = mongoose.Schema({
	// author: {establishmentName: String},
	itemName: {type: String, required: true},
	price: {type: String, required: true},
	// add photo?
	description: {type: string},
	created: {type: Date, default: Date.now}
});

menuItemSchema.virtual('menuItem').get(function() {
	return `${this.itemName}`.trim();
});

menuItemSchema.methods.serialize = function() {
	return {
		id: this._id,
		itemName: this.menuItem,
		description: this.itemDescription,
		price: this.price,
		created: this.created


	};
}

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = {MenuItem};