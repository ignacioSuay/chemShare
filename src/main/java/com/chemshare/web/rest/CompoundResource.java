package com.chemshare.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.chemshare.domain.Compound;
import com.chemshare.repository.CompoundRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Compound.
 */
@RestController
@RequestMapping("/api")
public class CompoundResource {

    private final Logger log = LoggerFactory.getLogger(CompoundResource.class);

    @Inject
    private CompoundRepository compoundRepository;

    /**
     * POST  /compounds -> Create a new compound.
     */
    @RequestMapping(value = "/compounds",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public void create(@RequestBody Compound compound) {
        log.debug("REST request to save Compound : {}", compound);
        compoundRepository.save(compound);
    }

    /**
     * GET  /compounds -> get all the compounds.
     */
    @RequestMapping(value = "/compounds",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Compound> getAll() {
        log.debug("REST request to get all Compounds");
        return compoundRepository.findAll();
    }

    /**
     * GET  /compounds/:id -> get the "id" compound.
     */
    @RequestMapping(value = "/compounds/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Compound> get(@PathVariable String id) {
        log.debug("REST request to get Compound : {}", id);
        return Optional.ofNullable(compoundRepository.findOne(id))
            .map(compound -> new ResponseEntity<>(
                compound,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /compounds/:id -> delete the "id" compound.
     */
    @RequestMapping(value = "/compounds/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public void delete(@PathVariable String id) {
        log.debug("REST request to delete Compound : {}", id);
        compoundRepository.delete(id);
    }
}
