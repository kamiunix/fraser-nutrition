import '../styles/globals.css'
// import 'semantic-ui-css/semantic.min.css'

function MyApp({
                 Component,
                 pageProps: { session, ...pageProps },
}) {
    return (
        <>
            <link rel="icon" href="/favicon.png" sizes="any" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
