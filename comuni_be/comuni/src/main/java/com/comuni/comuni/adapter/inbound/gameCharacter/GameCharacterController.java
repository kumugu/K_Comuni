package com.comuni.comuni.adapter.inbound.gameCharacter;

import com.comuni.comuni.domain.gameCharacter.GameCharacter;
import com.comuni.comuni.port.inbound.gameCharacter.GameCharacterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gameCharacters")
public class GameCharacterController {

    private final GameCharacterService gameCharacterService;

    /**
     * GameCharacterController 생성자.
     * @param gameCharacterService GameCharacterService 객체
     */
    public GameCharacterController(GameCharacterService gameCharacterService) {
        this.gameCharacterService = gameCharacterService;
    }

    /**
     * 캐릭터 생성 요청을 처리하는 메서드.
     * @param gameCharacter 생성할 캐릭터 객체
     * @return 생성된 캐릭터 객체와 HTTP 상태 코드
     */
    @PostMapping
    public ResponseEntity<GameCharacter> createCharacter(@RequestBody GameCharacter gameCharacter) {
        return ResponseEntity.ok(gameCharacterService.createGameCharacter(gameCharacter));
    }

    /**
     * ID로 캐릭터 조회 요청을 처리하는 메서드.
     * @param id 조회할 캐릭터의 ID
     * @return 조회된 캐릭터 객체와 HTTP 상태 코드
     */
    @GetMapping("/{id}")
    public ResponseEntity<GameCharacter> getCharacter(@PathVariable Long id) {
        return ResponseEntity.ok(gameCharacterService.getGameCharacterById(id));
    }

    /**
     * 캐릭터 업데이트 요청을 처리하는 메서드.
     * @param id 업데이트할 캐릭터의 ID
     * @param gameCharacter 업데이트할 캐릭터 객체
     * @return 업데이트된 캐릭터 객체와 HTTP 상태 코드
     */
    @PutMapping("/{id}")
    public ResponseEntity<GameCharacter> updateCharacter(@PathVariable Long id, @RequestBody GameCharacter gameCharacter) {
        return ResponseEntity.ok(gameCharacterService.updateGameCharacter(id,gameCharacter));
    }


    /**
     * 캐릭터 삭제 요청을 처리하는 메서드.
     * @param id 삭제할 캐릭터의 ID
     * @return 삭제된 캐릭터 객체와 HTTP 상태 코드
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<GameCharacter> deleteCharacter(@PathVariable Long id) {
        gameCharacterService.deleteGameCharacter(id);
        return ResponseEntity.noContent().build();  // 삭제 후 204 상태 코드 반환
    }


    /**
     * 모든 캐릭터 조회 요청을 처리하는 메서드.
     * @return 모든 캐릭터 객체 리스트와 HTTP 상태 코드
     */
    @GetMapping("/all")
    public ResponseEntity<List<GameCharacter>> getAllCharacters() {
        return ResponseEntity.ok(gameCharacterService.getAllGameCharacters());
    }

}
