package com.vince.ppmtool.repository;

import com.vince.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
       Project findByProjectIdentifier(String project);
}
