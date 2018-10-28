var Bee = function() {
	Grub.call(this);
	this.age = 5;
	this.color = "yellow";
	Grub.call(this.food)
	Grub.call(this.eat)
	this.job="keep on growing";
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee; 

