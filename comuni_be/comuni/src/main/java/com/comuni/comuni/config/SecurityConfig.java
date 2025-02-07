package com.comuni.comuni.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.security.config.Customizer;

@Configuration
public class SecurityConfig {

    /**
     * HttpSecurity 설정을 위한 SecurityFilterChain을 정의하는 메서드.
     * @param http HttpSecurity 객체
     * @return SecurityFilterChain 객체
     * @throws Exception 구성 중 발생할 수 있는 예외
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF 보호 비활성화
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/users/register", "/api/users/login").permitAll() // 회원가입 및 로그인 경로 허용
                        .requestMatchers("/api/gameCharacters/**").permitAll()  // 캐릭터 생성 경로 허용
                        .anyRequest().authenticated() // 그 외의 요청은 인증 필요
                )
                .cors(Customizer.withDefaults()); // CORS 기본값 설정 (적용)

        return http.build();
    }

    /**
     * PasswordEncoder 빈을 정의하는 메서드.
     * @return BCryptPasswordEncoder 객체
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * WebMvcConfigurer 빈을 정의하여 CORS 설정을 구성하는 메서드.
     * @return WebMvcConfigurer 객체
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000") // 리액트 애플리케이션 도메인으로 수정
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}