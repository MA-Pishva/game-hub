import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
        color: "#000",
      }}
      borderRadius="lg"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
