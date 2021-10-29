import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    async function getData() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setResponse(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { response, error, loading }
}