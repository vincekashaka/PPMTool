package com.vince.ppmtool.repository;

import com.vince.ppmtool.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;

public interface ProjectTaskRepo extends CrudRepository<ProjectTask, Long> {
}
