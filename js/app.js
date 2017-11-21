var sections = document.getElementById("sections");
var nuevaLista = document.getElementById("nuevaLista");
var saveLista = document.getElementById("save-lista");

window.addEventListener("load",function(event){

/*--evento para que me esconda el submit nuevaLista--------*/
	nuevaLista.addEventListener("click", function(){
		nuevaLista.style.display = "none";
/*-------------creando formulario-------------------------*/
		var formList = document.createElement("form");
/*----------------creando inputtext-----------------------*/
		var inputText = document.createElement("input");
		//atributos del inputtext
		inputText.type = "text";
		inputText.placeholder = "anadir lista...";
		inputText.id = "input-text";
		formList.appendChild(inputText);

		var conteinerSave = document.createElement("div");
		conteinerSave.id = "boton-guardar"; /*observar*/



/*----------------creando buton guardar---------------------*/
		var inputSubmit = document.createElement("input");
		inputSubmit.type = "submit";
		inputSubmit.value = "Guardar";	
		inputSubmit.id =  "save-lista";
		conteinerSave.appendChild(inputSubmit);
		var iconX = document.createElement("div");
		conteinerSave.appendChild(iconX);

		formList.appendChild(conteinerSave);
		console.log(formList); /*llamando al form*/
		sections.appendChild(formList);
	});

	inputSubmit.addEventListener("click", function(){
		
		
		
	});



});
	
