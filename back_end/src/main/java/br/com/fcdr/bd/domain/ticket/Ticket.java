package br.com.fcdr.bd.domain.ticket;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import br.com.fcdr.bd.domain.pessoa.Pessoa;

@Entity
@PrimaryKeyJoinColumn(name="idPessoa")
public class Ticket extends Pessoa {
	
	
	private String ticket;
	
	private String nivel;
	

	public Ticket(String nome, String endereco, String cidade, String estado, String cep, String telefone,
			String email, String ticket, String nivel) {
		super(nome, endereco, cidade, estado, cep, telefone, email);
		this.ticket = ticket;
		this.nivel = nivel;
	}


	
	public String getTicket() {
		return ticket;
	}






	public void setTicket(String ticket) {
		this.ticket = ticket;
	}






	public String getNivel() {
		return nivel;
	}






	public void setNivel(String nivel) {
		this.nivel = nivel;
	}






	public Ticket() {
		// TODO Auto-generated constructor stub
	}




}
