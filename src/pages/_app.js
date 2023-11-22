import AboutSite from "@/components/about-site/AboutSite";
import Footer from "@/components/navigation/footer/Footer";
import Header from "@/components/navigation/header/Header";
import "@/styles/globals.css";

import { FireAuthContextProvider } from "@/context/FireAuthContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FireAuthContextProvider>
        <AboutSite />
        <div className=" w-full h-auto overflow-hidden">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </FireAuthContextProvider>
    </>
  );
}
