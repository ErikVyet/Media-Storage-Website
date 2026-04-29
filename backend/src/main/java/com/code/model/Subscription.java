package com.code.model;

import java.time.LocalDateTime;

import com.code.embedded.SubscriptionId;

import jakarta.persistence.CheckConstraint;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    
    @EmbeddedId
    private SubscriptionId id;

    @Column(name = "start", columnDefinition = "timestamp", nullable = false)
    private LocalDateTime start;

    @Column(name = "expire", columnDefinition = "timestamp", nullable = false, check = @CheckConstraint(name = "check_subscription_date", constraint = "expire > start"))
    private LocalDateTime expire;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @MapsId(value = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "plan_id", nullable = false)
    @MapsId(value = "plan_id")
    private Plan plan;

    public Subscription() { }

    public Subscription(SubscriptionId id, LocalDateTime start, LocalDateTime expire) {
        this.expire = expire;
        this.id = id;
        this.start = start;
    }

    public SubscriptionId getId() {
        return id;
    }

    public void setId(SubscriptionId id) {
        this.id = id;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return expire;
    }

    public void setEnd(LocalDateTime expire) {
        this.expire = expire;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Plan getPlan() {
        return plan;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }

}