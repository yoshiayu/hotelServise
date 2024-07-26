<template>
  <div>
    <h1>会員登録</h1>
    <form @submit.prevent="register">
      <div>
        <label for="name">名前:</label>
        <input type="text" v-model="member.name" id="name" required />
      </div>
      <div>
        <label for="email">メール:</label>
        <input type="email" v-model="member.email" id="email" required />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input
          type="password"
          v-model="member.password"
          id="password"
          required
        />
      </div>
      <button type="submit">登録</button>
    </form>
  </div>
</template>

<script>
import { registerMember } from "@/api/member";

export default {
  data() {
    return {
      member: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const result = await registerMember(this.member);
        console.log("会員登録成功:", result);
        // 成功したらリダイレクトやメッセージ表示など
      } catch (error) {
        console.error("会員登録失敗:", error);
        // エラーハンドリング
      }
    },
  },
};
</script>
