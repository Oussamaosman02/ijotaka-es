import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>

        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
        <meta name='description' content='Agencia de creación digital' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />

        <meta property='og:title' content='IJKAgency' />
        <meta property='og:site_name' content='IJKA' />
        <meta property='og:description' content='Agencia de creación digital' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:url' content='https://ijotaka.es' />
        <meta property='og:image' content='/android-chrome-512x512.png' />
        <meta property='og:image:width' content='512' />
        <meta property='og:image:height' content='512' />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
