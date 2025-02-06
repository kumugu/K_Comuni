package com.comuni.comuni.port.outbound.gameCharacter;

import com.comuni.comuni.domain.gameCharacter.GameCharacter;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GameCharacterRepository {

    /**
     * ID로 캐릭터 조회 메서드.
     * @param id 조회할 캐릭터의 ID
     * @return 조회된 캐릭터 객체 (Optional로 감싸져 있음)
     */
    Optional<GameCharacter> findById(Long id);

    /**
     * 캐릭터 저장 메서드.
     * @param gameCharacter 저장할 캐릭터 객체
     * @return 저장된 캐릭터 객체
     */
    GameCharacter save(GameCharacter gameCharacter);
}
