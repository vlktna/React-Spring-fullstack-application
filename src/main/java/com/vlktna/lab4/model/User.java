package com.vlktna.lab4.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY, generator="users_seq")
    @SequenceGenerator(name="users_seq", sequenceName="SEQ_USER", allocationSize=1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @NotEmpty
    @Column(name = "firstname")
    private String firstName;

    @NotEmpty
    @Column(name = "lastname")
    private String lastName;

    @NotEmpty
    @Column(name = "login")
    private String username;

    @NotEmpty
    @Column(name = "password")
    private String password;
}
