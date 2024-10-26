import Navibar from './components/Navibar/Navibar';
import MainContent from './components/MainContent/MainContent';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Error from "./pages/Error/Error"
import Anime from "./pages/Anime/Anime"
function App() {
  const API_URL = process.env.ANIME_API_URL;
  const [animeList,setAnimeList] = useState([]);
  const [currentList,setCurrentList] = useState([]);
  const [searchInput,setSearchInput] = useState('');
  const [isFetched,setIsFetched] = useState("load");
  const [selectedAnime,setSelectedAnime] = useState(null);
  // Hook to fetch data initially
  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if(!response.ok) throw Error;
        const data = await response.json();
        setAnimeList(data.data);
        console.log(data.data);
        setIsFetched("fetched");
      }catch(error){
        console.log(error)
        setIsFetched("error")
      }
    }
    fetchData();
  },[]);
//Hook to update the list each time input changes
  useEffect(()=>{
    if(searchInput === ''){
      setCurrentList(animeList);
    }
    else{
      const newList = animeList.filter((anime)=>{
        return anime.title.toLowerCase().includes(searchInput.toLowerCase());
      })
      setCurrentList(newList);
    }
  },[searchInput,animeList]);
  return (
    <Router>
      <Navibar
          searchInput = {searchInput}
          setSearchInput = {setSearchInput}
          />
      <Routes>
        <Route path="/" element={
          <MainContent
          isFetched = {isFetched}
          currentList = {currentList}
          setSelectedAnime = {setSelectedAnime}
          />
        }/>
        <Route path="/anime" element={<Anime anime={selectedAnime}/>}/>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    
    </Router>
  );
}

export default App;
