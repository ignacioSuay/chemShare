package com.chemshare.repository;

import com.chemshare.domain.Compound;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Spring Data MongoDB repository for the Compound entity.
 */
public interface CompoundRepository extends MongoRepository<Compound,String>{

    List<Compound> findCompoundByUserId(String userId);
}
