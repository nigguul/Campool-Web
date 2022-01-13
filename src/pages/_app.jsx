import '../styles/globals.css'
//import styles from '../styles/Home.modules.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
          <title>CAMPOOL</title>
          <link rel="favicon.ico" href="favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<<<<<<< HEAD
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
=======
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
>>>>>>> e9737dc95c733fc6454cd974017e53516da2f7db
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
