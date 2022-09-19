package com.vince.ppmtool.services;


import com.vince.ppmtool.domain.Project;
import com.vince.ppmtool.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;


    public Project saveOrUpdateProject(Project project){
        return projectRepository.save(project);
    }
}
