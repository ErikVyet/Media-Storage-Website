package com.code.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", columnDefinition = "uuid", nullable = false)
    private UUID id;

    @Column(name = "username", columnDefinition = "varchar(20)", nullable = false)
    private String username;

    @Column(name = "hash", columnDefinition = "char(64)", nullable = false)
    private String hash;

    @Column(name = "email", columnDefinition = "varchar(255)", nullable = false)
    private String email;

    @Column(name = "created", columnDefinition = "timestamp", nullable = false)
    private LocalDateTime created;

    @OneToMany(mappedBy = "user")
    private List<Media> medias;

    @OneToMany(mappedBy = "user")
    private List<Album> albums;

    public User() { }

    public User(UUID id, String username, String hash, String email, LocalDateTime created) {
        this.id = id;
        this.username = username;
        this.hash = hash;
        this.email = email;
        this.created = created;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public List<Media> getMedias() {
        return medias;
    }

    public void setMedias(List<Media> medias) {
        this.medias = medias;
    }

    public List<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }

}