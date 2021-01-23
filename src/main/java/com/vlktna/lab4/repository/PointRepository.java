package com.vlktna.lab4.repository;

import com.vlktna.lab4.model.Point;
import com.vlktna.lab4.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepository extends JpaRepository<Point, Long> {
    List<Point> getAllByOwner(String owner);
    void deleteByOwner(String owner);
}
