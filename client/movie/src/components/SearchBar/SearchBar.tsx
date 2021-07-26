import { useState } from 'react';
import { TextField } from '@material-ui/core';
import MovieView from '../MovieView/MovieView';
import { MovieType } from '../Types/MovieType';
import { api } from '../apis/movieApi';

const SearchBar = () => {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<MovieType>()


  
  const searchFunction = async (e: string) => {
    setSearch(e);
      setSearchResults(await api(e))
  };
  
return (
  <>
  <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search" color="secondary"
      onChange={e => searchFunction(e.target.value)}
      style={{width: "100%",}} />
  </form>
  {(searchResults && search) && (
    <div style={{display: 'block'}}>
    <MovieView movie={searchResults} />
    </div>
    )}
  </>);

}


export default SearchBar;