<template>
  <div>
    <h1>会員ダッシュボード</h1>
    <router-link to="/member/search">宿検索</router-link>
    <router-link to="/member/reservations">予約履歴</router-link>
    <router-link to="/member/reviews">口コミ投稿</router-link>
  </div>
</template>

<script>
export default {
  name: "MemberDashboard",
};
</script>
