package com.comuni.comuni.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import java.rmi.server.ExportException;

public interface SecurityConfigPort {
    void configure(HttpSecurity http) throws ExportException, Exception;
}
