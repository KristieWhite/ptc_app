/*function addNewItem(list, itemtext) {
	var listItem = document.createElement("li");
	listItem.innerHTML = itemtext;

	var list = document.getElementById("todoList");
	list.appendChild(listItem);
}

var inItemText = document.getElementById("inItemText")
inItemText.focus();

inItemText.onkeyup = function (e) {
	
	if (e.which == 13)
		var itemtext = inItemText.value;
	if (!itemtext || itemtext == "" || itemtext == " ") {
		return false;
	}

	addNewItem(document.getElementById("todoList"), itemtext);
	
	inItemText.focus();
	inItemText.select();
};*/