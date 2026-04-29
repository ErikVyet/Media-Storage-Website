package com.code.embedded;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class ContentId implements Serializable {

    private int album_id;
    private int media_id;

    public ContentId() { }

    public ContentId(int album_id, int media_id) {
        this.album_id = album_id;
        this.media_id = media_id;
    }

    public int getAlbum_id() {
        return album_id;
    }

    public void setAlbum_id(int album_id) {
        this.album_id = album_id;
    }

    public int getMedia_id() {
        return media_id;
    }

    public void setMedia_id(int media_id) {
        this.media_id = media_id;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 53 * hash + this.album_id;
        hash = 53 * hash + this.media_id;
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
        final ContentId other = (ContentId) obj;
        if (this.album_id != other.album_id) {
            return false;
        }
        return this.media_id == other.media_id;
    }

}