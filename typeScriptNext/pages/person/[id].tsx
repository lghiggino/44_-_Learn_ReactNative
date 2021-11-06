import React from "react"
import axios from "axios"
import PersonScreen from "../../screens/person"
import { GetStaticPaths, GetStaticProps } from "next"


const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = await res.data

    const paths = data.map(person => {
        return {
            params: { id: person.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}
const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params.id
    const res = await axios.get("https://jsonplaceholder.typicode.com/users" + id)
    const data = await res.data
    console.log("data from getStaticProps", data)

    return {
        props: { person: data }
    }
}

export default function PersonPage({ person }) {
    return (
        <PersonScreen person={person} />
    )
}
