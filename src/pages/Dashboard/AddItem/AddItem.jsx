import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { PiFanFill } from "react-icons/pi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imageHoastinKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHoastinKey}`;

const AddItem = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, register } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // upload image to imgbb and get image url
    setLoading(true);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingAPI, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.url,
        category: data.category,
        price: data.price,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Menu Added Successfully Done!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Menu | Dashboard</title>
      </Helmet>
      <div className="py-10">
        <SectionTitle
          subTitle={"---What's new?---"}
          title={"ADD AN ITEM"}
        ></SectionTitle>
        <div className="bg-gray-200 p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Recipe name"
                className="input"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  defaultValue={"default"}
                  className="select w-full capitalize"
                >
                  <option disabled value={"default"}>
                    Category
                  </option>
                  <option>offered</option>
                  <option>dessert</option>
                  <option>pizza</option>
                  <option>salad</option>
                  <option>soup</option>
                  <option>drinks</option>
                </select>
              </div>
              {/* price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-36"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="form-control">
              <input
                {...register("image", { required: true })}
                type="file"
                accept="image/*"
                className="file-input w-full max-w-xs"
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn w-[140px] bg-yellow-700 text-white hover:bg-yellow-700"
              >
                {loading ? (
                  <PiFanFill className="animate-spin" />
                ) : (
                  <>
                    Add Item <GiForkKnifeSpoon />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
