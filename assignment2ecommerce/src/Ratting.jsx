import { useEffect, memo } from "react"
const Ratting = ({isTopRatting, count, review}) => {
    useEffect(()=>{
        console.log('render ratting component' , isTopRatting)
    })
    return (
    <div>
        <h3>Ratting </h3>
        <p>Rattings of the product isTopRatted: {isTopRatting ? "true": "false"}</p>
        <p>review:{review()}</p>
        <p>{count}</p>
    </div>
)}

export default memo(Ratting)