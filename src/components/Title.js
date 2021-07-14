import { ROCK_BASE64, TITLE, IMAGE_DIR } from "../const"

const Title = () => {
  return (
    <div>
      <h1>
        <img src={ROCK_BASE64} alt="" />
        {TITLE}
        <img src={IMAGE_DIR + "paper.png"} alt="" />
      </h1>
    </div>
  )
}

export default Title
