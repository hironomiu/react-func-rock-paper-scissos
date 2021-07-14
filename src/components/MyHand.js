import { HAND_TYPE, IMAGE_DIR, RESULT_TYPE } from "../const"
import { judge } from "../libs"

const MyHand = ({
  setDrawCount,
  setWinCount,
  setLoseCount,
  setMyHand,
  setOpHand,
  setResult,
}) => {
  const hand = (e) => {
    e.preventDefault()
    if (!e.target.name) return
    const myHand = e.target.name
    const opHand = HAND_TYPE[Math.floor(Math.random() * HAND_TYPE.length)]
    const result = judge(myHand, opHand)

    if (result === RESULT_TYPE[0]) {
      setDrawCount((drawCount) => drawCount + 1)
    } else if (result === RESULT_TYPE[1]) {
      setWinCount((winCount) => winCount + 1)
    } else {
      setLoseCount((loseCount) => loseCount + 1)
    }

    setMyHand(myHand)
    setOpHand(opHand)
    setResult(result)
  }
  return (
    <>
      {HAND_TYPE.map((hand_type) => (
        <button key={hand_type} type="button" onClick={(e) => hand(e)}>
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

export default MyHand
