import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TGadgets } from "../../../../types/Types";
import UpdateGadgetsModal from "./UpdateGadgetsModal/UpdateGadgetsModal";

const dummyImage =
  "https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg";

const CardBox = ({ gadGets }: { gadGets: TGadgets }) => {
  const [open, setOpen] = useState(false);
  // const [gadgetsEdit, setGadgetEdit] = useState({} as TGadgets);
  // const [isModalOpen, setisModalOpen] = useState(false);

  // const handelEdit = (gadgets: TGadgets) => {
  //   setisModalOpen(true);
  //   setGadgetEdit(gadgets);
  // };
  const handleOpen = () => setOpen(true);
  const {
    name,
    Brand,
    Category,
    imageUrl,
    modelNumber,
    price,
    quantity,
    releaseDate,
    features,
  } = gadGets;
  // console.log(isModalOpen, gadgetsEdit);
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={imageUrl ? imageUrl : dummyImage}
            alt="gadgets"
          />
        </a>
        <div className="p-5 flex flex-col space-y-3 text-lg">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex justify-between">
            <span>Model Number:</span>
            <span>{modelNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span>{price} $</span>
          </div>
          <div className="flex justify-between">
            <span>Brand:</span>
            <span>{Brand}</span>
          </div>
          <div className="flex justify-between">
            <span>Category:</span>
            <span>{Category}</span>
          </div>
          <div className="flex justify-between">
            <span>Quantity:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Release Date:</span>
            <span>{releaseDate}</span>
          </div>
          {features && (
            <>
              <h2 className="text-xl border-b-2 ">Featurs:</h2>
              {Object.entries(features).map((featureEleArray) => {
                return (
                  <div className="flex justify-between">
                    <span>{featureEleArray[0]}:</span>
                    <span>{featureEleArray[1]}</span>
                  </div>
                );
              })}
            </>
          )}

          <div className="flex justify-between">
            <button
              onClick={handleOpen}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <CiEdit size={20} className="mr-2" /> Edit
            </button>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <MdDeleteOutline size={20} className="mr-2" /> Delete
            </button>
          </div>
        </div>
        <UpdateGadgetsModal gadGets={gadGets} setOpen={setOpen} open={open} />
      </div>
      {/* {isModalOpen && (
        <>
          {document.getElementById("my_modal_3")?.showModal()}
          <CardModal gadGets={gadgetsEdit} setisModalOpen={setisModalOpen} />
        </>
      )} */}
    </>
  );
};

export default CardBox;
