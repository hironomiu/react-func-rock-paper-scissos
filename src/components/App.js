import React, { useState } from 'react'
import Hand from './Hand'
import Result from './Result'

import {
  IMAGE_DIR,
  TITLE,
  HAND_TYPE,
  START_PHRASE,
  RESULT_TYPE,
  ROCK_BASE64,
} from "../const"
import '../css/App.css'

const judge = (myHand, opHand) => {
  if (myHand === opHand) {
    return RESULT_TYPE[0]
  } else if ((myHand === HAND_TYPE[0] && opHand === HAND_TYPE[1]) ||
    (myHand === HAND_TYPE[1] && opHand === HAND_TYPE[2]) ||
    (myHand === HAND_TYPE[2] && opHand === HAND_TYPE[0])) {
    return RESULT_TYPE[1]
  } else {
    return RESULT_TYPE[2]
  }
}

const App = () => {
  const [myHand, setMyHand] = useState(HAND_TYPE[0])
  const [opHand, setOpHand] = useState(HAND_TYPE[0])
  const [result, setResult] = useState(START_PHRASE)
  const [win, setWin] = useState(0)
  const [lose, setLose] = useState(0)
  const [draw, setDraw] = useState(0)

  const hand = e => {
    e.preventDefault()
    if (!e.target.name) return
    const myHand = e.target.name
    const opHand = HAND_TYPE[Math.floor(Math.random() * HAND_TYPE.length)]
    const result = judge(myHand, opHand)

    if (result === RESULT_TYPE[0]) {
      setDraw(draw + 1)
    } else if (result === RESULT_TYPE[1]) {
      setWin(win + 1)
    } else {
      setLose(lose + 1)
    }

    setMyHand(myHand)
    setOpHand(opHand)
    setResult(result)
  }

  const MyHand = () => {
    return (
      <div>
        {HAND_TYPE.map((hand_type,index) => { return <button key={index} type="button" onClick={hand}><img src={IMAGE_DIR + hand_type + ".png"} alt={hand_type} name={hand_type} /></button> })}
      </div>
    )
  }

  return (
    <>
      <div>
        <h1><img src={ROCK_BASE64} alt="" name={hand} />{TITLE}<img src={IMAGE_DIR + "rock.png"} alt="" name={hand} /></h1>
        <br />
        <Hand hand={opHand} />
        <br />
        <Result result={result} win={win} draw={draw} lose={lose} />
        <br />
        <Hand hand={myHand} />
        <br />
        <MyHand />
      </div>
    </>
  )
}


export default App;
