/**
 * 유틸함수
 */

/**
 * @function 최소최대,중에서랜덤값출력
 * @param min : 최소숫자
 * @param max : 최대숫자
 */
export const randomRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)
/**
 * @function 배열로받은숫자의총합
 * @param [number]
 */
export const sumArray = (numbers: number[]): number => numbers.reduce((acc, current) => acc + current, 0)
/**
 * @function 가장마지막요소가져오기
 * @param Type
 * @example const t1 = lastArray(['1', '2'])
 */
export const lastArray = <T>(array: T[]) => array[array.length - 1]
/**
 * @function 쿠키가져오기
 * @param c_name 쿠키이름
 */
export const getCookie = (c_name: string): string => {
  const splited = document.cookie.split(';')
  let cookies: any = {}
  splited.forEach(bundle => {
    const [key, value] = bundle.split('=')
    cookies[key.trim()] = value
  })
  if (cookies[c_name]) return decodeURIComponent(cookies[c_name])
  return ''
}
/**
 * @function 쿠키설정하기
 * @param string    c_name            //*쿠키의 key(키)
 * @param string    value             //*쿠키의 value(값)
 * @param string    exdays            //*유효기간
 */
export const setCookie = (c_name: string, value: string, exdays: number) => {
  const exdate = new Date()
  if (exdays !== null) exdate.setDate(exdate.getDate() + Number(exdays))
  const encodedValue = encodeURIComponent(value)
  const c_value = encodedValue + (exdays == null ? '' : '; expires=' + exdate.toUTCString())
  document.cookie = c_name + '=' + c_value + '; path=/; secure;'
}
/**
 * @function 07앞자리'0'붙이기
 * @param data      //앞자리
 * @param num       //채우고자하는 자릿수
 * @example leadingZeros(7,2) => 07
 */
export const leadingZeros = (data: number, num: number): string => {
  let zero = ''
  let _data = data.toString()
  if (_data.length < num) {
    for (var i = 0; i < num - _data.length; i++) {
      zero += '0'
    }
  }
  return zero + data
}
/**
 * @function 숫자,표시
 * @param x     //자리숫
 * @example     // 3,000,000 3단위수로 ,붙이기
 */
export const addComma = (x: number): string => {
  if (x === undefined || x === null) return '0'
  try {
    var parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  } catch {
    return '0'
  }
}
/**
 * @function 휴대폰번호010-3456-1234형태로"-"추가3자리4자리가능
 * @param phone //전화번호
 */
export const phoneAddHypen = (phone: string): string => {
  return phone
    .replace(/[^0-9]/g, '')
    .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/, '$1-$2-$3')
    .replace('--', '-')
}
/**
 * @function   말줄임표...처리
 */
export const makeEllipsis = (str: string, limit: number): string => {
  return (str = str.length > limit ? str.substr(0, limit) + '...' : str)
}
