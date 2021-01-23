package com.vlktna.lab4.service;

import com.vlktna.lab4.model.Point;
import com.vlktna.lab4.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class PointService {

    private final PointRepository pointRepository;

    @Autowired
    public PointService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @Transactional
    public List<Point> getPoints(String owner) {
        return this.pointRepository.getAllByOwner(owner);
    }

    @Transactional
    public void deletePoints(String owner) {
        this.pointRepository.deleteByOwner(owner);
    }

    @Transactional
    public void savePoint(Point point) {
        this.pointRepository.save(point);
    }
}
