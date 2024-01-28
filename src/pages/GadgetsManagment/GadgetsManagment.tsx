import { useGetAllGadgetsQuery } from "../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import CardContainer from "./CardContainer/CardContainer";

const GadgetsManagment = () => {
  const { data, error, isLoading } = useGetAllGadgetsQuery(undefined);
  console.log(data, error);
  return (
    <div className="lg:p-20">
      <h1 className="text-center text-2xl font-semibold tracking-wide">
        All Gadgets
      </h1>
      {/*  */}
      <CardContainer allGadgets={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default GadgetsManagment;
