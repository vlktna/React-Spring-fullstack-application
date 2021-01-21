package com.vlktna.lab4.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "points_lab4")
public class Point implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY, generator="points_seq")
    @SequenceGenerator(name="points_seq", sequenceName="SEQ_POINT", allocationSize=1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "x")
    private String valueX;

    @Column(name = "y")
    private String valueY;

    @Column(name = "r")
    private String valueR;

    @Column(name = "result")
    private String result;

    @Column(name = "time")
    private String time;

    @Column(name = "owner")
    private String owner;
}
