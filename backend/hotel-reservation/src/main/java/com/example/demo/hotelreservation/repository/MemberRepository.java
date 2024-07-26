package com.example.demo.hotelreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.hotelreservation.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
