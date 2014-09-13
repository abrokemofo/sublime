var orangeTree = { 

	age: 0,
	name: "myTree",
	count: 0,
	isAlive: true, 
	hasFruit: false,
	grow: function(){
		this.age++;
		document.getElementsByClassName("age_counter")[0].innerHTML = this.age;
		if (this.age>5) {
			this.count++;
			document.getElementsByClassName("message")[0].innerHTML = this.count;
		}
	}

} 
