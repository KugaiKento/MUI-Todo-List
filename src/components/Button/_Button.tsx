import { Button } from "@mui/material";
import "./_Button.css";

function _Button() {
  return (
    <>
      <Button
        variant="outlined"
        sx={{ borderRadius: "50%", minWidth: 56, height: 56, borderWidth: 3 }}
        className="Button"
      >
        +
      </Button>
    </>
  );
}

export default _Button;
