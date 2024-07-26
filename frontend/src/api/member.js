import axios from "./axios";

export default {
  getAllMembers() {
    return axios.get("/members");
  },
  createMember(member) {
    return axios.post("/members", member);
  },
  deleteMember(memberId) {
    return axios.delete(`/members/${memberId}`);
  },
  getMemberById(memberId) {
    return axios.get(`/members/${memberId}`);
  },
};
// 会員登録API
export const registerMember = async (memberData) => {
  const response = await axios.post("/members", memberData);
  return response.data;
};
