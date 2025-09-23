import { Button } from "@mui/material";
import "./_Button.css";

type ButtonProps = {
  onClick: () => void;
};

function _Button({ onClick }: ButtonProps) {
  return (
    <>
      <Button
        variant="outlined"
        sx={{ borderRadius: "50%", minWidth: 56, height: 56, borderWidth: 3 }}
        className="Button"
        onClick={onClick}
      >
        +
      </Button>
    </>
  );
}

export default _Button;
