import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/Galery";

const Detail = () => {
  const [image, setImage] = useState(null);
  const id = useParams().id;
  const handleGetDetail = (id) => {
    const res = data.find((item) => item.id === parseInt(id));
    return setImage(res);
  };

  useEffect(() => {
    handleGetDetail(id);
  }, [id]);

  return (
    <section className="pt-32 bg-white-bone pb-10">
      <div className="xl:container mx-auto px-5">
        {image && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <img
              src={image.src}
              className="my-auto max-h-[800px] rounded-custom mx-auto w-11/12 object-cover"
              alt={image.title}
            />
            <div className="mt-10 px-5">
              <h2 className="text-6xl font-bold tracking-wide">
                {image.title}
              </h2>

              <h3 className="mt-2">categorized as our {image.category}</h3>

              <div className="grid grid-cols-3 gap-5 md:gap-10 text-xs my-5">
                <div className="flex mx-auto items-center">
                  <img
                    className="inline object-cover w-10 h-10 mr-2 rounded-full"
                    src="https://source.boringavatars.com/"
                    alt="Profile"
                  />
                  <div>
                    <h3 className="font-semibold">{image.author}</h3>
                    <h4>Indonesia</h4>
                  </div>
                </div>
                <div className="mx-auto text-center my-auto ">
                  <h3 className="font-semibold">Views</h3>
                  <p>45.343</p>
                </div>
                <div className="mx-auto text-center my-auto">
                  <h3 className="font-semibold">Downloads</h3>
                  <p>12.321</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1">description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia cumque quae modi aperiam quasi velit neque repellat
                  nihil? Unde iste nemo fugit, laboriosam explicabo autem quae
                  dolores maxime suscipit, expedita non deserunt, atque aliquam
                  debitis. Quidem voluptatem inventore iusto quaerat? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, commodi eligendi animi qui unde facilis culpa
                  enim obcaecati distinctio rerum aperiam quisquam, sit ex non
                  consequuntur vitae? Ad, explicabo quasi? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Asperiores facilis modi
                  repellendus deserunt voluptas nihil non fuga nobis est id?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Detail;
