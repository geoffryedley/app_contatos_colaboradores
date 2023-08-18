package br.com.fcdr.bd.domain.pessoa;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends CrudRepository<Pessoa, Integer>{
	
	Pessoa findBynome(String nome);
	
}
