/**
 * @example
 * dev,production mode 체크
 */
let run_mode = 'Development-mode'
if (process.env.REACT_APP_NODE_ENV === 'local') run_mode = 'Development-mode'
if (process.env.REACT_APP_NODE_ENV === 'production') run_mode = 'Production-mode'

console.log('%c' + run_mode, 'width:100%;font-size:12px;padding:2px 10px;color:#111;background:orange;')
//---------------------------------------------------------------------

export default class Config {}
