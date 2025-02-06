package com.comuni.comuni.application.user;

import com.comuni.comuni.domain.user.User;
import com.comuni.comuni.port.inbound.user.UserService;
import com.comuni.comuni.port.outbound.user.UserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * UserServiceImpl 생성자.
     * @param userRepository UserRepository 객체
     * @param passwordEncoder PasswordEncoder 객체
     */
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * 사용자 등록 메서드.
     * @param user 등록할 사용자 객체
     */
    @Override
    public void register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    /**
     * 사용자 인증 메서드.
     * @param username 사용자 이름
     * @param password 비밀번호
     * @return 인증된 사용자 객체
     * @throws UsernameNotFoundException 사용자를 찾을 수 없는 경우
     * @throws BadCredentialsException 비밀번호가 유효하지 않은 경우
     */
    @Override
    public User authenticateUser(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return user;
    }
}
