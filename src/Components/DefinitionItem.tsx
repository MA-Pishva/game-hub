import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemeProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionIteme = ({ term, children }: DefinitionItemeProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionIteme;
