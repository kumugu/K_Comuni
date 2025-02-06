package com.comuni.comuni.port.inbound.user;

import com.comuni.comuni.domain.user.User;

public interface UserService {
    /**
     * 회원가입 메서드.
     * @param user 등록할 사용자 정보
     */
    void register(User user);

    /**
     * 로그인 메서드.
     * @param username 사용자 이름
     * @param password 비밀번호
     * @return 인증된 사용자 객체
     */
    User authenticateUser(String username, String password);
}
