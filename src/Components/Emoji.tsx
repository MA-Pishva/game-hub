import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "./../assets/bulls-eye.webp";
import thumbsUp from "./../assets/thumbs-up.webp";
import meh from "./../assets/meh.webp";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: bullsEye, alt: "recommended" },
    5: { src: thumbsUp, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} boxSize="25px" />;
};

export default Emoji;
