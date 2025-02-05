package com.comuni.comuni.adapter.outbound;

import com.comuni.comuni.domain.User;
import com.comuni.comuni.port.outbound.UserJpaRepository;
import com.comuni.comuni.port.outbound.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class JpaUserRepository implements UserRepository {

    private final UserJpaRepository repository;

    public JpaUserRepository(UserJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public User save(User user) {
        return repository.save(user);
    }
}
