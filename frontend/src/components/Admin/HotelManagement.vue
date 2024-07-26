<template>
  <div>
    <h1>宿管理</h1>
    <ul>
      <li v-for="hotel in hotels" :key="hotel.id">
        {{ hotel.name }} - {{ hotel.location }}
        <button @click="deleteHotel(hotel.id)">削除</button>
      </li>
    </ul>
    <form @submit.prevent="addHotel">
      <input v-model="newHotel.name" placeholder="名前" />
      <input v-model="newHotel.location" placeholder="場所" />
      <input v-model="newHotel.description" placeholder="説明" />
      <input
        v-model="newHotel.availableRooms"
        type="number"
        placeholder="空室数"
      />
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
import hotelService from "@/api/hotel";

export default {
  data() {
    return {
      hotels: [],
      newHotel: {
        name: "",
        location: "",
        description: "",
        availableRooms: 0,
      },
    };
  },
  methods: {
    async fetchHotels() {
      const response = await hotelService.getAllHotels();
      this.hotels = response.data;
    },
    async addHotel() {
      await hotelService.createHotel(this.newHotel);
      this.newHotel = {
        name: "",
        location: "",
        description: "",
        availableRooms: 0,
      };
      this.fetchHotels();
    },
    async deleteHotel(hotelId) {
      await hotelService.deleteHotel(hotelId);
      this.fetchHotels();
    },
  },
  created() {
    this.fetchHotels();
  },
};
</script>
