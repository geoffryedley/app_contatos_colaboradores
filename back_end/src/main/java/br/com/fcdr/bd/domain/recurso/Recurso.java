package br.com.fcdr.bd.domain.recurso;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;


import br.com.fcdr.bd.domain.pessoa.Pessoa;

@Entity
@PrimaryKeyJoinColumn(name="idPessoa")
public class Recurso extends Pessoa {
	
	private String cpf;
	
	private String nivel;
	

	public Recurso(String nome, String endereco, String cidade, String estado, String cep, String telefone,
			String email, String cpf, String nivel) {
		super(nome, endereco, cidade, estado, cep, telefone, email);
		this.cpf = cpf;
		this.nivel = nivel;
	}


	
	public String getCpf() {
		return cpf;
	}






	public void setCpf(String cpf) {
		this.cpf = cpf;
	}






	public String getNivel() {
		return nivel;
	}






	public void setNivel(String nivel) {
		this.nivel = nivel;
	}






	public Recurso() {
		// TODO Auto-generated constructor stub
	}




}
