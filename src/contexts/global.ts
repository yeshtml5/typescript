/**
 * @reference https://github.com/streamich/react-use/blob/HEAD/docs/createStateContext.md
 */

import {createStateContext} from 'react-use'

type Props = {
  isLogin: boolean
  [key: string]: any
}
// Global Default
const defaultValue = {
  isLogin: false //로그인여부
}
const [useGlobal, useGlobalProvider] = createStateContext<Props>(defaultValue)

export const useGlobalStore = useGlobal
export const GlobalProvider = useGlobalProvider
