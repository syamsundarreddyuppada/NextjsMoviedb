import Head from "next/head";
import styles from "../styles/Home.module.scss";
import banner from "../assets/images/banner.png";
import Image from "next/image";
import Movies from "../component/Movies";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import noPageFound from "../assets/images/nodatafound.png";

export default function Home({ data, search }) {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState(data);

  const movieListPage = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=6e37d364da090a453e6c12697bcfcde7&query=${search}&page=${page}`
    );
    const parsedResult = await response.json();

    setMovieList(parsedResult);
  };

  const searchApi = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6e37d364da090a453e6c12697bcfcde7&query=${search}&page=${page}`
    );
    const parsedData = await response.json();
    setMovieList(parsedData);
  };

  useEffect(() => {
    if (search.length) {
      searchApi();
    } else {
      movieListPage();
    }
  }, [page, search]);

  if (!movieList?.results?.length) {
    return (
      <Image
        src={noPageFound}
        alt="No Page Found"
        layout="fill"
        priority
        objectFit={"contain"}
      />
    );
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.main__img}>
          <Image src={banner} alt={"banner"} layout="fill" priority />
        </div>
        <div className={styles.container__movies__wrapper}>
          <span className={styles.popular_movies}>Trending</span>
          <div className={styles.movie__card__wrapper}>
            {movieList.results.slice(0, 16).map((movie, index) => (
              <div className={styles.movie__card} key={index}>
                <Movies movie={movie} key={index} />
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <Pagination
              count={movieList.total_pages}
              onChange={(e, page) => setPage(page)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// export async function getStaticProps() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=6e37d364da090a453e6c12697bcfcde7&page=1`
//   );
//   const result = await response.json();
//   return {
//     props: {
//       data: result,
//     },
//   };
// }

export async function getServerSideProps({ req, res }) {
  try {
    const routeApi = await fetch("https://edge-personal-api.vercel.app/api/homemoviedb");
    const result = await routeApi.json();
    if (!req.cookies.token) {
      res.writeHead(302, { location: "/login" });
      res.end();
    }

    return {
      props: {
        data: result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
