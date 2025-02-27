import {
  Hero,
  Services,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
  PopularProduct,
  SpecialOffer,
} from "./sections";

import NavBar from "./components/NavBar";
const App = () => (
  <main className="relative">
    <NavBar />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x padding sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />{" "}
    </section>
  </main>
);

export default App;
