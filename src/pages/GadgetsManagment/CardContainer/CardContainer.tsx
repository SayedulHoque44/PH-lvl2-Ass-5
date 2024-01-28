import { TGadgets } from "../../../types/Types";
import CardBox from "./Card/CardBox";
import CardLoader from "./CardLoader/CardLoader";

type TCardContainerProsp = {
  allGadgets: TGadgets[];
  isLoading: boolean;
};

const CardContainer = ({ allGadgets, isLoading }: TCardContainerProsp) => {
  return (
    <div className="py-10">
      {isLoading ? (
        <CardLoader />
      ) : allGadgets.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {allGadgets.map((gadGets, index) => (
            <CardBox gadGets={gadGets} key={index} />
          ))}
        </div>
      ) : (
        <h1 className="text-red-400 font-semibold text-center text-xl">
          There's no gadgets found!
        </h1>
      )}
    </div>
  );
};

export default CardContainer;
