package com.comuni.comuni.adapter.outbound.user;

import com.comuni.comuni.domain.user.User;
import com.comuni.comuni.port.outbound.user.UserJpaRepository;
import com.comuni.comuni.port.outbound.user.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class JpaUserRepository implements UserRepository {

    private final UserJpaRepository repository;

    /**
     * JpaUserRepository 생성자.
     * @param repository UserJpaRepository 구현체
     */
    public JpaUserRepository(UserJpaRepository repository) {
        this.repository = repository;
    }

    /**
     * 사용자 이름으로 사용자 조회 메서드.
     * @param username 조회할 사용자의 이름
     * @return 조회된 사용자 객체 (Optional로 감싸져 있음)
     */
    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    /**
     * 사용자 저장 메서드.
     * @param user 저장할 사용자 객체
     * @return 저장된 사용자 객체
     */
    @Override
    public User save(User user) {
        return repository.save(user);
    }
}
