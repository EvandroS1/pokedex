import Button from "@mui/material/Button";

export default function BlueButton(text: string, disabled: boolean) {
  return (
    <Button
      variant="contained"
      className="rounded-full w-full h-14 font-bold normal-case text-lg"
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
