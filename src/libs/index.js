import { HAND_TYPE, RESULT_TYPE } from "../const"

export const judge = (myHand, opHand) => {
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
