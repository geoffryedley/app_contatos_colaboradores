import axios from "axios";
import React, { Component } from 'react';
import FunService from "../api/FunService";

class FormCadRec extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.nome = React.createRef(); this.cpf = React.createRef(); this.cidade = React.createRef();
        this.endereco = React.createRef(); this.estado = React.createRef(); this.cep = React.createRef();
        this.telefone = React.createRef(); this.email = React.createRef(); this.idPessoa = React.createRef();
        this.opt = React.createRef(); this.nivel = React.createRef();

    }

    handleSubmit(event) {

        switch (this.opt.current.value) {
            case "1":
                console.log(this.opt.current.value)
                if (this.nome.current.value !== "" && this.cpf.current.value !== ""
                    && this.cidade.current.value !== "" && this.endereco.current.value !== ""
                    && this.estado.current.value !== "" && this.cep.current.value !== "") {

                    FunService.postRec(
                        this.nome.current.value, this.cidade.current.value,
                        this.cpf.current.value, this.endereco.current.value,
                        this.telefone.current.value, this.estado.current.value,
                        this.cep.current.value, this.email.current.value, this.nivel.current.value
                    );
                    return this.render;
                } else {
                    alert('Preencher os campos: "Nome", "CPF", "Endereço", "Cidade", "Estado", "Cep"');
                }
                break;
            case "2":
                FunService.putRec(
                    this.idPessoa.current.value, this.nome.current.value, this.cidade.current.value,
                    this.cpf.current.value, this.endereco.current.value, this.telefone.current.value,
                    this.estado.current.value, this.cep.current.value, this.email.current.value,
                    this.nivel.current.value);
                this.clear();
                break;
            case "3":
                FunService.delete(this.idPessoa.current.value);
                this.clear();
                break;
            default:
                break;
        }

        for (let index = 0; index < 1000; index++) {
            axios.get(`http://localhost:8080/api/pessoas/${index}`)
                .then(response => {
                    var toupper = this.nome.current.value[0].toUpperCase();
                    var text = this.nome.current.value.replace(this.nome.current.value[0], toupper);
                    var i = response.data.nome.includes(this.nome.current.value);
                    var j = response.data.nome.includes(text);

                    if (i === true || j === true) {
                        this.nome.current.value = response.data.nome; this.cpf.current.value = response.data.cpf;
                        this.endereco.current.value = response.data.endereço; this.cidade.current.value = response.data.cidade;
                        this.estado.current.value = response.data.estado; this.cep.current.value = response.data.cep;
                        this.telefone.current.value = response.data.telefone; this.email.current.value = response.data.email;
                        this.idPessoa.current.value = response.data.idPessoa;
                        alert("Cadastro Localizado com sucesso")
                    }
                })
                .catch(function (error) {
                });
        }
        event.preventDefault();
    }

    clear() {
        this.idPessoa.current.value = ""; this.nome.current.value = ""; this.cidade.current.value = "";
        this.cpf.current.value = ""; this.endereco.current.value = ""; this.telefone.current.value = "";
        this.estado.current.value = ""; this.cep.current.value = ""; this.email.current.value = "";
    }

    render() {

        return (
            <div>
                <h4>Cadastro de Recurso:</h4>
                <br>
                </br>
                <form onSubmit={this.handleSubmit} >
                    <fieldset disabled>
                        <div class="col-md-1">
                            <label for="cidade">ID:</label>
                            <input type="text" name="id" class="form-control" ref={this.idPessoa} />
                        </div>
                    </fieldset>
                    <div class="row">
                        &nbsp;<div class="form-group col-md-8">
                            <label for="nome">Nome:</label>
                            <input type="text" name="nome" class="form-control" ref={this.nome} />
                            <button type="submit" class="btn btn-primary btn-sm">Localizar</button>
                        </div>
                        &nbsp;<div class="col-md-2">
                            <label for="cpf">CPF:</label>
                            <input type="text" name="cpf" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                                title='Ex: 000.000.000-00' ref={this.cpf} class="form-control" />
                        </div>
                    </div>
                    <div class="row">
                        &nbsp;<div class="col-md-4">
                            <label for="endereco">Endereço:</label>
                            <input type="text" name="endereco" class="form-control" ref={this.endereco} />
                        </div>
                        &nbsp; <div class="col-md-3">
                            <label for="cidade">Cidade:</label>
                            <input type="text" name="cidade" class="form-control" ref={this.cidade} />
                        </div>
                        &nbsp; <div class="col-md-1">
                            <label for="cidade">Estado:</label>
                            <input type="text" name="uf" class="form-control" pattern="[A-Za-z]{2}" ref={this.estado} />
                        </div>
                        &nbsp; <div class="col-md-2">
                            <label for="cidade">CEP:</label>
                            <input type="text" name="cep" class="form-control" ref={this.cep} />
                        </div>
                    </div>
                    <div class="row">
                        &nbsp;<div class="col-md-4">
                            <label for="endereco">Telefone:</label>
                            <input type="text" name="fone" class="form-control" ref={this.telefone} />
                        </div>
                        &nbsp;<div class="col-md-3">
                            <label for="email">Email:</label>
                            <input type="email" name="email" class="form-control" ref={this.email} />
                        </div>
                        &nbsp;<div class="col-md-2">
                            <label for="Select">Nível:</label>
                            <select name="nivel" class="form-control" id="Select" ref={this.nivel} >
                                <option>Selecione...</option>
                                <option value="1">Júnior</option>
                                <option value="2">Pleno</option>
                                <option value="3">Sênior</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="col-md-2">
                        <label for="Select">Selecione a opção desejada:</label>
                        <select name="nivel" size="3" multiple class="form-control" id="Select" ref={this.opt}>
                            <option value="1">Cadastrar</option>
                            <option value="2">Alterar</option>
                            <option value="3">Excluir</option>
                        </select>
                    </div>
                    &nbsp;<div>
                        &nbsp;<button type="submit" class="btn btn-success btn-sm">Executar</button>
                        &nbsp;<a href="/CadRec" type="button" class="btn btn-secondary btn-sm">Cancelar</a>
                    </div>
                </form>
            </div >
        );
    }
}

export default FormCadRec;