package com.chemshare.web.rest;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.List;

import com.chemshare.Application;
import com.chemshare.domain.Compound;
import com.chemshare.repository.CompoundRepository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the CompoundResource REST controller.
 *
 * @see CompoundResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class CompoundResourceTest {

    private static final String DEFAULT_STRUCTURE = "SAMPLE_TEXT";
    private static final String UPDATED_STRUCTURE = "UPDATED_TEXT";
    private static final String DEFAULT_UNIVERSITY = "SAMPLE_TEXT";
    private static final String UPDATED_UNIVERSITY = "UPDATED_TEXT";

    private static final Integer DEFAULT_PRICE = 0;
    private static final Integer UPDATED_PRICE = 1;
    private static final String DEFAULT_UNIT = "SAMPLE_TEXT";
    private static final String UPDATED_UNIT = "UPDATED_TEXT";

    private static final String DEFAULT_USER_ID = "0";
    private static final String UPDATED_USER_ID = "1";

    @Inject
    private CompoundRepository compoundRepository;

    private MockMvc restCompoundMockMvc;

    private Compound compound;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        CompoundResource compoundResource = new CompoundResource();
        ReflectionTestUtils.setField(compoundResource, "compoundRepository", compoundRepository);
        this.restCompoundMockMvc = MockMvcBuilders.standaloneSetup(compoundResource).build();
    }

    @Before
    public void initTest() {
        compoundRepository.deleteAll();
        compound = new Compound();
        compound.setStructure(DEFAULT_STRUCTURE);
        compound.setUniversity(DEFAULT_UNIVERSITY);
        compound.setPrice(DEFAULT_PRICE);
        compound.setUnit(DEFAULT_UNIT);
        compound.setUserId(DEFAULT_USER_ID);
    }

    @Test
    public void createCompound() throws Exception {
        // Validate the database is empty
        assertThat(compoundRepository.findAll()).hasSize(0);

        // Create the Compound
        restCompoundMockMvc.perform(post("/api/compounds")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(compound)))
                .andExpect(status().isOk());

        // Validate the Compound in the database
        List<Compound> compounds = compoundRepository.findAll();
        assertThat(compounds).hasSize(1);
        Compound testCompound = compounds.iterator().next();
        assertThat(testCompound.getStructure()).isEqualTo(DEFAULT_STRUCTURE);
        assertThat(testCompound.getUniversity()).isEqualTo(DEFAULT_UNIVERSITY);
        assertThat(testCompound.getPrice()).isEqualTo(DEFAULT_PRICE);
        assertThat(testCompound.getUnit()).isEqualTo(DEFAULT_UNIT);
        assertThat(testCompound.getUserId()).isEqualTo(DEFAULT_USER_ID);
    }

    @Test
    public void getAllCompounds() throws Exception {
        // Initialize the database
        compoundRepository.save(compound);

        // Get all the compounds
        restCompoundMockMvc.perform(get("/api/compounds"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[0].id").value(compound.getId()))
                .andExpect(jsonPath("$.[0].structure").value(DEFAULT_STRUCTURE.toString()))
                .andExpect(jsonPath("$.[0].university").value(DEFAULT_UNIVERSITY.toString()))
                .andExpect(jsonPath("$.[0].Price").value(DEFAULT_PRICE))
                .andExpect(jsonPath("$.[0].unit").value(DEFAULT_UNIT.toString()))
                .andExpect(jsonPath("$.[0].userId").value(DEFAULT_USER_ID));
    }

    @Test
    public void getCompound() throws Exception {
        // Initialize the database
        compoundRepository.save(compound);

        // Get the compound
        restCompoundMockMvc.perform(get("/api/compounds/{id}", compound.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(compound.getId()))
            .andExpect(jsonPath("$.structure").value(DEFAULT_STRUCTURE.toString()))
            .andExpect(jsonPath("$.university").value(DEFAULT_UNIVERSITY.toString()))
            .andExpect(jsonPath("$.Price").value(DEFAULT_PRICE))
            .andExpect(jsonPath("$.unit").value(DEFAULT_UNIT.toString()))
            .andExpect(jsonPath("$.userId").value(DEFAULT_USER_ID));
    }

    @Test
    public void getNonExistingCompound() throws Exception {
        // Get the compound
        restCompoundMockMvc.perform(get("/api/compounds/{id}", 1L))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateCompound() throws Exception {
        // Initialize the database
        compoundRepository.save(compound);

        // Update the compound
        compound.setStructure(UPDATED_STRUCTURE);
        compound.setUniversity(UPDATED_UNIVERSITY);
        compound.setPrice(UPDATED_PRICE);
        compound.setUnit(UPDATED_UNIT);
        compound.setUserId(UPDATED_USER_ID);
        restCompoundMockMvc.perform(post("/api/compounds")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(compound)))
                .andExpect(status().isOk());

        // Validate the Compound in the database
        List<Compound> compounds = compoundRepository.findAll();
        assertThat(compounds).hasSize(1);
        Compound testCompound = compounds.iterator().next();
        assertThat(testCompound.getStructure()).isEqualTo(UPDATED_STRUCTURE);
        assertThat(testCompound.getUniversity()).isEqualTo(UPDATED_UNIVERSITY);
        assertThat(testCompound.getPrice()).isEqualTo(UPDATED_PRICE);
        assertThat(testCompound.getUnit()).isEqualTo(UPDATED_UNIT);
        assertThat(testCompound.getUserId()).isEqualTo(UPDATED_USER_ID);
    }

    @Test
    public void deleteCompound() throws Exception {
        // Initialize the database
        compoundRepository.save(compound);

        // Get the compound
        restCompoundMockMvc.perform(delete("/api/compounds/{id}", compound.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Compound> compounds = compoundRepository.findAll();
        assertThat(compounds).hasSize(0);
    }
}
