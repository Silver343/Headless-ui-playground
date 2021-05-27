import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Headless UI Playgound</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <body className="bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument