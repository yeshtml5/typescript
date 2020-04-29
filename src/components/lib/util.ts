/**
 *
 */

import * as React from 'react'

export const randomRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)

export default class Util extends React.Component {
  static test(): string {
    return 'ddd'
  }
}
/**
 * @function 배열로받은숫자의총합
 * @param numbers
 */
export const sumArray = (numbers: number[]): number => {
  return numbers.reduce((acc, current) => acc + current, 0)
}
/**
 * @function 가장마지막요소가져오기
 * @param Type
 * @example const t1 = lastArray(['1', '2'])
 */
export const lastArray = <T>(array: T[]) => {
  return array[array.length - 1]
}
