var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = "find pollen"
	Bee.call(this.color);
	Grub.call(this.food);
	Grub.call(this.eat);
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee

ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure);
}

