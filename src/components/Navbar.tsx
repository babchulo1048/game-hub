import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} alt="logo" boxSize={`60px`} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

// 23a126d6660d4e33afc8fda0d8a1a1e7
