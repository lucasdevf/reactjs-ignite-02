import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title
    }
  }
`

function App() {

  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data)

  return (
   <h1 className="text-2xl font-bold text-violet-500">Hello ignite</h1>
  )
}

export default App