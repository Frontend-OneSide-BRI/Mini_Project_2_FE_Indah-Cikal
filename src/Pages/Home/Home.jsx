import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "./Home.css";
import Galery from "../../Components/Galery/Galery";

const Home = () => {
  return (
    <>
      <Carousel />
      <section className="about py-10 bg-white-bone">
        <div className="container mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 gap-10 min-h-[300px]">
          <div
            className="parallax rounded-custom flex flex-col justify-center text-white-bone text-center px-5 py-10"
            style={{
              backgroundImage:
                'url("https://plus.unsplash.com/premium_photo-1670422126816-fd0594135bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=917&q=80',
            }}
          >
            <h2 className="font-bold text-xl tracking-wider">
              About This Project
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, hic eveniet itaque dolorum consectetur provident
              voluptatem autem reprehenderit? Distinctio, consequatur!
            </p>
          </div>
          <div className="flex flex-col justify-center text-center px-5">
            <h2 className="font-bold text-xl tracking-wider">Who are We?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure quasi sit qui eius vel commodi odit architecto
              illum quod?
            </p>
          </div>
        </div>
      </section>

      <Galery />
    </>
  );
};

export default Home;
