import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
