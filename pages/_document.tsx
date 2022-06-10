import Document, { Html, Head, Main, NextScript } from 'next/document'
import { lightTheme, darkTheme } from '@zoralabs/zord'

class MyDocument extends Document {
  render() {
    return (
      <Html className={darkTheme}>
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
