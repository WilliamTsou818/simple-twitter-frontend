import { apiHelper2 } from './../utils/helpers'

export default {
  getCurrentUser() {
    // FIXME:餐廳測試用API
    return apiHelper2.get('/current_user')
  },
}

// export default {
//   getCurrentUser() {
//     // TODO:apiary
//     return apiHelper.get("/users/current_user");
//   },
// };
