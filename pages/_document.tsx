import Document, { Html, Head, Main, NextScript } from 'next/document'
import { lightTheme } from '@zoralabs/zord'

class MyDocument extends Document {
  render() {
    return (
      <Html className={lightTheme}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
