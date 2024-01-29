import { Slider } from "@mui/material";

const PriceRange = ({ value, handleChange }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Price Range</h2>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={110}
      />
    </div>
  );
};

export default PriceRange;
