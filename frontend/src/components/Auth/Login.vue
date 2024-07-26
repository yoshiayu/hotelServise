<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/login",
          {
            email: this.email,
            password: this.password,
          }
        );
        localStorage.setItem("token", response.data.token);
        this.$router.push("/member");
      } catch (error) {
        alert("ログインに失敗しました。");
      }
    },
  },
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
