import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width={260} borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
