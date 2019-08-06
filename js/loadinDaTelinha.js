
	var conteudoSeletor = $('.conteudoSeletor')

	window.onload = function(){
		var expiner = document.querySelector('.spinner-border')

		console.log(conteudoSeletor)
		setTimeout(() => {
			$('.spinner-border').css('display', 'none')
			  conteudoSeletor.removeAttr('style')
			  var body = $('body').css('transition', '1s')
		}, 2000)
		document.querySelector("#myCard").classList.toggle("flip")
	}

