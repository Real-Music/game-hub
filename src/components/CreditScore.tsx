import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CreditScore({ score }: Props) {
  const colors = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={colors}>
      {score}
    </Badge>
  );
}

export default CreditScore;
