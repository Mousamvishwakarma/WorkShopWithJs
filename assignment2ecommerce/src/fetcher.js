import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const callApi = async() => {
        const res = await fetch(url)
        const response = await res.json()
        console.log(response)
        setData(response)
    }

    useEffect(()=> {callApi()},[url])
    return [data]

}