import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number | null;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score
    ? score > 75
      ? "green"
      : score > 50
      ? "yellow"
      : "red"
    : "gray";

  return (
    <Badge colorScheme={color} fontSize={12} borderRadius="lg" padding={1.5}>
      {score ? score : "-"}
    </Badge>
  );
};

export default CriticScore;
