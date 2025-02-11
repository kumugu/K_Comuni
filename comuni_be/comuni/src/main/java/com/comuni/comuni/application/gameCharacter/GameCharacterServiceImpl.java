package com.comuni.comuni.application.gameCharacter;

import com.comuni.comuni.domain.gameCharacter.GameCharacter;
import com.comuni.comuni.port.inbound.gameCharacter.GameCharacterService;
import com.comuni.comuni.port.outbound.gameCharacter.GameCharacterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameCharacterServiceImpl implements GameCharacterService {

    private final GameCharacterRepository gameCharacterRepository;

    /**
     * GameCharacterServiceImpl 생성자.
     * @param gameCharacterRepository GameCharacterRepository 객체
     */
    public GameCharacterServiceImpl(GameCharacterRepository gameCharacterRepository) {
        this.gameCharacterRepository = gameCharacterRepository;
    }

    /**
     * 캐릭터 생성 메서드.
     * @param gameCharacter 생성할 캐릭터 객체
     * @return 생성된 캐릭터 객체
     */
    @Override
    public GameCharacter createGameCharacter(GameCharacter gameCharacter) {
        // 캐릭터 생성 로직
        return gameCharacterRepository.save(gameCharacter);
    }

    /**
     * ID로 캐릭터 조회 메서드.
     * @param id 조회할 캐릭터의 ID
     * @return 조회된 캐릭터 객체
     * @throws RuntimeException 캐릭터를 찾을 수 없는 경우
     */
    @Override
    public GameCharacter getGameCharacterById(Long id) {
        // 캐릭터 조회 로직
        return gameCharacterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found"));
    }

    /**
     * 캐릭터 업데이트 메서드.
     * @param id 업데이트할 캐릭터의 ID
     * @param gameCharacter 업데이트할 캐릭터 객체
     * @return 업데이트된 캐릭터 객체
     * @throws RuntimeException 캐릭터를 찾을 수 없는 경우
     */
    @Override
    public GameCharacter updateGameCharacter(Long id, GameCharacter gameCharacter) {
        // 캐릭터 업데이트 로직
        GameCharacter existingCharacter = gameCharacterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character not found"));

        // 캐릭터 이름
        existingCharacter.setGameCharacterName(gameCharacter.getGameCharacterName());

        // 캐릭터 외형(머리, 몸통, 다리 색상 및 형태 변경)
        existingCharacter.setHairColor(gameCharacter.getHairColor());
        existingCharacter.setHairType(gameCharacter.getHairType());
        existingCharacter.setBodyColor(gameCharacter.getBodyColor());
        existingCharacter.setBodyType(gameCharacter.getBodyType());
        existingCharacter.setLegColor(gameCharacter.getLegColor());
        existingCharacter.setLegType(gameCharacter.getLegType());

        // 캐릭터 능력치(힘, 체력, 지식, 정신, 행운)
        existingCharacter.setStrength(gameCharacter.getStrength());
        existingCharacter.setHealth(gameCharacter.getHealth());
        existingCharacter.setIntelligence(gameCharacter.getIntelligence());
        existingCharacter.setSpirit(gameCharacter.getSpirit());
        existingCharacter.setLuck(gameCharacter.getLuck());

        return gameCharacterRepository.save(existingCharacter);
    }

    /**
     * ID로 캐릭터 삭제 메서드.
     * @param id 삭제할 캐릭터의 ID
     * @return 삭제된 캐릭터 객체
     * @throws RuntimeException 캐릭터를 찾을 수 없는 경우
     */
    @Override
    public GameCharacter deleteGameCharacter(Long id) {
        // 캐릭터 삭제 로직
        GameCharacter  existingCharacter = gameCharacterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(("Character not found")));
        // 캐릭터 삭제
        gameCharacterRepository.delete(existingCharacter);

        // 삭제된 캐릭터의 ID 반환
        return existingCharacter;
    }


    /**
     * 모든 캐릭터 조회 메서드.
     * @return 모든 캐릭터 객체 리스트
     */
    @Override
    public List<GameCharacter> getAllGameCharacters() {
        return gameCharacterRepository.findAll();
    }
}
