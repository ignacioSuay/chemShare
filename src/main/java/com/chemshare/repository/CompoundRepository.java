package com.chemshare.repository;

import com.chemshare.domain.Compound;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Compound entity.
 */
public interface CompoundRepository extends MongoRepository<Compound,String>{

}
