import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import MovieView from '../MovieView/MovieView';
import { MovieType } from '../Types/MovieType';
import { populars } from '../models/populars';
import { api } from '../apis/movieApi';

const PopularMovies = () => {
  const [ popularsMovies, setPopulars ] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading ] = useState<boolean>(false)

  useEffect(() => {
      for(let i = 0; i < 10 ; i++ ){
        if(popularsMovies.length < 10){
          pushToPopularMovies(populars[i].Title);
        }
      }
      setIsLoading(false)
  }, [isLoading])

  const setPopularMovies = () => {
    setIsLoading(true)
  }

  const pushToPopularMovies = async (e: string) => {
      popularsMovies.push(await api(e))
  };


  const moviewToShow =   popularsMovies.map(item => {
    return <MovieView movie={item} key={item.Poster} />
  });
  
return (
  <>
{!isLoading && popularsMovies.length > 0 ? 
<>
  <h1>Popular Movies</h1>
  {moviewToShow}
</> : 
<Button variant="contained" color="secondary" onClick={setPopularMovies}>
  Popular Movies
</Button>}
  </>);

}


export default PopularMovies;