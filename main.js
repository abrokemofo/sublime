window.onLoad = function(){
	var tView = new TreeView();
	var tModel = new Tree("pot", "babyta");
	var tController = new TreeController(tView, tModel);
	tController.initialize();
}();