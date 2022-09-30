package com.vince.ppmtool.repository;

import com.vince.ppmtool.domain.Backlog;
import org.springframework.data.repository.CrudRepository;

public interface BacklogRepo extends CrudRepository<Backlog, Long> {
}
