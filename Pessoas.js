var pessoas, index;

function cadPessoa(nome, sobrenome, email, sexo, profissao) {
    pessoas = document.getElementById("tbPessoas");
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellSobrenome = linha.insertCell(2);
    var cellEmail = linha.insertCell(3);
    var cellSexo = linha.insertCell(4);
    var cellProfissao = linha.insertCell(5);

    cellCodigo.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellEmail.innerHTML = email;
    cellSexo.innerHTML = sexo;
    cellProfissao.innerHTML = profissao;

    preencheCamposForm();

}


function preencheCamposForm() {

    for (var i = 0; i < pessoas.rows.length; i++) {
        pessoas.rows[i].onclick = function() {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtSobrenome").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("txtEmail").value = pessoas.rows[index].cells[3].innerText;
            document.getElementById("slSexo").value = pessoas.rows[index].cells[4].innerText;
            document.getElementById("txtProfissao").value = pessoas.rows[index].cells[5].innerText;
        }
    }
}

function delRegistro() {

    for (var i = 0; i < pessoas.rows.length; i++) {
        if (index == i) {
            pessoas.deleteRow(index);
            return;
        }
    }
}