import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    // FIXME:餐廳測試用API
    return apiHelper.get('/get_current_user')
  },
}

// export default {
//   getCurrentUser() {
//     // TODO:apiary
//     return apiHelper.get("/users/current_user");
//   },
// };
