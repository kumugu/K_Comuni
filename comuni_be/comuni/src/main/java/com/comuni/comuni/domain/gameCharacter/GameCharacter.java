package com.comuni.comuni.domain.gameCharacter;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class GameCharacter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String gameCharacterName;
    private String hairColor;
    private String hairType;
    private String bodyColor;
    private String bodyType;
    private String legColor;

    private String legType;
    private int strength;
    private int health;
    private int intelligence;
    private int spirit;
    private int luck;

    // 기본 생성자 추가 (JPA 사용 시 필요)
    public GameCharacter() {}

    /**
     * Character 생성자.
     * @param gameCharacterName 캐릭터 이름
     * @param hairColor 머리 색상
     * @param hairType 머리 유형
     * @param bodyColor 몸 색상
     * @param bodyType 몸 유형
     * @param legColor 다리 색상
     * @param legType 다리 유형
     * @param strength 힘
     * @param health 체력
     * @param intelligence 지능
     * @param spirit 정신력
     * @param luck 행운
     */
    public GameCharacter(String gameCharacterName, String hairColor, String hairType, String bodyColor, String bodyType, String legColor, String legType, int strength, int health, int intelligence, int spirit, int luck) {
        this.gameCharacterName = gameCharacterName;
        this.hairColor = hairColor;
        this.hairType = hairType;
        this.bodyColor = bodyColor;
        this.bodyType = bodyType;
        this.legColor = legColor;
        this.legType = legType;
        this.strength = strength;
        this.health = health;
        this.intelligence = intelligence;
        this.spirit = spirit;
        this.luck = luck;
    }

    // getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGameCharacterName() {
        return gameCharacterName;
    }

    public void setGameCharacterName(String gameCharacterName) {
        this.gameCharacterName = gameCharacterName;
    }

    public String getHairColor() {
        return hairColor;
    }

    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    public String getHairType() {
        return hairType;
    }

    public void setHairType(String hairType) {
        this.hairType = hairType;
    }

    public String getBodyColor() {
        return bodyColor;
    }

    public void setBodyColor(String bodyColor) {
        this.bodyColor = bodyColor;
    }

    public String getBodyType() {
        return bodyType;
    }

    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public String getLegColor() {
        return legColor;
    }

    public void setLegColor(String legColor) {
        this.legColor = legColor;
    }

    public String getLegType() {
        return legType;
    }

    public void setLegType(String legType) {
        this.legType = legType;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getSpirit() {
        return spirit;
    }

    public void setSpirit(int spirit) {
        this.spirit = spirit;
    }

    public int getLuck() {
        return luck;
    }

    public void setLuck(int luck) {
        this.luck = luck;
    }
}
