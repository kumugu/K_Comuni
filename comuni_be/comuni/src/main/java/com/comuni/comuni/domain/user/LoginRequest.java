package com.comuni.comuni.domain.user;

public class LoginRequest {

    private String username;
    private String password;

    /**
     * 로그인 요청 시 사용되는 사용자 이름을 가져오는 메서드.
     * @return 사용자 이름
     */
    public String getUsername() {
        return username;
    }

    /**
     * 로그인 요청 시 사용되는 사용자 이름을 설정하는 메서드.
     * @param username 사용자 이름
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 로그인 요청 시 사용되는 비밀번호를 가져오는 메서드.
     * @return 비밀번호
     */
    public String getPassword() {
        return password;
    }

    /**
     * 로그인 요청 시 사용되는 비밀번호를 설정하는 메서드.
     * @param password 비밀번호
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
