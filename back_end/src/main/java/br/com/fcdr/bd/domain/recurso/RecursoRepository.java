package br.com.fcdr.bd.domain.recurso;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecursoRepository extends CrudRepository<Recurso, String> {
	
	Recurso findBycpf(String cpf);
}
