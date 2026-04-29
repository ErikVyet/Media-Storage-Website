package com.code.model;

import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "plans")
public class Plan {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "integer", nullable = false)
    private int id;

    @Column(name = "name", columnDefinition = "varchar(16)", nullable = false)
    private String name;

    @Column(name = "description", columnDefinition = "text", nullable = false)
    private String description;

    @Column(name = "price", columnDefinition = "numeric", precision = 5, scale = 2, nullable = false)
    private BigDecimal price;

    @Column(name = "duration", columnDefinition = "smallint", nullable = false)
    private short duration;

    @OneToMany(mappedBy = "plan")
    private List<Subscription> subscriptions;

    public Plan() { }

    public Plan(String name, String description, BigDecimal price, short duration) {
        this.description = description;
        this.name = name;
        this.price = price;
        this.duration = duration;
    }

    public Plan(int id, String name, String description, BigDecimal price, short duration) {
        this.description = description;
        this.id = id;
        this.name = name;
        this.price = price;
        this.duration = duration;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public short getDuration() {
        return duration;
    }

    public void setDuration(short duration) {
        this.duration = duration;
    }

    public List<Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(List<Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }
    
}