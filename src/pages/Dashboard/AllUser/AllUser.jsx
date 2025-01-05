import React from "react";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllUser = () => {
  const axiousSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiousSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    axiousSecure.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.matchedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${users.name} is admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.delete(`users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User deleted Successfully.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>All User | Dashboard</title>
      </Helmet>
      <div className="py-10">
        <SectionTitle
          subTitle={"---How many??---"}
          title={"MANAGE ALL USERS"}
        ></SectionTitle>
        <div className="bg-white p-10">
          <h1 className="font-bold text-3xl mb-5">
            Total User : {users.length}
          </h1>
          <div className="overflow-x-auto max-h-96 relative">
            <table className="table">
              {/* head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#D1A054] text-white">
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="max-h-80">
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <td>{idx + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn btn-square btn-outline bg-[#D1A054] text-white text-lg"
                        >
                          <FaUser></FaUser>
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 text-white text-lg p-2 rounded"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUser;
