import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

function SearchInput() {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          variant="filled"
          borderRadius={20}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
