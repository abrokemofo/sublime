var TreeController = function(view, model){
	this.view = view;
	this.model = model;
}

TreeController.prototype = {
	initialize: function(){
		this.buttonListener();
		 
	},
	buttonListener: function(){
		var button = document.getElementById("age_button");
		button.addEventListener("click", this.advanceTree.bind(this))
	}, 
	advanceTree: function(event){
		event.preventDefault();
		this.model.grow();
		var newAge = this.model.age;
		this.view.changeCounter(newAge);
	}


};



