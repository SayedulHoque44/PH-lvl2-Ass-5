import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";

import Form from "../../../components/Form/Form";
import FormInput from "../../../components/Form/FormInput";
import { checkStringOrNumber } from "../CardContainer/Card/UpdateGadgetsModal/UpdateGadgetsModal";
import { exampleGadget } from "./gadgets.const";

const AddNewGadget = ({ open, setOpen }) => {
  const { features, ...remainingInfo } = exampleGadget;
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="text-white  bg-blue-500 border-none py-3 rounded px-10 ">
        Add New Gadgets
      </button>
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
                    <h2 className="border-b-2">Featurs</h2>
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
    </div>
  );
};

export default AddNewGadget;
