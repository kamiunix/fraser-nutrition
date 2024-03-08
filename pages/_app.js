import '../styles/globals.css'
// import 'semantic-ui-css/semantic.min.css'

function MyApp({
                 Component,
                 pageProps: { session, ...pageProps },
}) {
    return (
        <>
            <link rel="shortcut icon" href="/images/favicon.png" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
