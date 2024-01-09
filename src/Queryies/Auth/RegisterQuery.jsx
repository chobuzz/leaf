// import { useMutation } from 'react-query'
// import api from '../../utils/api'

// const RegisterFetch = (data) => {
//   api.post("auth/register/email", data).then((response) => {
//     console.log("response", response)
//      .catch((error) => {
//       console.error("회원가입 실패:", error);
//       // 에러 핸들링 또는 다른 로직 추가
//     });
//   })
// }

// // const useRegisterMutation = useMutation({
// //   mutationFn: (data) => RegisterFetch(data),
// // })

// const useRegisterMutation = () => {
//   return useMutation(RegisterFetch);
// }
  


// export {useRegisterMutation}