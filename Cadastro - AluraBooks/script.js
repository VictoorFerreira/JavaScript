async function buscaEndereco(Cep){
	try{
		var consultCEP = await fetch('https://viacep.com.br/ws/${cep}/json/')
		var consultCEPConvertida = await consultCEP.json()
		if(consultCEPConvertida.erro){
			throw Error('CEP não existente!');
		}
		console.log(consultCEPConvertida);
		return consultCEPConvertida;
	}catch (erro){
		console.log(erro)
	}
}
