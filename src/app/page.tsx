import NavBar from "@/components/NavBar";
import Footer from "@/pages/footer";
import MainSection from "@/pages/mainSection";
import ProductOffer from "@/pages/productOffer";

export default function Home() {
  return (
    <main className='mx-96'>
      <NavBar/>
      <MainSection/>
      <ProductOffer/>
      <Footer />
    </main>
  )
}
