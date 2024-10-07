import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiNintendo,
  SiAtari,
  SiCommodore,
  SiSega,
  SiD3Dotjs,
} from "react-icons/si";
import { BsGlobe, BsGeo } from "react-icons/bs";
import { IconType } from "react-icons";

interface GameProps {
  platforms: Platform[];
}

const IconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  xbox360: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  android: FaAndroid,
  atari: SiAtari,
  commodore: SiCommodore,
  sega: SiSega,
  "3do": SiD3Dotjs,
  "neo-geo": BsGeo,
  web: BsGlobe,
};

const PlatformIconsList = ({ platforms }: GameProps) => {
  return (
    <HStack>
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          as={IconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
