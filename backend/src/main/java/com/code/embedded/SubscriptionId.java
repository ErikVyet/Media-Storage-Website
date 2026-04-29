package com.code.embedded;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

import jakarta.persistence.Embeddable;

@Embeddable
public class SubscriptionId implements Serializable {
    
    private UUID user_id;
    private int plan_id;

    public SubscriptionId() { }

    public SubscriptionId(int plan_id, UUID user_id) {
        this.plan_id = plan_id;
        this.user_id = user_id;
    }

    public UUID getUser_id() {
        return user_id;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public int getPlan_id() {
        return plan_id;
    }

    public void setPlan_id(int plan_id) {
        this.plan_id = plan_id;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + Objects.hashCode(this.user_id);
        hash = 71 * hash + this.plan_id;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final SubscriptionId other = (SubscriptionId) obj;
        if (this.plan_id != other.plan_id) {
            return false;
        }
        return Objects.equals(this.user_id, other.user_id);
    }

}