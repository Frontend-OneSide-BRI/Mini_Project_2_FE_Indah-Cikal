import React from "react";

export default function Modal({ showModal, setShowModal, item }) {
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-3xl px-4">
              <div className="border-0 rounded-custom shadow-lg w-full bg-white-bone grid grid-cols-1 md:grid-cols-2 md:gap-4 overflow-hidden">
                <div
                  className="h-[400px] md:h-[500px] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <button
                    className="block md:hidden p-1 border-0 float-right text-3xl font-semibold mr-8 mt-5"
                    onClick={setShowModal}
                  >
                    <span className="text-white-bone">×</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto text-dark-font">
                  <button
                    className="hidden md:block p-1 border-0 float-right text-3xl font-semibold "
                    onClick={setShowModal}
                  >
                    <span className=" text-black/25">×</span>
                  </button>
                  <div className="md:mt-7">
                    <h3 className="text-2xl pt-3 font-bold">{item.title}</h3>
                    <h4 className="text-md">
                      Categorized as Our {item.category}
                    </h4>
                    <p className="my-4 text-md leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus, nostrum. Magnam reprehenderit ipsam molestiae
                      iusto similique, dolore expedita error optio quas, odit
                      blanditiis molestias vitae, doloremque commodi voluptatem
                      nulla tempora?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" fixed inset-0 z-40 bg-black/75"></div>
        </>
      )}
    </>
  );
}
