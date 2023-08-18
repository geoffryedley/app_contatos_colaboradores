import axios from "axios";

class FunService {


  postEmp(nome, cidade, cnpj, endereco, telefone, estado, cep, email) {
    axios.post(`http://localhost:8080/api/empresas`, {
      nome: nome, cidade: cidade, cnpj: cnpj, endereco: endereco,
      telefone: telefone, estado: estado, cep: cep, email: email
    })
    alert("cadastro realizado com sucesso:" + nome)
      .then(function (response) {
      })
      .catch(function (error) {
        alert("erro de comunicação com a base de dados" + error)
      });
  }

  putEmp(id, nome, cidade, cnpj, endereco, telefone, estado, cep, email) {
    axios.put(`http://localhost:8080/api/pessoas/${id}`,
      {
        nome: nome, cidade: cidade, cnpj: cnpj, endereco: endereco,
        telefone: telefone, estado: estado, cep: cep, email: email
      }
    ); alert("Cadastro atualizado com sucesso:");
  }



  postRec(nome, cidade, cpf, endereco, telefone, estado, cep, email, nivel) {
    axios.post(`http://localhost:8080/api/recursoes`, {
      nome: nome, cidade: cidade, endereco: endereco, telefone: telefone,
      estado: estado, cep: cep, email: email, cpf: cpf, nivel: nivel,
    })
    alert("cadastro realizado com sucesso:" + nome)
      .then(function (response) {
      })
      .catch(function (error) {
        alert("erro de comunicação com a base de dados" + error)
      });
  }

  putRec(id, nome, cidade, cpf, endereco, telefone, estado, cep, email, nivel) {
    axios.put(`http://localhost:8080/api/pessoas/${id}`,
      {
        nome: nome, cidade: cidade, cpf: cpf, endereco: endereco,
        telefone: telefone, estado: estado, cep: cep, email: email, nivel: nivel
      }
    ); alert("Cadastro atualizado com sucesso:");
  }

  postTic(nome, cidade, cnpj, endereco, telefone, estado, cep, email, nivel, ticket) {
    axios.post(`http://localhost:8080/api/tickets`, {
      nome: nome, cidade: cidade, endereco: endereco, telefone: telefone,
      estado: estado, cep: cep, email: email, cnpj: cnpj, nivel: nivel, ticket: ticket
    })
    alert("cadastro realizado com sucesso:" + nome)
      .then(function (response) {
      })
      .catch(function (error) {
        alert("erro de comunicação com a base de dados" + error)
      });
  }

  delete(id) {
    axios.delete(`http://localhost:8080/api/pessoas/${id}`)
      .then(res => {
        alert("Cadastro excluido com sucesso:")

      })
      .catch(function (error) {
      });
  }


}


export default new FunService();