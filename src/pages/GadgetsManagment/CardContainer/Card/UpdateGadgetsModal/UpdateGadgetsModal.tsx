import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FieldValues } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import Form from "../../../../../components/Form/Form";
import FormInput from "../../../../../components/Form/FormInput";
import { useUpdateGadgetsMutation } from "../../../../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import { TGadgets } from "../../../../../types/Types";

export const checkStringOrNumber = (value) => {
  if (typeof value === "number") {
    return "number";
  } else if (typeof value === "string") {
    return "text";
  }
  return "text";
};

const compareObj = (matchObj, mainObj) => {
  const numberValueToBe = ["quantity", "price"];
  const reqObj: Record<string, unknown> = {};
  Object.keys(matchObj).forEach((key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (mainObj.hasOwnProperty(key)) {
      if (numberValueToBe.find((ele) => ele === key)) {
        reqObj[`${key}`] = parseInt(mainObj[key]);
      } else {
        reqObj[`${key}`] = mainObj[key];
      }
    }
  });
  return reqObj;
};
type TUpdateGadgetsModal = {
  gadGets: TGadgets;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export default function UpdateGadgetsModal({
  gadGets,
  setOpen,
  open,
}: TUpdateGadgetsModal) {
  const { features, createdAt, updatedAt, __v, _id, ...remainingInfo } =
    gadGets;
  const [updateGadgets] = useUpdateGadgetsMutation();
  const handleClose = () => setOpen(false);

  // const manipulatePrimitiveNonPremitive = () => {
  //   const obj: Record<string, unknown> = {};
  //   Object.entries(remainingInfo).forEach((featureEleArray) => {
  //     obj[`${featureEleArray[0]}`] = featureEleArray[1];
  //   });

  //   return obj;
  // };

  //
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const gadgetsUpdateFeatures = compareObj(features, data);
    const gadgetsOtherUpdateFields = compareObj(remainingInfo, data);

    const updateGadgetsValue = {
      ...gadgetsOtherUpdateFields,
      features: { ...gadgetsUpdateFeatures },
    };
    const gadgetsId = gadGets._id;
    const apiValue = { updateGadgetsValue, gadgetsId };
    console.log(updateGadgetsValue);

    try {
      const res = await updateGadgets(apiValue).unwrap();
      toast.success(res.message);
      handleClose();
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <Modal
        sx={{
          overflowY: "scroll",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 750,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            maxHeight: "calc(100vh - 10%)",
            overflowY: "scroll",
            p: 4,
          }}
          width={700}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="flex justify-between">
            <span>Update Gadgets</span>
            <span
              onClick={handleClose}
              className="p-2 cursor-pointer bg-red-400 text-white">
              <IoMdClose size={20} />
            </span>
          </Typography>
          <Typography
            component={"div"}
            id="modal-modal-description"
            sx={{ mt: 2 }}>
            <Form
              onSubmit={onSubmit}
              defaultValues={{ ...remainingInfo, ...features }}>
              {/* <FormInput type="text" name="name" label="name" />
              <FormInput type="text" name="Brand" label="Brand" />
              <FormInput type="text" name="Category" label="Category" />
              <FormInput type="text" name="imageUrl" label="imageUrl" />
              <FormInput type="text" name="modelNumber" label="modelNumber" />
              <FormInput type="number" name="price" label="price" />
              <FormInput type="number" name="quantity" label="quantity" />
              <FormInput type="text" name="releaseDate" label="releaseDate" /> */}
              {Object.entries(remainingInfo).map((featureEleArray) => {
                return (
                  <FormInput
                    type={checkStringOrNumber(featureEleArray[1])}
                    name={featureEleArray[0]}
                    label={featureEleArray[0]}
                  />
                );
              })}
              {features && (
                <>
                  <h2>Featurs</h2>
                  {Object.entries(features).map((featureEleArray) => {
                    return (
                      <FormInput
                        type={checkStringOrNumber(featureEleArray[1])}
                        name={featureEleArray[0]}
                        label={featureEleArray[0]}
                      />
                    );
                  })}
                </>
              )}
              <button
                className="text-white w-full bg-blue-500 border-none p-2 "
                type="submit">
                Update
              </button>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
