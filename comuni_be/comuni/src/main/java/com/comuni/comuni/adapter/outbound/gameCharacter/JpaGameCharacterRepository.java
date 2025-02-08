package com.comuni.comuni.adapter.outbound.gameCharacter;

import com.comuni.comuni.domain.gameCharacter.GameCharacter;
import com.comuni.comuni.port.outbound.gameCharacter.GameCharacterJpaRepository;
import com.comuni.comuni.port.outbound.gameCharacter.GameCharacterRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class JpaGameCharacterRepository implements GameCharacterRepository {

    private final GameCharacterJpaRepository repository;

    public JpaGameCharacterRepository(GameCharacterJpaRepository repository) {
        this.repository = repository;
    }

    /**
     * ID로 캐릭터 조회 메서드.
     * @param id 조회할 캐릭터의 ID
     * @return 조회된 캐릭터 객체 (Optional로 감싸져 있음)
     */
    @Override
    public Optional<GameCharacter> findById(Long id) {
        // 실제 데이터베이스 조회 로직을 작성합니다.
        return repository.findById(id);
    }

    /**
     * 캐릭터 저장 메서드.
     * @param gameCharacter 저장할 캐릭터 객체
     * @return 저장된 캐릭터 객체
     */
    @Override
    public GameCharacter save(GameCharacter gameCharacter) {
        // 실제 데이터베이스 저장 로직을 작성합니다.
        return repository.save(gameCharacter);
    }

    /**
     * 모든 캐릭터 조회 메서드.
     * @return 모든 캐릭터 객체 리스트
     */
    @Override
    public List<GameCharacter> findAll() {
        // 실제 데이터베이스 저장 로직을 작성합니다.
        return repository.findAll();
    }
}
