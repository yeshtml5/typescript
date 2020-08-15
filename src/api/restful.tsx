export default {}
// import axios from 'axios'
// //ajax
// export const ajax = async obj => {
//   const {url, method, data, params, authToken} = obj
//   try {
//     let formData = new FormData()
//     if (url === '/upload' && data) {
//       formData.append('file', '')
//       formData.append('dataURL', data.dataURL)
//       formData.append('imageURL', '')
//       formData.append('uploadType', data.uploadType)
//     }
//     const dataType = url === '/upload' ? formData : qs.stringify(data)
//     let res = await axios({
//       method: method,
//       headers: {
//         authToken: API.authToken || '',
//         'custom-header': API.customHeader || '',
//         'content-type': contentType
//       },
//       url: pathType + url,
//       params: params,
//       data: dataType,
//       withCredentials: true
//     })

//     return res.data
//   } catch (error) {
//     errorMsg(error)
//   }
// }
// //error
// export const errorMsg = error => {
//   // console.log('%c' + '## AJAX Error', 'width:100%;font-size:12px;padding:5px 10px;color:#fff;background:blue;')
//   //console.log(error)
// }
