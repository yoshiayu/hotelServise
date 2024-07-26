package com.example.demo.hotelreservation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.hotelreservation.model.Member;
import com.example.demo.hotelreservation.repository.MemberRepository;

import java.util.List;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Member getMemberById(Long id) {
        return memberRepository.findById(id).orElse(null);
    }

    public Member createMember(Member member) {
        return memberRepository.save(member);
    }

    public Member updateMember(Long id, Member memberDetails) {
        Member member = memberRepository.findById(id).orElse(null);
        if (member != null) {
            member.setName(memberDetails.getName());
            member.setEmail(memberDetails.getEmail());
            return memberRepository.save(member);
        }
        return null;
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }
}
