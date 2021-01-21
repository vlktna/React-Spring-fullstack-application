package com.vlktna.lab4.service;

import com.vlktna.lab4.model.Point;
import com.vlktna.lab4.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PointService {

    private final PointRepository pointRepository;
    @Autowired
    public PointService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    public List<Point> getPoints() {
        return this.pointRepository.findAll();
    }

    public void deletePoints() {
        this.pointRepository.deleteAll();
    }

    public void savePoint(Point point) {
        this.pointRepository.save(point);
    }

}
