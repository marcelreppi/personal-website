import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head prefix="og: http://ogp.me/ns#">
          <script
            async
            defer
            data-website-id="b300b400-004a-409e-97b3-e48b5f6eee7e"
            src="https://umami.marcelreppi.com/umami.js"
            data-do-not-track="true"
            data-domains="marcelreppi.com"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
