const Cell = ({ item, onChangeCellValue }) => {
  return (
    <div className="cell-card">
      <input id={item.id} value={item.value} onChange={onChangeCellValue} />
    </div>
  );
};

export default Cell;
