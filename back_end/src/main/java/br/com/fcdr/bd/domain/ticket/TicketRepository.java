package br.com.fcdr.bd.domain.ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, String> {
	
	Ticket findByticket(String ticket);
}
