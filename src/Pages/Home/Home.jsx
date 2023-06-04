import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "./Home.css";
import Galery from "../../Components/Galery/Galery";

const Home = () => {
  const bg =
    "https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
  return (
    <>
      <Carousel />
      <section className="about pt-10 pb-0 bg-white-bone">
        <div className="lg:container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 ">
          <div
            className="parallax rounded-custom my-auto text-white-bone text-center px-5 md:px-10 py-10 "
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <h2 className="font-bold text-3xl tracking-wider mb-2">
              About This Project
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, hic eveniet itaque dolorum consectetur provident
              voluptatem autem reprehenderit? Distinctio, consequatur!
            </p>
          </div>
          <div className="my-auto text-center px-5 md:px-10 ">
            <h2 className="font-bold text-3xl tracking-wider mb-2">
              Who are We?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, hic eveniet itaque dolorum consectetur provident
              voluptatem autem reprehenderit? Distinctio, consequatur!
            </p>
          </div>
        </div>
      </section>
      <section className="best-artwork bg-white-bone py-10">
        <div className="text-center pb-7 text-dark-font">
          <h2 className="text-3xl font-bold tracking-wider">Our Best Work</h2>
          <p className="px-5">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
          </p>
        </div>
        <Galery category="Best Artwork" />
      </section>
    </>
  );
};

export default Home;
