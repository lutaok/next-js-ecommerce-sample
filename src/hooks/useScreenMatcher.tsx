import useMediaQuery from "@mui/material/useMediaQuery";

interface ScreenMatcher {
  lgMatch: boolean;
  mdMatch: boolean;
  smMatch: boolean;
}

export const useScreenMatcher = (): ScreenMatcher => {
  const lgMatch = useMediaQuery("(min-width:1024px)");
  const mdMatch = useMediaQuery("(min-width:768px)");
  const smMatch = useMediaQuery("(min-width:640px)");

  return {
    lgMatch: lgMatch,
    mdMatch: mdMatch,
    smMatch: smMatch,
  };
};
