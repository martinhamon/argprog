package com.portfolio.portfolio.model;

import com.portfolio.portfolio.model.Rol;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.9.v20210604-rNA", date="2022-02-10T20:37:09")
@StaticMetamodel(User.class)
public class User_ { 

    public static volatile SingularAttribute<User, String> lastName;
    public static volatile SingularAttribute<User, String> password;
    public static volatile SingularAttribute<User, String> mail;
    public static volatile SetAttribute<User, Rol> roles;
    public static volatile SingularAttribute<User, String> name;
    public static volatile SingularAttribute<User, Boolean> active;
    public static volatile SingularAttribute<User, Long> id;
    public static volatile SingularAttribute<User, String> username;
    public static volatile SingularAttribute<User, String> token;

}