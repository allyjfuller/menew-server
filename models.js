const uuid = require('uuid');

function StorageException(message) {
	this.message = message;
	this.name = "StorageException";
}

const MenuItem = {
	create: function(name, description, price) {
		console.log('Creating new menu item');
		const item = {
			name: name;
			id: uuid.v4(),
			description: description,
			price: price
		};
		this.items[item.id] = item;
		return item;
	},
	get: function() {
		console.log('Retrieving new menu items');
		return Object.keys(this.items).map(key => this.items[key]);
	},
	delete: function(id) {
		console.log(`Deleting new menu item \`${id}\``);
		delete this.items[id];
	},
	update: function(updatedItem) {
		console.log(`Deleting new menu item \`${updatedItem.id}\``);
		const {id} = updatedItem;
		if (!(id in this.items)) {
			throw StorageException(
				`Can't update item \`${id}\` because it doesn't exist.`)
		}
		this.items[updatedItem.id] = updatedItem;
		return updatedItem;
	}
};

function createMenuItemList() {
	const storage = Object.create(MenuItemList);
	storage.items = {};
	return storage;
}

module.exports = {
	menuItem: createMenuItemList()
}