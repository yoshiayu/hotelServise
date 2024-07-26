<template>
  <div>
    <h1>会員管理</h1>
    <ul>
      <li v-for="member in members" :key="member.id">
        {{ member.name }} - {{ member.email }}
        <button @click="deleteMember(member.id)">削除</button>
      </li>
    </ul>
    <form @submit.prevent="addMember">
      <input v-model="newMember.name" placeholder="名前" />
      <input v-model="newMember.email" placeholder="メール" />
      <input
        v-model="newMember.password"
        type="password"
        placeholder="パスワード"
      />
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
import memberService from "@/api/member";

export default {
  data() {
    return {
      members: [],
      newMember: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async fetchMembers() {
      const response = await memberService.getAllMembers();
      this.members = response.data;
    },
    async addMember() {
      await memberService.createMember(this.newMember);
      this.newMember = { name: "", email: "", password: "" };
      this.fetchMembers();
    },
    async deleteMember(memberId) {
      await memberService.deleteMember(memberId);
      this.fetchMembers();
    },
  },
  created() {
    this.fetchMembers();
  },
};
</script>
