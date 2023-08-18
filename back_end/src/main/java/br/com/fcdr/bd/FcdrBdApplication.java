package br.com.fcdr.bd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import br.com.fcdr.bd.domain.empresa.Empresa;
import br.com.fcdr.bd.domain.pessoa.Pessoa;
import br.com.fcdr.bd.domain.recurso.Recurso;
import br.com.fcdr.bd.domain.ticket.Ticket;

@SpringBootApplication
public class FcdrBdApplication implements RepositoryRestConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(FcdrBdApplication.class, args);
	}
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		config.exposeIdsFor(Pessoa.class, Recurso.class, Empresa.class, Ticket.class);
		RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
		cors.addMapping("/**")
		.allowedOrigins("*")
		.allowedMethods("GET", "POST", "PUT", "DELETE");
	}
}

