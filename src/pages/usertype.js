import { MenuItem } from "@mui/material";

const UserType = ({ item, onChangeCellValue }) => {
  return (
    <div>
      <MenuItem>{item}</MenuItem>
    </div>
  );
};

export default UserType;
