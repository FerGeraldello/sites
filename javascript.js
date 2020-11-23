function mostraDados(){
    var nome = duvidas.nome.value;
    var cpf = duvidas.cpf.value;
    var email = duvidas.email.value;
    var mensagem = duvidas.mensagem.value;
    var msg = "Nome: " + nome + 
              " CPF: " + cpf +
              " E-mail: " + email +
              " Mensagem: " + mensagem;
    alert(msg);
}