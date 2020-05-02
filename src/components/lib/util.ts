/**
 * 유틸함수
 */

/**
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
