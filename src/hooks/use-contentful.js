import {useState, useEffect} from 'react'

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

export default function useContentful(query){
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
  useEffect(() => {
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
      },
      body: JSON.stringify({ query })
    }).then(res => res.json())
      .then(({data, errors}) => {
        if(data) setData(data)
        if(errors) setErrors(errors)
      }).catch( err => setErrors([err]))
  }, [query]);

  console.log(data, errors)
  return { data, errors }
}