import Image from "next/image";
import React from "react";
import styles from "../styles/movies.module.scss";
import playButton from "../assets/images/playButton.svg";
import StarIcon from "@mui/icons-material/Star";
import imgNotFound from "../assets/images/notFoundImage.png";
import Link from "next/link";

function Movies({ movie }) {
  const imageSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : imgNotFound;
  return (
    <div className={styles.movie_wrapper}>
      <Link href={`/movies/${movie.id}`} className={styles.link_wrapper}>
        <div>
          {" "}
          <Image
            src={imageSrc}
            alt={movie.title}
            placeholder="blur"
            blurDataURL={imageSrc}
            width={250}
            height={250}
            objectFit="fill"
            loading={"lazy"}
          />
          <div className={styles.image__subdetail}>
            <div className={styles.image__titles}>
              <span className={styles.image__main__titles}>{movie.title}</span>
              <span className={styles.subtitle__details}>
                <StarIcon className={styles.icon_star} />{" "}
                {parseInt(movie.vote_average)}/10
                <span className={styles.imdb}>IMDb</span>
              </span>
            </div>
            <div className={styles.image__playbtn}>
              <Image
                src={playButton}
                alt="playButton"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movies;
