package com.vince.ppmtool.repository;

import com.vince.ppmtool.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectTaskRepo extends CrudRepository<ProjectTask, Long> {
}
