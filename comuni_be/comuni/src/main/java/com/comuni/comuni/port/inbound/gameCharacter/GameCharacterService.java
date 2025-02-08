package com.comuni.comuni.port.inbound.gameCharacter;

import com.comuni.comuni.domain.gameCharacter.GameCharacter;

import java.util.List;

public interface GameCharacterService {
    /**
     * 캐릭터 생성 메서드.
     * @param gameCharacter 생성할 캐릭터 객체
     * @return 생성된 캐릭터 객체
     */
    GameCharacter createGameCharacter(GameCharacter gameCharacter);

    /**
     * ID로 캐릭터 조회 메서드.
     * @param id 조회할 캐릭터의 ID
     * @return 조회된 캐릭터 객체
     */
    GameCharacter getGameCharacterById(Long id);

    /**
     * 캐릭터 업데이트 메서드.
     * @param id 업데이트할 캐릭터의 ID
     * @param gameCharacter 업데이트할 캐릭터 객체
     * @return 업데이트된 캐릭터 객체
     */
    GameCharacter updateGameCharacter(Long id, GameCharacter gameCharacter);

    /**
     * 모든 캐릭터 조회 메서드.
     * @return 모든 캐릭터 객체 리스트
     */
    List<GameCharacter> getAllGameCharacters();
}
