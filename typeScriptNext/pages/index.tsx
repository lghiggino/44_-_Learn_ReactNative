import React from "react";
import IndexScreen from "../screens";
import axios from "axios";

export default function IndexPage({ usersFromStaticProps }) {
  return <IndexScreen usersFromStaticProps={usersFromStaticProps} />
}

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  const usersFromStaticProps = await res.data
  return {
    props: {
      usersFromStaticProps
    }
  }
}