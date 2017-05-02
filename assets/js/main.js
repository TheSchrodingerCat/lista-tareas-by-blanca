var tareas = arr.slice(0,10);

var miUl = document.getElementById("tareas");

var liAux, textAux;
tareas.forEach(function(element){
	liAux = document.createElement("li"); //crea el elemento li
	textAux = document.createTextNode(element.title); //crea el texto de la etiqueta li
	liAux.appendChild(textAux); //deja el texto dentro del li, pero no del ul
	miUl.appendChild(liAux); //deja el li dentro del ul
});