import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PiFanFill } from "react-icons/pi";

const imageHoastinKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHoastinKey}`;

const UpdateItem = () => {
  const { name, category, price, recipe, _id } = useLoaderData();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm();
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
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.matchedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name} updated Successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Update Menu | Dashboard</title>
      </Helmet>
      <div className="py-10">
        <SectionTitle
          subTitle={"---What's new?---"}
          title={"UPDATE AN ITEM"}
        ></SectionTitle>
        <div className="bg-gray-200 p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
                defaultValue={name}
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
                  defaultValue={category}
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
                  defaultValue={price}
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
                defaultValue={recipe}
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
                    Update Item <GiForkKnifeSpoon />
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

export default UpdateItem;
