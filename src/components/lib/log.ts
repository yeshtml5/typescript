/**
 * 로그남기는 유틸함수
 */

type Log = {
  data: object
  option?: object
}
/**
 *
 * @param param
 */
export const log = (data: object | string | number, option?: string): void => {
  console.log(`%c ${JSON.stringify(data, null, 1)}`, 'font-size:14px;color:blue')
}
/**
 *
 * @param param
 */
export const warn = ({data, option}: Log) => {
  console.warn(`%c ${JSON.stringify(data, null, 1)}`, 'font-size:14px;color:blue')
}
