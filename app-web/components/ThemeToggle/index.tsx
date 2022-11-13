import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "dark" && (
        <SunIcon
          onClick={() => {
            setTheme("light");
          }}
        />
      )}

      {theme === "light" && (
        <MoonIcon
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </>
  );
};
