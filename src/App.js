import React from 'react';
import useContentful from './hooks/use-contentful'
import Person from './components/Person';
import Bookmark from './components/Bookmark';

const query =  `
query {
  personCollection{
    items{
      name
      age
      linkedin
      github
      bio{
        json
      }
      photo{
        title
        url(transform:{
          width:120
          height:120
        })
      }
    }
  }
  bookmarksCollection(limit:100){
    items{
      sys{
        id
      }
      title
      url
      comment
      tagsCollection{
        items{
          title
        }
      }
    }
  }
  
}
`



const App = () => {
    let {data, errors} = useContentful(query)
  console.log(data)
  if(errors) return <h5 style={{color:"red"}}>
    {errors.map( err => err.message).join(" , ")}
   </h5>

  if(!data) return <div>loading ...</div>
  return (
    <div>
      <Person person={data.personCollection.items[0]} />
   {/*    {data.personCollection.items.map((p, i) => <div key={i}>
        <Person person={p} />  
      </div> )} */}
      <Bookmark bookmark={data.bookmarksCollection.items} />
    </div>
  );
}

export default App;