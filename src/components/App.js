import { useState } from "react"
import Hand from "./Hand"
import Result from "./Result"
import MyHand from "./MyHand"

import {
  IMAGE_DIR,
  TITLE,
  HAND_TYPE,
  START_PHRASE,
  ROCK_BASE64,
} from "../const"
import "../css/App.css"

const App = () => {
  const [myHand, setMyHand] = useState(HAND_TYPE[0])
  const [opHand, setOpHand] = useState(HAND_TYPE[0])
  const [result, setResult] = useState(START_PHRASE)
  const [winCount, setWinCount] = useState(0)
  const [loseCount, setLoseCount] = useState(0)
  const [drawCount, setDrawCount] = useState(0)

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
      <MyHand
        setDrawCount={setDrawCount}
        setWinCount={setWinCount}
        setLoseCount={setLoseCount}
        setMyHand={setMyHand}
        setOpHand={setOpHand}
        setResult={setResult}
      />
    </>
  )
}

export default App
