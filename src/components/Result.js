const Result = ({ result, winCount, loseCount, drawCount }) => {
  return (
    <div>
      結果:{result}
      <br />
      勝敗：{winCount}勝、{loseCount}敗、{drawCount}分
    </div>
  )
}
export default Result
