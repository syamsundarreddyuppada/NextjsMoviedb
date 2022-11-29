import Image from "next/legacy/image";
import React, { lazy } from "react";
import styles from '../styles/movies.module.scss'
import playButton from "../assets/images/playButton.svg"
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from "next/router";
import Link from "next/link";

function Movies({ movie }) {
    const router = useRouter();
  return (
    <div className={styles.movie_wrapper} >
        <Link href={`/movies/${movie.id}`} className={styles.link_wrapper}>
        <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} priority placeholder="blur" blurDataURL={playButton} width={250} height={250} objectFit="fill"/>
      <div className={styles.image__subdetail}>
        <div className={styles.image__titles} >
            <span className={styles.image__main__titles}>{movie.title}</span>
            <span className={styles.subtitle__details}><StarIcon className={styles.icon_star} /> 4.5/5</span>
        </div>
        <div className={styles.image__playbtn}>
            <Image src={playButton} alt="playButton" width={30} height={30} objectFit="contain" />
        </div>
      </div>
        </Link>
      
    </div>
  );
}

export default Movies;
