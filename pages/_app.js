import '../styles/globals.css'
// import 'semantic-ui-css/semantic.min.css'

function MyApp({
                 Component,
                 pageProps: { session, ...pageProps },
}) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
