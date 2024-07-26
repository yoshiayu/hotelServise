import axios from "./axios";

export default {
  getAllHotels() {
    return axios.get("/hotels");
  },
  createHotel(hotel) {
    return axios.post("/hotels", hotel);
  },
  deleteHotel(hotelId) {
    return axios.delete(`/hotels/${hotelId}`);
  },
  getHotelById(hotelId) {
    return axios.get(`/hotels/${hotelId}`);
  },
};
