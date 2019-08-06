new Vue({
			el:'#app',
			data:{
				// Simulando Banco de dados
				simulando:['Marcos Samuel', 'Lucas Lima', 'Ciro Igor', 'Nicholas', 'Andre Henrique']
			},
			methods:{

				aleatorio:function(){
					var al = Math.floor(Math.random() * this.simulando.length)

					return this.simulando[al]
					console.log(this.simulando[al]) // Minha 'Depuração'

				}
			}
		})