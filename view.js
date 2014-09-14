var TreeView = function(){
	this.age_counter = document.getElementsByClassName("age_counter")[0];
}
TreeView.prototype = {
	changeCounter: function(age){
		this.age_counter.innerHTML = age;
	}

};