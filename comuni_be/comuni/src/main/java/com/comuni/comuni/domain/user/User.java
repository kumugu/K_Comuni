package com.comuni.comuni.domain.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;
    private String email;

    /**
     * 사용자 ID를 가져오는 메서드.
     * @return 사용자 ID
     */
    public long getId() {
        return id;
    }

    /**
     * 사용자 ID를 설정하는 메서드.
     * @param id 사용자 ID
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * 사용자 이름을 가져오는 메서드.
     * @return 사용자 이름
     */
    public String getUsername() {
        return username;
    }

    /**
     * 사용자 이름을 설정하는 메서드.
     * @param username 사용자 이름
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 사용자 비밀번호를 가져오는 메서드.
     * @return 사용자 비밀번호
     */
    public String getPassword() {
        return password;
    }

    /**
     * 사용자 비밀번호를 설정하는 메서드.
     * @param password 사용자 비밀번호
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 사용자 이메일을 가져오는 메서드.
     * @return 사용자 이메일
     */
    public String getEmail() {
        return email;
    }

    /**
     * 사용자 이메일을 설정하는 메서드.
     * @param email 사용자 이메일
     */
    public void setEmail(String email) {
        this.email = email;
    }
}
