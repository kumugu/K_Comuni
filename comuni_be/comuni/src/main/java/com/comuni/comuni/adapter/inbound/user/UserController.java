package com.comuni.comuni.adapter.inbound.user;

import com.comuni.comuni.domain.user.LoginRequest;
import com.comuni.comuni.domain.user.User;
import com.comuni.comuni.application.user.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    /**
     * 사용자 등록 요청을 처리하는 메서드.
     * @param user 등록할 사용자 객체
     * @return 사용자 등록 성공 메시지와 HTTP 상태 코드
     */
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.register(user);
        return ResponseEntity.ok("User registered successfully");
    }

    /**
     * 사용자 로그인 요청을 처리하는 메서드.
     * @param loginRequest 로그인 요청 객체 (사용자 이름과 비밀번호 포함)
     * @return 로그인 환영 메시지와 HTTP 상태 코드
     */
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());
        return ResponseEntity.ok("Welcome, " + user.getUsername());
    }
}
