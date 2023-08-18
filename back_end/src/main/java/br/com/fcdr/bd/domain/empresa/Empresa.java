package br.com.fcdr.bd.domain.empresa;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import br.com.fcdr.bd.domain.pessoa.Pessoa;

@Entity
@PrimaryKeyJoinColumn(name="idPessoa")
public class Empresa extends Pessoa {
	
	
	private String cnpj;

	
	public Empresa(String nome, String endereco, String cidade, String estado, String cep, String telefone,
			String email, String cnpj) {
		super(nome, endereco, cidade, estado, cep, telefone, email);
		this.cnpj = cnpj;
	}


	public String getCnpj() {
		return cnpj;
	}


	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}


	public Empresa() {
		// TODO Auto-generated constructor stub
	}




}
