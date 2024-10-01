import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={12} borderRadius="lg" padding={1.5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
