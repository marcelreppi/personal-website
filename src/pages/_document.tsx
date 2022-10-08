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
            data-website-id="125b2ab7-46a5-4f4a-a652-23162a362b7d"
            src="https://umami.marcelreppi.com/umami.js"
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
