package com.vince.ppmtool.service;

import com.vince.ppmtool.domain.Backlog;
import com.vince.ppmtool.domain.Project;
import com.vince.ppmtool.exceptions.ProjectIdException;
import com.vince.ppmtool.repository.BacklogRepo;
import com.vince.ppmtool.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private BacklogRepo backlogRepo;

    public Project saveOrUpdateProject(Project project) {
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            //creating backlog
            if (project.getId() == null){
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            }

            if (project.getId() != null){
                project.setBacklog(backlogRepo.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));
            }

            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }
    }

    public Project findProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project ==null){
            throw new ProjectIdException("Project ID '" + projectId.toUpperCase() + "' does not exists");
        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    public void deleteProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId);

        if (project == null){
            throw new ProjectIdException("Can not delete project with ID '" + projectId +"'. This project does not exist");
        }

        projectRepository.delete(project);
    }

//    public Project updateProject(Project project){
//        Project existingProject = projectRepository.findByProjectIdentifier(project.getProjectIdentifier());
//        existingProject.setProjectIdentifier(project.getProjectIdentifier());
//        existingProject.setProjectDescription(project.getProjectDescription());
//        existingProject.setProjectName(project.getProjectName());
//        return projectRepository.save(existingProject);
//    }

}
