var Tree = function(type, name){
	this.type = type;
	this.name = name;
	this.age = 0;
	this.count = 0;
	this.isAlive = true;
}

Tree.prototype.grow = function(){
	this.age++;
}