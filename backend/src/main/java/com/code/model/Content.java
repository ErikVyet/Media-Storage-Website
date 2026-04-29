package com.code.model;

import com.code.embedded.ContentId;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "contents")
public class Content {

    @EmbeddedId
    private ContentId id;
    
    @ManyToOne
    @JoinColumn(name = "album_id", nullable = false)
    @MapsId(value = "album_id")
    private Album album;

    @ManyToOne
    @JoinColumn(name = "media_id", nullable = false)
    @MapsId(value = "media_id")
    private Media media;

    public Content() { }

    public Content(ContentId id, Media media, Album album) {
        this.album = album;
        this.id = id;
        this.media = media;
    }

    public ContentId getId() {
        return id;
    }

    public void setId(ContentId id) {
        this.id = id;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Media getMedia() {
        return media;
    }

    public void setMedia(Media media) {
        this.media = media;
    }

}