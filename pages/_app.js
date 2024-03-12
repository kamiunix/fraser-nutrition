import '../styles/globals.css'
// import 'semantic-ui-css/semantic.min.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({
                 Component,
                 pageProps: { session, ...pageProps },
}) {
    return (
        <>
            <SpeedInsights/>
            <link rel="shortcut icon" href="/images/favicon.png" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
