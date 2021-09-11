import { apiHelper } from "./../utils/helpers";

//串接應該會是 admin/signin

// export default {
//   signIn({ email, password }) {
//     return apiHelper.post("/admin/signin", {
//       email,
//       password,
//     });
//   },
// };

//先用餐廳課程當測試
//root@example.com
//12345678
export default {
  signIn({ email, password }) {
    return apiHelper.post("/signin", {
      email,
      password,
    });
  },
};
