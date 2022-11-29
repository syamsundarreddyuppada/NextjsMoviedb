import Layouts from '../component/Layouts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts >
    <Component {...pageProps} />
    </Layouts>
  )
  
}

export default MyApp
