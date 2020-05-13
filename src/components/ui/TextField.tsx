import React, {useRef} from 'react'

//---------------------------------------------------------------------
interface Props {
  text: string
  fn?: () => string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
//---------------------------------------------------------------------

export const TextField: React.FC<Props> = ({text, handleChange}: Props) => {
  //---------------------------------------------------------------------
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLInputElement>(null)
  //---------------------------------------------------------------------
  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} onChange={handleChange} value={text} />
    </div>
  )
}
