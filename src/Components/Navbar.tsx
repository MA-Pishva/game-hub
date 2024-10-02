import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/eight-ball.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavbarProps {
  onSubmit: (searchText: string) => void;
}

const Navbar = ({ onSubmit }: NavbarProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput
        onSubmit={(searchText) => onSubmit(searchText)}
      ></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
