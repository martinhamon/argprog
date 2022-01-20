/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


/**
 *
 * @author MH
 */
@Getter 
@Setter
@Entity
public class Profile {
    @Id
    @GeneratedValue (strategy =GenerationType.IDENTITY)
      @Column (length = 512)
    private Long id;
    @Column   
    private String name;
    @Column
    private String lastName;
    @Column  ( columnDefinition="varchar(4096)")
    private String description;    
    @Column     ( columnDefinition="varchar(256)")
    private String telephone;
    @Column     ( columnDefinition="varchar(256)")
    private String city;
    @Column     ( columnDefinition="varchar(256)")
    private String country;
    @Column     ( columnDefinition="varchar(256)")
    private String address;
    @Column     ( columnDefinition="varchar(256)")
    private String dob;
    @Column     ( columnDefinition="varchar(1024)")
    private String logo;
    @Column     ( columnDefinition="varchar(1024)")
    private String shortDescription;

    public Profile(Long id, String name, String lastName, String description, String telephone, String city, String country, String address, String dob, String logo, String shortDescription) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.description = description;
        this.telephone = telephone;
        this.city = city;
        this.country = country;
        this.address = address;
        this.dob = dob;
        this.logo = logo;
        this.shortDescription = shortDescription;
    }

    

    public Profile() {
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the telephone
     */
    public String getTelephone() {
        return telephone;
    }

    /**
     * @param telephone the telephone to set
     */
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    /**
     * @return the city
     */
    public String getCity() {
        return city;
    }

    /**
     * @param city the city to set
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * @return the country
     */
    public String getCountry() {
        return country;
    }

    /**
     * @param country the country to set
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * @return the address
     */
    public String getAddress() {
        return address;
    }

    /**
     * @param address the address to set
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * @return the dob
     */
    public String getDob() {
        return dob;
    }

    /**
     * @param dob the dob to set
     */
    public void setDob(String dob) {
        this.dob = dob;
    }

    /**
     * @return the logo
     */
    public String getLogo() {
        return logo;
    }

    /**
     * @param logo the logo to set
     */
    public void setLogo(String logo) {
        this.logo = logo;
    }

    /**
     * @return the shortDescription
     */
    public String getShortDescription() {
        return shortDescription;
    }

    /**
     * @param shortDescription the shortDescription to set
     */
    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }
}
