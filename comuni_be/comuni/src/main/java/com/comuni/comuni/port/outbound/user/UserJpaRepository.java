package com.comuni.comuni.port.outbound.user;

import com.comuni.comuni.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserJpaRepository extends JpaRepository<User, Long> {

    /**
     * 사용자 이름으로 사용자 조회 메서드.
     * @param username 조회할 사용자의 이름
     * @return 조회된 사용자 객체 (Optional로 감싸져 있음)
     */
    Optional<User> findByUsername(String username);
}
