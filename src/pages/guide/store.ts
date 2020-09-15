import {createGlobalState} from 'react-use'

type Props = {
  title?: string
  type?: string | null
}

export const useGuideStore = createGlobalState<Props>({title: 'test'})
