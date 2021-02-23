const name = document.querySelectorAll(".name");

name.forEach(name => name.addEventListener("click", function(e){
	
	const opis = document.querySelector(`.opis[data-name="${e.path[0].dataset.name}"]`);
	const opisy = document.querySelectorAll(".opis");

	;
	let tablica = Array.from(opisy);

	for (let i = 0; i <tablica.length; i++) {
		if(tablica[i].classList.contains("active")){
			console.log ("coś zawiera active!!! - usuwam")};
			tablica[i].classList.remove("active");
	};
	
	opis.classList.add("active");	

}));