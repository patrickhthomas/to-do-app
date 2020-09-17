function onReady() {
	let id = 0;     /*new*/
	let toDos = [];
	const addToDoForm = document.getElementById('addToDoForm');

	function createNewToDo() {
		const newToDoText = document.getElementById('newToDoText');
		if (!newToDoText.value) { return; }
		toDos.push({
			title: newToDoText.value,
			complete: false,
			id: ''   /*new*/

		});
		newToDoText.value = '';

		   /*new*/

		renderTheUI();
		id++;
	}

	function renderTheUI() {
		const toDoList = document.getElementById('toDoList');

		toDoList.textContent = '';

		toDos.forEach(function(toDo){
			const newLi = document.createElement('li');
			const checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			const deleteBtn = document.createElement('button');
			deleteBtn.textContent = "Delete";

			


			newLi.textContent = toDo.title;
			



			toDoList.appendChild(newLi);
			newLi.appendChild(checkbox);
			newLi.appendChild(deleteBtn);


			deleteBtn.addEventListener('click', function(event){
				toDoList.removeChild(this.parentElement);
			})
			


			

		});
	}

	addToDoForm.addEventListener('submit', event => {
		event.preventDefault();
		createNewToDo();
	});

	renderTheUI();
}

window.onload = function() {
	onReady();
};