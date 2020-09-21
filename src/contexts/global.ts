/**
 * @reference https://github.com/streamich/react-use/blob/HEAD/docs/createStateContext.md
 */

import {createStateContext} from 'react-use'

type Props = {
  [key: string]: string | number | boolean | null | {}
}

const initalData = {}
const [useGlobal, useGlobalProvider] = createStateContext<Props>(initalData)

export const useGlobalStore = useGlobal
export const GlobalProvider = useGlobalProvider
