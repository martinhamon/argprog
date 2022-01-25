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
public class Skill {
    
    @Id
    @GeneratedValue (strategy =GenerationType.IDENTITY)
    @Column (length = 512)
    private Long id;
    @Column   
    private String title;
    @Column   
    private String subtitle;
     @Column (length = 512)
    private Long percent;

    public Skill() {
    }

    public Skill(Long id, String title, Long percent) {
        this.id = id;
        this.title = title;
        this.percent = percent;
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
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the percent
     */
    public Long getPercent() {
        return percent;
    }

    /**
     * @param percent the percent to set
     */
    public void setPercent(Long percent) {
        this.percent = percent;
    }

    /**
     * @return the subtitle
     */
    public String getSubtitle() {
        return subtitle;
    }

    /**
     * @param subtitle the subtitle to set
     */
    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }
    
}
