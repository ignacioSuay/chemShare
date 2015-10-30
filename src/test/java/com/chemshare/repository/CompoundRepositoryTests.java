package com.chemshare.repository;

import com.chemshare.Application;
import com.chemshare.config.MongoConfiguration;
import com.chemshare.domain.Compound;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import javax.inject.Inject;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by suay on 10/30/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
//@Import(MongoConfiguration.class)
public class CompoundRepositoryTests {

    @Inject
    CompoundRepository compoundRepository;

    @Test
    public void testFindCompoundsByUserId(){
        String userId = "user-3";
        List<Compound> compoundList = compoundRepository.findCompoundByUserId(userId);
        assertThat(compoundList).isNotNull();
    }
}
