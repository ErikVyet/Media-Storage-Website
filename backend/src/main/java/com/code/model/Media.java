package com.code.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "medias")
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "integer", nullable = false)
    private int id;

    @Column(name = "data", columnDefinition = "bytea", nullable = false)
    private byte[] data;

    @Column(name = "mime", columnDefinition = "varchar(16)", nullable = false)
    private String mime;
    
    @Column(name = "name", columnDefinition = "varchar(255)", nullable = false)
    private String name;

    @Column(name = "uploaded", columnDefinition = "timestamp", nullable = false)
    private LocalDateTime uploaded;

    @Column(name = "trash", columnDefinition = "boolean", nullable = false)
    private boolean trash;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "media")
    private List<Content> contents;

    public Media() { }

    public Media(byte[] data, String mime, String name, LocalDateTime uploaded, boolean trash) {
        this.data = data;
        this.mime = mime;
        this.name = name;
        this.uploaded = uploaded;
        this.trash = trash;
    }

    public Media(int id, byte[] data, String mime, String name, LocalDateTime uploaded, boolean trash) {
        this.id = id;
        this.data = data;
        this.mime = mime;
        this.name = name;
        this.uploaded = uploaded;
        this.trash = trash;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getMime() {
        return mime;
    }

    public void setMime(String mime) {
        this.mime = mime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getUploaded() {
        return uploaded;
    }

    public void setUploaded(LocalDateTime uploaded) {
        this.uploaded = uploaded;
    }

    public boolean isTrash() {
        return trash;
    }

    public void setTrash(boolean trash) {
        this.trash = trash;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Content> getContents() {
        return contents;
    }

    public void setContents(List<Content> contents) {
        this.contents = contents;
    }

}