import { useState } from "react";
import Cell from "./Cell";
import Modal from "react-modal";
import "./AddCell.css";

const initialCells = [
  {
    id: "0",
    value: "a",
  },
  {
    id: "1",
    value: "b",
  },
  {
    id: "2",
    value: "c",
  },
];

const AddCell = () => {
  const [cells, setCells] = useState(initialCells);
  const [limitError, setLimitError] = useState(false);

  const handleCellValueChange = (event) => {
    setCells((pre) => {
      return pre.map((cell, index) => {
        const cellVal = cell;
        if (event.target.id == index) {
          cellVal.value = event.target.value;
        }
        return cellVal;
      });
    });
  };

  const cellsValue = cells.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    ""
  );

  const handleNewCellAdd = (event) => {
    if (cells.length !== 7) {
      const pointer = parseInt(event.target.id) + 1;
      const cells1 = cells.slice(0, pointer);
      const cells2 = cells.slice(pointer).map((cell) => ({
        id: `${pointer + 1}`,
        value: cell.value,
      }));
      const updatedCells = [
        ...cells1,
        { id: `${pointer}`, value: "-" },
        ...cells2,
      ];

      setCells(updatedCells);
    } else {
      setLimitError(true);
    }
  };

  return (
    <>
      <div className="cell-container">
        {cells.map((cell, index) => (
          <>
            <Cell
              key={cell.id}
              item={cell}
              onChangeCellValue={handleCellValueChange}
            />
            {cells.length - 1 !== index && (
              <span
                id={cell.id}
                onClick={handleNewCellAdd}
                className="add-space"
              >
                &nbsp;
              </span>
            )}
          </>
        ))}
        <span className="cells-values">{cellsValue + "!"}</span>
      </div>
      <Modal
        isOpen={limitError}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
          },
        }}
        onRequestClose={() => setLimitError(false)}
      >
        <h1> Cell Limit exhausted</h1>
      </Modal>
    </>
  );
};

export default AddCell;
