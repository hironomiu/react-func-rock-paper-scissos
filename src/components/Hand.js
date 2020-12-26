import React from 'react'
import { IMAGE_DIR } from "../const"

const Hand = ({ hand }) => {
    return (
        <div>
            <img src={IMAGE_DIR + hand + ".png"} alt="" name={hand} />
        </div>
    )
}

export default Hand