import { apiHelper } from './../utils/helpers'

//TODO:先用餐廳課程當測試
//root@example.com
//12345678
export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password,
    })
  },
}

//TODO:apiary
// export default {
//   signIn({ account, password }) {
//     return apiHelper.post("/users/signin", {
//       account,
//       password,
//     });
//   },
// };
