import axios from "axios";
import React, { Component } from 'react';

class FormLocate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.nomeR = React.createRef(); this.enderecoR = React.createRef();
        this.telefoneR = React.createRef(); this.cidadeR = React.createRef();
        this.estadoR = React.createRef(); this.cepR = React.createRef();
        this.nomeE = React.createRef(); this.enderecoE = React.createRef();
        this.telefoneE = React.createRef(); this.cidadeE = React.createRef();
        this.estadoE = React.createRef(); this.cepE = React.createRef();
        this.ticket = React.createRef(); this.calculo = React.createRef();
        this.opt = React.createRef(); this.deslocamento = React.createRef();
        this.custo = React.createRef();

    }

    handleSubmit(event) {

        switch (this.opt.current.value) {
            case "1":
                for (let index = 0; index < 1000; index++) {
                    axios.get(`http://localhost:8080/api/pessoas/${index}`)
                        .then(response => {

                            var f = response.data.estado.includes(this.estadoE.current.value);

                            if (f === true || this.ticket.current.nomeE !== response.data.nome) {
                                this.enderecoR.current.value = response.data.endereço; this.cidadeR.current.value = response.data.cidade;
                                this.estadoR.current.value = response.data.estado; const v = 72; this.deslocamento.current.value = v; this.cepR.current.value = response.data.cep;
                                this.nomeR.current.value = response.data.nome; this.telefoneR.current.value = response.data.telefone;
                            }
                        })
                        .catch(function (error) {
                        });
                }
                alert("Localizado com Sucesso")
                break;
            case "2":
                var i = this.deslocamento.current.value; var j = this.custo.current.value;
                var k = i * j; this.calculo.current.value = k;
                break;

            default:
                break;
        }
        for (let index = 0; index < 1000; index++) {
            axios.get(`http://localhost:8080/api/pessoas/${index}`)
                .then(response => {

                    var i = response.data.ticket.includes(this.ticket.current.value);

                    if (i === true) {
                        this.enderecoE.current.value = response.data.endereço; this.cidadeE.current.value = response.data.cidade;
                        this.estadoE.current.value = response.data.estado; this.cepE.current.value = response.data.cep;
                        this.nomeE.current.value = response.data.nome; this.telefoneE.current.value = response.data.telefone;
                    }
                })
                .catch(function (error) {
                });
        }

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h4>Encontrar Recurso:</h4>
                <br>
                </br>
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        &nbsp;<div class="form-group col-md-3">
                            <label for="nome">Informe o número do Ticket:</label>
                            <input type="text" name="nTicket" class="form-control" ref={this.ticket} />
                            <button type="submit" class="btn btn-primary btn-sm">Localizar</button>
                        </div>
                    </div>
                    <br></br>
                    <h6>Dados do ticket:</h6>
                    <div>
                        <fieldset disabled>
                            <div class="row">
                                &nbsp; <div class="col-md-5">
                                    <label for="endereco">Endereço da demanda: </label>
                                    <input type="text" name="enderecoEm" class="form-control" ref={this.enderecoE} />
                                </div>
                                &nbsp; <div class="col-md-3">
                                    <label for="cidade">Cidade:</label>
                                    <input type="text" name="cidade" class="form-control" ref={this.cidadeE} />
                                </div>
                                &nbsp; <div class="col-md-1">
                                    <label for="cidade">Estado:</label>
                                    <input type="text" name="uf" title='Ex: "DF","SP","PE"...' class="form-control" pattern="[A-Za-z]{2}" ref={this.estadoE} />
                                </div>
                                &nbsp; <div class="col-md-2">
                                    <label for="cidade">Cep:</label>
                                    <input type="text" name="cep" class="form-control" ref={this.cepE} />
                                </div>
                                &nbsp;<div class="col-md-2">
                                    <label for="endereco">Nome da empresa: </label>
                                    <input type="text" name="nomeEm" class="form-control" ref={this.nomeE} />
                                </div>
                                &nbsp; <div class="col-md-2">
                                    <label for="endereco">Telefone: </label>
                                    <input type="text" name="foneEm" class="form-control" ref={this.telefoneE} />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <br></br>
                    <h6>Dados do recurso:</h6>
                    <fieldset disabled>
                        <div class="row">
                            &nbsp; <div class="col-md-5">
                                <label for="cidade">Endereço do recurso:</label>
                                <input type="text" name="enderecoRe" class="form-control" ref={this.enderecoR} />
                            </div>
                            &nbsp; <div class="col-md-3">
                                <label for="cidade">Cidade:</label>
                                <input type="text" name="uf" title='Ex: "DF","SP","PE"...' class="form-control" pattern="[A-Za-z]{2}" ref={this.cidadeR} />
                            </div>
                            &nbsp; <div class="col-md-1">
                                <label for="cidade">Estado:</label>
                                <input type="text" name="uf" title='Ex: "DF","SP","PE"...' class="form-control" pattern="[A-Za-z]{2}" ref={this.estadoR} />
                            </div>
                            &nbsp; <div class="col-md-2">
                                <label for="cidade">Cep:</label>
                                <input type="text" name="uf" class="form-control" ref={this.cepR} />
                            </div>
                            &nbsp;<div class="col-md-2">
                                <label for="endereco">Nome do recurso: </label>
                                <input type="text" name="nomdeRe" class="form-control" ref={this.nomeR} />
                            </div>
                            &nbsp; <div class="col-md-2">
                                <label for="endereco">Telefone: </label>
                                <input type="text" name="foneRe" class="form-control" ref={this.telefoneR} />
                            </div>
                            &nbsp; <div class="col-md-2">
                                <label for="cidade">KM de deslocamento:</label>
                                <input type="text" class="form-control" ref={this.deslocamento} />
                            </div>
                        </div>
                    </fieldset>
                    <div class="row">
                        &nbsp; <div class="col-md-2">
                            <label for="cidade">Custo/KM: </label>
                            <input type="text" class="form-control"pattern="[0-9\.]+$" title='Ex: 1.5' ref={this.custo} />
                        </div>
                        &nbsp; <div class="col-md-2">
                            <label for="cidade">Total do custo: </label>
                            <input type="text" class="form-control" ref={this.calculo} />
                        </div>
                    </div>
                    <br></br>
                    <div class="col-md-2">
                        <label for="Select">Selecione a opção desejada: </label>
                        <select name="select" size="2" multiple class="form-control" id="Select" ref={this.opt}>
                            <option value="1">Localizar Recurso</option>
                            <option value="2">Calcular</option>
                        </select>
                        &nbsp;<button type="submit" value="Submit" class="btn btn-success btn-sm">Executar</button>
                    </div>
                </form>
            </div >
        );
    }
}
export default FormLocate;