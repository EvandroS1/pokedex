import Button from "@mui/material/Button";

interface TransparentButtonProps {
  text: string;
  icon?: string; // URL da imagem
}

const TransparentButton: React.FC<TransparentButtonProps> = ({ text, icon }) => {
  return (
    <Button
      variant="outlined"
      className="rounded-full w-full h-14 normal-case text-lg text-gray-600 border-gray-500 bg-transparent border-3"
      // eslint-disable-next-line @next/next/no-img-element
      startIcon={icon && <img src={icon} alt="icon" style={{ marginRight: 8, width: 24, height: 24 }} />}
    >
      {text}
    </Button>
  );
};

export default TransparentButton;
