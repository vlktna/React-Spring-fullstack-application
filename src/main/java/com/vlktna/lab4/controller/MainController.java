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
    private final UserService userService;
    @Autowired
    public MainController(PointService pointService, UserService userService) {
        this.pointService = pointService;
        this.userService = userService;
    }

    @GetMapping("/points")
    public List<Point> getPoints() {
        System.out.println("points");
        return this.pointService.getPoints();
    }

    @DeleteMapping("/delete")
    public void deletePoints(User user) {
        this.pointService.deletePoints();
    }

    @PostMapping("/save")
    public void savePoint(@RequestBody Point point) {
        System.out.println("save>>>");
        System.out.println(point.toString());
        this.pointService.savePoint(point);
    }
}
