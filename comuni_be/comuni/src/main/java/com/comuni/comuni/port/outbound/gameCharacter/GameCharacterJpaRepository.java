package com.comuni.comuni.port.outbound.gameCharacter;

import com.comuni.comuni.domain.gameCharacter.GameCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface GameCharacterJpaRepository extends JpaRepository<GameCharacter, Long> {

    /**
     * 게임 캐릭터 이름으로 캐릭터 조회 메서드.
     * @param gameCharacterName 조회할 캐릭터의 이름
     * @return 조회된 캐릭터 객체 (Optional로 감싸져 있음)
     */
    Optional<GameCharacter> findByGameCharacterName(String gameCharacterName);
}
