import Image from "next/legacy/image";
import styles from "../../styles/movieDetails.module.scss";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from "next/link";
function movieDetails({ movie }) {
  console.log("movie", movie);
  return (
    <div
      className={styles.movie_detail}
  
    >
      <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt="movie Banner" layout="fill" priority quality={10}/>
     
      <div className={styles.movie__info}>
      <Link href={"/"} style={{display:"contents"}}>
      <KeyboardBackspaceIcon color="white" /> 
      </Link>
       
      
        <h1>{movie.original_title}</h1>
        <p className={styles.rating}>Rating : 4.5/5</p>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.release_wrapper}>
          <span className={styles.release}>Release Data</span>
          <span> {movie.release_date}</span>
        </div>
        <div >
          <span className={styles.release_language}>Original Language</span>
          <span>
            {movie.spoken_languages.map((item) => item.english_name).join(",")}
          </span>
        </div>
      </div>
      <div className={styles.movie__poster}>
        {/* <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="title"
          width={600}
          height={500}
        />
                    <Image src={playButton} alt="playButton" width={30} height={30} objectFit="contain" /> */}

        
      </div>
    </div>
  );
}

export default movieDetails;

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=6e37d364da090a453e6c12697bcfcde7&page=1`
  );
  const result = await response.json();
  const params = result.results.map(item =>{
    return {
      params:{
        id:`${item.id}`
      }
    }
  })


  return {
    paths:params,
    fallback:false
  }
}

export const getStaticProps = async (content) => {
  const { params } = content;
  const {id} = params
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6e37d364da090a453e6c12697bcfcde7`
  );
  const result = await response.json();

  return {
    props: {
      movie: result,
    },
  };
};
