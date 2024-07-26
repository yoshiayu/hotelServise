<template>
  <div>
    <h2>登録</h2>
    <form @submit.prevent="register">
      <div>
        <label for="name">名前:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">パスワード:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">登録</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("http://localhost:8080/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        alert("登録が成功しました。ログインしてください。");
        this.$router.push("/login");
      } catch (error) {
        alert("登録に失敗しました。");
      }
    },
  },
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
