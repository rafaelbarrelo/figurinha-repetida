$(function(){
	function carregaLista() {
		criaDiv('00', getStyle('00'));

		for(var i = 0; i <= total; i++){
			criaDiv(i, getStyle(i));
		}
	};

	function getStyle(item) {
		var cor = 'tem';
		if (repetidas.indexOf(item) > -1){
			cor = 'repetida';
		}
		else if (faltam.indexOf(item) > -1){
			cor = 'falta';
		}
		return cor;
	}

	function criaDiv(item, tipo) {
		//console.log('criadiv ' + item	 + tipo);
		var element = "<div class='figurinha " + tipo + "'><img src='images/escudo.png'><h1>" + item + "</h1></div>";
		$(element).appendTo($(".itens"));
	}

	carregaLista();


	$('#btn-todas').click(function(){
		$('.figurinha').show('fast');
	});

	$('#btn-repetidas').click(function(){
		$('.figurinha').hide('fast');
		$('.repetida').show('slow');
	});

	$('#btn-faltando').click(function(){
		$('.figurinha').hide('fast');
		$('.falta').show('slow');
	});
});
