import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SecitonTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItem = () => {
  const [menu, refetch] = useMenu();
  const axiousSecure = useAxiosSecure();

  const handleDelete = (item) => {
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
        axiousSecure.delete(`/menu/${item._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} deleted successfully done!`,
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
        <title>Manage Item | Dashboard</title>
      </Helmet>
      <div className="py-10">
        <SectionTitle
          subTitle={"---Hurry Up!---"}
          title={"MANAGE ALL ITEMS"}
        ></SectionTitle>
        <div className="bg-white p-10">
          <h1 className="font-bold text-3xl mb-5">Total Item :{menu.length}</h1>
          <div className="overflow-x-auto max-h-96 relative">
            <table className="table">
              {/* head */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#D1A054] text-white">
                  <th>Serial</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="max-h-80">
                {menu.map((item, idx) => (
                  <tr key={item._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <img src={item.image} className="w-16" alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="bg-[#D1A054] text-white text-lg p-2 rounded"
                      >
                        <FiEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="bg-red-500 text-white text-lg p-2 rounded"
                      >
                        <MdDeleteForever />
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

export default ManageItem;
