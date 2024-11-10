import React from 'react'

const Calculator = (props) => {
  return (
    <div>
        <form>
        <div>
          <input type="text" value='AC'readOnly='true' className="button green" onClick={(e) => {props.setRes('')}}/>
          <input type="text" value='DEL' readOnly='true' className="button green"  onClick={(e) => {props.setRes(props.res.slice(0, -1))}}/>
          <input type="text" value='%' readOnly='true' className="button gray" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='+' readOnly='true' className="button gray" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
        </div>
        <div>
          <input type="text" value='7' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='8' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='9' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='-' readOnly='true' className="button gray" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
        </div>
        <div>
          <input type="text" value='4' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='5' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='6' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='*' readOnly='true' className="button gray" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
        </div>
        <div>
          <input type="text" value='1' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='2' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='3' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='/' readOnly='true' className="button gray" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
        </div>
        <div>
          <input type="text" value='.' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='00' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='0' readOnly='true' className="button" onClick={(e) => { props.setRes(props.res + e.target.value) }}/>
          <input type="text" value='=' readOnly='true' className="button yellow" onClick={(e) => { props.setRes(eval(props.res)) }}/>
        </div>

      </form>
    </div>
  )
}

export default Calculator