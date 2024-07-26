import Vue from 'vue';
import Router from 'vue-router';
import AdminDashboard from '@/components/Admin/AdminDashboard.vue';
import MemberDashboard from '@/components/Member/MemberDashboard.vue';
import MemberManagement from '@/components/Admin/MemberManagement.vue';
import HotelManagement from '@/components/Admin/HotelManagement.vue';
import HotelSearch from '@/components/Member/HotelSearch.vue';
import HotelDetails from '@/components/Member/HotelDetails.vue';
import ReservationHistory from '@/components/Member/ReservationHistory.vue';
import Review from '@/components/Member/Review.vue';
import Login from '@/components/Auth/Login.vue';
import Register from '@/components/Auth/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/members',
      name: 'MemberManagement',
      component: MemberManagement
    },
    {
      path: '/admin/hotels',
      name: 'HotelManagement',
      component: HotelManagement
    },
    {
      path: '/member',
      name: 'MemberDashboard',
      component: MemberDashboard
    },
    {
      path: '/member/search',
      name: 'HotelSearch',
      component: HotelSearch
    },
    {
      path: '/member/hotels/:id',
      name: 'HotelDetails',
      component: HotelDetails,
      props: true
    },
    {
      path: '/member/reservations',
      name: 'ReservationHistory',
      component: ReservationHistory
    },
    {
      path: '/member/reviews',
      name: 'Review',
      component: Review
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
});
