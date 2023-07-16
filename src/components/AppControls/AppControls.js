import React from "react";
import Button from "../Button/Button";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./style.css";

const AppControls = ({
  algorithm,
  onAlgorithmChange,
  arraySize,
  onArraySizeChange,
  onGenerateRandomArray,
}) => {
  return (
    <div className="ite">
      <DropDownMenu
        placeholder="Sort Algorithm"
        items={["Bubble Sort", "Selection Sort", "Merge Sort","Insertion Sort"]}
        className="dr"
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />

      <div className="AppControls__Size">
        <span>Size</span>
        <DropDownMenu
          placeholder="Array Size"
          items={[5, 10, 25, 50, 75, 100]}
          
          selected={arraySize}
          onSelect={onArraySizeChange}
        />
      </div>

      <Button
        onClick={onGenerateRandomArray}
        className={"AppControls__RandomizeBtn"}
      >
        Randomize
        <br /> Values
      </Button>
    </div>
  );
};

export default AppControls;
