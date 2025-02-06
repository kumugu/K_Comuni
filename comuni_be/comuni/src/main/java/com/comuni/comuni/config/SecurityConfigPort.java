package com.comuni.comuni.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import java.rmi.server.ExportException;

public interface SecurityConfigPort {

    /**
     * HttpSecurity를 구성하는 메서드.
     * @param http HttpSecurity 객체
     * @throws ExportException 구성 중 발생할 수 있는 예외
     * @throws Exception 일반적인 예외
     */
    void configure(HttpSecurity http) throws ExportException, Exception;
}
