import Image from "next/image";
import styles from "../../styles/movieDetails.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import playButton from "../../assets/images/playButton.svg";
import StarIcon from "@mui/icons-material/Star";

import Link from "next/link";
import { useEffect, useState } from "react";
function movieDetails({ movie }) {
  const [video, setVideo] = useState(null);
  const handlePlayBtn = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=6e37d364da090a453e6c12697bcfcde7`
    );
    const result = await response.json();
    setVideo(
      result.results.filter((movie) => {
        return movie.type === "Trailer";
      })[0]
    );
  };

  useEffect(() => {
    const handlePlayBtn = (evt) => {
      const poster = document.getElementById("movie__poster__id");
      let targetEl = evt.target;
      if (targetEl !== poster) {
        setVideo(null);
      }
    };

    document.addEventListener("click", handlePlayBtn);
    return () => {
      document.removeEventListener("click", handlePlayBtn);
    };
  }, []);

  return (
    <div
      className={styles.movie_detail}
      style={{
        background: `linear-gradient(to left, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className={styles.movie__info}>
        <div className={styles.back}>
          <Link href={"/"} style={{ display: "contents" }}>
            <KeyboardBackspaceIcon color="white" />
          </Link>
        </div>

        <div>
          <h1>{movie.original_title}</h1>
          <p className={styles.rating}>
            Rating : <StarIcon className={styles.icon_star} /> 4.5/5
          </p>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.release_wrapper}>
            <span className={styles.release}>Release Data</span>
            <span> {movie.release_date}</span>
          </div>
          <div>
            <span className={styles.release_language}>Original Language</span>
            <span>
              {movie.spoken_languages
                .map((item) => item.english_name)
                .join(",")}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.movie__poster}>
        <div className={styles.subMain_img}>
          {video ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video?.key}?controls=0&autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              id="movie__poster__id"
              width={500}
              height={500}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="title"
              width={500}
              height={500}
              priority
              className={styles.subMain_img__poster}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            />
          )}

          {!video ? (
            <div className={styles.movie_playbtn} onClick={handlePlayBtn}>
              <Image
                src={playButton}
                alt="playButton"
                layout={"fill"}
                objectFit="contain"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default movieDetails;

export const getServerSideProps = async (content) => {
  const { query } = content;
  const { id } = query;
  try {
    const routeApi = await fetch(
      `https://edge-personal-api.vercel.app/api/paramIdMovie?id=${id}`
    );
    const result = await routeApi.json();

    if (!content.req.cookies.token) {
      content.res.writeHead(302, { location: "/login" });
      content.res.end();
    }

    return {
      props: {
        movie: result?.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
