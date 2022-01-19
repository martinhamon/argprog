/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio.model;

import java.util.Date;
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
public class Job {
    @Id
    @GeneratedValue (strategy =GenerationType.IDENTITY)
    @Column (length = 512)
    private Long id;
    @Column     ( columnDefinition="varchar(1024)")
    private String logo;
    @Column
    private String title;
    @Column
    private String subTitle;
    @Column  ( columnDefinition="varchar(4096)")
    private String tasks;
    @Column
    private Date start;
    @Column
    private Date end;
    
    
    
    public Job (){
        
    }

    public Job(Long id, String logo, String title, String subTitle, String tasks, Date start, Date end) {
        this.id = id;
        this.logo = logo;
        this.title = title;
        this.subTitle = subTitle;
        this.tasks = tasks;
        this.start = start;
        this.end = end;
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
     * @return the subTitle
     */
    public String getSubTitle() {
        return subTitle;
    }

    /**
     * @param subTitle the subTitle to set
     */
    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    /**
     * @return the tasks
     */
    public String getTasks() {
        return tasks;
    }

    /**
     * @param tasks the tasks to set
     */
    public void setTasks(String tasks) {
        this.tasks = tasks;
    }

    /**
     * @return the start
     */
    public Date getStart() {
        return start;
    }

    /**
     * @param start the start to set
     */
    public void setStart(Date start) {
        this.start = start;
    }

    /**
     * @return the end
     */
    public Date getEnd() {
        return end;
    }

    /**
     * @param end the end to set
     */
    public void setEnd(Date end) {
        this.end = end;
    }
    
    
    
            
    
}
