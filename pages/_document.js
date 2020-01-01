import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { FONT_AWESOME } from '../constants';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const {
      REL, HREF, INTEGRITY, CROSS_ORIGIN,
    } = FONT_AWESOME;
    return (
      <Html>
        <Head>
          <link
            rel={REL}
            href={HREF}
            integrity={INTEGRITY}
            crossOrigin={CROSS_ORIGIN}
          />
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
