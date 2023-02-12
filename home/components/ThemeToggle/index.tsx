import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();


  const SunIconStyled = styled(SunIcon , {
    color:"$text",
    fill:"$text",
  });

  const MoonIconStyled = styled(MoonIcon , {
    color:"$text",
    fill:"$text",
  });

  return (
    <>
      {theme === "dark" && (
        <SunIconStyled
          onClick={() => {
            setTheme("light");
          }}
        />
      )}

      {theme === "light" && (
        <MoonIconStyled color="$text"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </>
  );
};
