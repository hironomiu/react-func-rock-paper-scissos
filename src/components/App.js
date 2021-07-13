import React, { useState } from "react"
import Hand from "./Hand"
import Result from "./Result"

import {
  IMAGE_DIR,
  TITLE,
  HAND_TYPE,
  START_PHRASE,
  RESULT_TYPE,
  ROCK_BASE64,
} from "../const"
import "../css/App.css"

const judge = (myHand, opHand) => {
  if (myHand === opHand) return RESULT_TYPE[0]
  if (
    (myHand === HAND_TYPE[0] && opHand === HAND_TYPE[1]) ||
    (myHand === HAND_TYPE[1] && opHand === HAND_TYPE[2]) ||
    (myHand === HAND_TYPE[2] && opHand === HAND_TYPE[0])
  ) {
    return RESULT_TYPE[1]
  }
  return RESULT_TYPE[2]
}

const App = () => {
  const [myHand, setMyHand] = useState(HAND_TYPE[0])
  const [opHand, setOpHand] = useState(HAND_TYPE[0])
  const [result, setResult] = useState(START_PHRASE)
  const [winCount, setWinCount] = useState(0)
  const [loseCount, setLoseCount] = useState(0)
  const [drawCount, setDrawCount] = useState(0)

  const hand = (e) => {
    e.preventDefault()
    if (!e.target.name) return
    const myHand = e.target.name
    const opHand = HAND_TYPE[Math.floor(Math.random() * HAND_TYPE.length)]
    const result = judge(myHand, opHand)

    if (result === RESULT_TYPE[0]) {
      setDrawCount(drawCount + 1)
    } else if (result === RESULT_TYPE[1]) {
      setWinCount(winCount + 1)
    } else {
      setLoseCount(loseCount + 1)
    }

    setMyHand(myHand)
    setOpHand(opHand)
    setResult(result)
  }

  const MyHand = () => {
    return (
      <>
        {HAND_TYPE.map((hand_type, index) => (
          <button key={index} type="button" onClick={hand}>
            <img
              src={IMAGE_DIR + hand_type + ".png"}
              alt={hand_type}
              name={hand_type}
            />
          </button>
        ))}
      </>
    )
  }

  return (
    <>
      <h1>
        <img src={ROCK_BASE64} alt="" />
        {TITLE}
        <img src={IMAGE_DIR + "paper.png"} alt="" />
      </h1>
      <Hand hand={opHand} />
      <Result
        result={result}
        winCount={winCount}
        drawCount={drawCount}
        loseCount={loseCount}
      />
      <Hand hand={myHand} />
      <MyHand />
    </>
  )
}

export default App
