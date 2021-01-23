package com.vlktna.lab4.controller;

import com.vlktna.lab4.model.Point;
import com.vlktna.lab4.model.User;
import com.vlktna.lab4.service.PointService;
import com.vlktna.lab4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
public class MainController {

    private final PointService pointService;
    @Autowired
    public MainController(PointService pointService) {
        this.pointService = pointService;
    }

    @PostMapping("/points")
    public List<Point> getPoints(@RequestBody String owner) {
        owner = owner.substring(1, owner.length() - 1);
        return this.pointService.getPoints(owner);
    }

    @DeleteMapping("/delete")
    public void deletePoints(@RequestBody String owner) {
        owner = owner.substring(1, owner.length() - 1);
        this.pointService.deletePoints(owner);
    }

    @PostMapping("/save")
    public void savePoint(@RequestBody Point point) {
        this.pointService.savePoint(point);
    }
}
