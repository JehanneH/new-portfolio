import Layout from "../components/Layout";
import ArtLayout from "../components/ArtLayout";
import { ThemeProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/art')) {
    return (
      <ThemeProvider>
        <ArtLayout>
          <Component {...pageProps} />
        </ArtLayout>
      </ThemeProvider>
    );
}
return (
  <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);
}

export default MyApp;
