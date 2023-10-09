import Footer from "@/components/navigation/footer/Footer";
import Header from "@/components/navigation/header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className=" w-full h-auto overflow-auto">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
