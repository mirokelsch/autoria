function send(){

	var nome = document.getElementById("nome");
	var senha = document.getElementById("senha");


	alert(nome.value);
	alert(senha.value);

	return false;

}
function setTemplate(option){

	if(option == 1){

		document.getElementById("form-login").style.display = 'block';
		document.getElementById("form-cadastro").style.display = 'none';

	}else{

		document.getElementById("form-login").style.display = 'none';
		document.getElementById("form-cadastro").style.display = 'block';

	}
	
}
function cadastrar(){

	var nome  = document.getElementById("c_nome").value;
	var email = document.getElementById("c_email").value;
	var senha = document.getElementById("c_senha").value;

	document.getElementById("c-nome").innerHTML  = nome;
	document.getElementById("c-email").innerHTML = email;
	document.getElementById("c-senha").innerHTML = senha;

	document.getElementById("dados-cadastro").style.display = 'block';
	
	return false;

}