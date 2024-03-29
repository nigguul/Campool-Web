import '../styles/globals.css'
//import styles from '../styles/Home.modules.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
          <title>CAMPOOL</title>
          <link rel="favicon.ico" href="favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
