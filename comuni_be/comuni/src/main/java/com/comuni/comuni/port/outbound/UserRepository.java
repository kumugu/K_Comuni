package com.comuni.comuni.port.outbound;

import com.comuni.comuni.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository {
    Optional<User> findByUsername(String username);
    User save(User user);
}
