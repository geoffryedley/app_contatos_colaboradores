import axios from "axios";
import React, { Component } from 'react';
import FunService from "../api/FunService";


class FormCadTicket extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
   
    this.nomeR = React.createRef();this.nome = React.createRef();this.cnpj = React.createRef();
    this.cidade = React.createRef();this.endereco = React.createRef();this.estado = React.createRef();
    this.cep = React.createRef();this.telefone = React.createRef();this.email = React.createRef();
    this.idPessoa = React.createRef();this.opt = React.createRef();this.nivel = React.createRef();
    this.ticket = React.createRef();
  }

  handleSubmit(event) {

    switch (this.opt.current.value) {
      case "1":
        console.log(this.opt.current.value)
        if (this.nome.current.value !== "" && this.cnpj.current.value !== ""
          && this.cidade.current.value !== "" && this.endereco.current.value !== ""
          && this.estado.current.value !== "" && this.cep.current.value !== "") {

          FunService.postTic(
            this.nome.current.value, this.cidade.current.value,
            this.cnpj.current.value, this.endereco.current.value,
            this.telefone.current.value, this.estado.current.value,
            this.cep.current.value, this.email.current.value, this.nivel.current.value, this.ticket.current.value
          );
          return this.render;
        } else {
          alert('Localize o nome da empresa');
        }
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
            this.nomeR.current.value = response.data.nome;this.nome.current.value = response.data.nome;
            this.cnpj.current.value = response.data.cnpj;this.endereco.current.value = response.data.endereço;
            this.cidade.current.value = response.data.cidade;this.estado.current.value = response.data.estado;
            this.cep.current.value = response.data.cep;this.telefone.current.value = response.data.telefone;
            this.email.current.value = response.data.email;this.idPessoa.current.value = response.data.idPessoa;
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
    this.cnpj.current.value = ""; this.endereco.current.value = ""; this.telefone.current.value = "";
    this.estado.current.value = ""; this.cep.current.value = ""; this.email.current.value = "";
  }


  render() {

    return (

      <div>
        <h4>Cadastro de Ticket: </h4>
        <form onSubmit={this.handleSubmit} >
          <div class="row">
            &nbsp;<div class="form-group col-md-2">
              <label for="nome">Número do ticket:</label>
              <input type="text" name="Ticket" class="form-control" ref={this.ticket} />
            </div>
          </div>
          <div class="row">
            &nbsp;<div class="form-group col-md-5">
              <label for="nome">Nome da empresa:</label>
              <input type="text" name="nome" class="form-control" ref={this.nome} />
              <button type="submit" class="btn btn-primary btn-sm" >Localizar</button>
            </div>
          </div>
          <fieldset disabled>
            <div class="row">
              &nbsp;<div class="form-group col-md-5">
                <label for="nome">Nome:</label>
                <input type="text" name="nome" class="form-control" ref={this.nomeR} />
              </div>
              &nbsp;<div class="col-md-2">
                <label for="cnpj">CNPJ:</label>
                <input type="text" name="cnpj" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                  title='Ex: 00.000.000/0000-00' class="form-control" ref={this.cnpj} />
              </div>
              &nbsp;<div class="col-md-3">
                <label for="email">Email:</label>
                <input type="email" name="email" class="form-control" ref={this.email} />
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
                <input type="text" name="uf" title='Ex: "DF","SP","PE"...' class="form-control" pattern="[A-Za-z]{2}" ref={this.estado} />
              </div>
              &nbsp; <div class="col-md-2">
                <label for="cidade">CEP:</label>
                <input type="text" name="cep" class="form-control" ref={this.cep} />
              </div>
            </div>
            <div class="row">
              &nbsp;<div class="col-md-4">
                <label for="endereco">Telefone:</label>
                <input type="text" name="telefone" class="form-control" ref={this.telefone} />
              </div>
              <div class="col-md-1">
                <label for="cidade">ID:</label>
                <input type="text" name="id" class="form-control" ref={this.idPessoa} />
              </div>
            </div>
          </fieldset>
          &nbsp;<div class="col-md-2">
            <label for="Select">Nível Requisitado:</label>
            <select name="nivel" class="form-control" id="Select" ref={this.nivel} >
              <option>Selecione...</option>
              <option value="1">Júnior</option>
              <option value="2">Pleno</option>
              <option value="3">Sênior</option>
            </select>
          </div>
          <div>
            <br></br>
            <div class="col-md-2">
              <label for="Select">Selecione a opção desejada:</label>
              <select name="nivel" size="1" multiple class="form-control" id="Select" ref={this.opt}>
                <option value="1">Cadastrar</option>
              </select>
            </div>
          </div>
          &nbsp;<button type="submit" value="Submit" class="btn btn-success btn-sm">Executar</button>
          &nbsp; <a href="/CadEmp" type="submit" class="btn btn-secondary btn-sm">Cancelar</a>
        </form>
      </div>
    );
  }
}

export default FormCadTicket;