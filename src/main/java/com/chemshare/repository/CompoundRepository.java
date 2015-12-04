package com.chemshare.repository;

import com.chemshare.domain.Compound;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Spring Data MongoDB repository for the Compound entity.
 */
public interface CompoundRepository extends MongoRepository<Compound,String>{

    List<Compound> findCompoundByUserId(String userId);

    @Query("{'$or':[ {'name': ?0}, {'structure':?0}, {'smile' :?0}, {'tags': ?0} ] }")
    List<Compound> findCompoundsByTerm(String term);

    @Query("{'$or':[ {'name': {$regex : ?0, $options: 'i'}}, {'structure':{$regex : ?0, $options: 'i'}}, {'smile' :{$regex : ?0, $options: 'i'}}, {'tags': {$regex : ?0, $options: 'i'}} ] }")
    List<Compound> findCompoundsByRegexTerm(String term);
}
