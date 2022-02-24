import Head from "next/head";
// import '../public/static/css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BLOG-BYTE</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        {/* css link*/}
        <link rel="stylesheet" href="/static/css/styles.css" />

        {/* favicon */}
        <link rel="shortcut icon" href="static/images/blog.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
