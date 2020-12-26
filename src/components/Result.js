import React from 'react'

const Result = ({ result ,win,lose,draw}) => {
    return (
        <div>
            結果:{result}
            <br/>
            勝敗：{win}勝、{lose}敗、{draw}分
        </div>
    )
}
export default Result