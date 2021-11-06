import React from "react"
import axios from "axios"
import PersonScreen from "../../screens/person"

export default function PersonPage({ userFromStaticProps }) {
    return (
        <PersonScreen person={userFromStaticProps} />
    )
}

export async function getStaticProps(context: any) {
    const id = context.params.id
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userFromStaticProps = await res.data
    return {
        props: {
            userFromStaticProps
        }
    }
}

export async function getStaticPaths() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const usersFromStaticProps = await res.data

    const paths = usersFromStaticProps.map(person => {
        console.log("from paths", person.name, person.id)
        return {
            params: { id: person.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}
