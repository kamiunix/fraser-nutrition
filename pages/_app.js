import '../styles/globals.css'
// import 'semantic-ui-css/semantic.min.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

function MyApp({
                 Component,
                 pageProps: { session, ...pageProps },
}) {
    return (
        <>
            <Anlytics/>
            <SpeedInsights/>
            <link rel="shortcut icon" href="/images/favicon.png" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
