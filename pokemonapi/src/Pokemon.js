import axios from "axios";
import React from "react";
import pokemon from './assets/download.jpg'
const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

export default function App() {
  const [post, setPost] = React.useState([]);
  const [searchField, setSearchField] = React.useState("");
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results);
      console.log("response"+ JSON.stringify(response.data.results));
    });
  }, []);
  const handleChange = e => {
    setSearchField(e.target.value);
  
  };
  const filteredPersons = post.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );
  function searchList() {
    
      filteredPersons.map( (option) => {
        return(
     <div style={{margin: '1%', padding: '1%', alignSelf: 'center'}}>
            <div style={{alignSelf: 'center'}} class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={pokemon} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{option.name}</div>
    
    </div>
    </div>
    </div>
      
    );
      })
}


  if (!post) return null;

  return (

    post.map( (option)=> {
        return(

            <div>
            
            <div style ={{display: 'flex', alignItems: 'center', flex: 1, alignContent: 'center', flexDirection: 'column'}}>
   
          {searchList()}
        <div style={{margin: '1%', padding: '1%', alignSelf: 'center'}}>
            <div style={{alignSelf: 'center'}} class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={pokemon} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{option.name}</div>
    {/* <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p> */}
  </div>
  {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>
    
  
      </div>
      </div>
      </div>
      
    )})
   
  );
}