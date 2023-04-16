import { useState } from "react";
import { StyledSearchInput, StyledSearchInputContainer } from "./styles";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { theme } from "../../styles/theme";

export const SearchInput = () => {
  const [value, setValue] = useState<string>("");

  function handleClear() {
    setValue("");
  }

  return (
    <StyledSearchInputContainer>
      <StyledSearchInput
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder="Buscar"
        maxLength={20}
      />
      {value.length > 0 ? (
        <span onClick={handleClear} style={{ border: "none" }}>
          <IoMdClose
            style={{
              color: theme.colors.white,
              height: "22px",
              width: "22px",
              cursor: "pointer",
            }}
          />
        </span>
      ) : (
        <span style={{ border: "none" }}>
          <FiSearch
            style={{
              color: theme.colors.gray1,
              height: "22px",
              width: "22px",
              cursor: "pointer",
            }}
          />
        </span>
      )}
    </StyledSearchInputContainer>
  );
};
