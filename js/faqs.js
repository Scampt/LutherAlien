const asks = document.querySelectorAll('.asks .contain-ask');
asks.forEach((ask) => {
	ask.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('actived');

		const answer = ask.querySelector('.answer');
		const alturaRealRespuesta = answer.scrollHeight;
		
		if(!answer.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			answer.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			answer.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		asks.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(ask !== elemento){
				elemento.classList.remove('actived');
				elemento.querySelector('.answer').style.maxHeight = null;
			}
		});


	});
});