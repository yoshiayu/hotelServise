<template>
  <div>
    <h1>管理者ダッシュボード</h1>
    <router-link to="/admin/members">会員管理</router-link>
    <router-link to="/admin/hotels">宿管理</router-link>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>
