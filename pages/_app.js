import Layout from "../components/Layout";
import CreativityLayout from "../components/CreativityPage/CreativityLayout";
import { ThemeProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/creativity')) {
    return (
      <ThemeProvider>
        <CreativityLayout>
          <Component {...pageProps} />
        </CreativityLayout>
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
