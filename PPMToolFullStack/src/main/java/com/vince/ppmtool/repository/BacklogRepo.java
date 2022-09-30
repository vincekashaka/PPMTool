package com.vince.ppmtool.repository;

import com.vince.ppmtool.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepo extends CrudRepository<Backlog, Long> {
    Backlog findByProjectIdentifier(String Identifier);
}
