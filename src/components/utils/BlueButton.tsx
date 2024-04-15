import Button from "@mui/material/Button";

export default function BlueButton(text: string) {
  return (
    <Button
      variant="contained"
      className="rounded-full w-full h-14 normal-case text-lg"
    >
      {text}
    </Button>
  );
};
