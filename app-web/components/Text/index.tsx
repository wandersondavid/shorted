
import { Text as TextNext, TextProps } from "@nextui-org/react";
import { styled } from "@stitches/react";


type Props = {
  text: string,
} & TextProps

export const Text = ({text, ...props}:Props ) => {


  const Text = styled(TextNext , {
    color:"$text !important",
  });

  return ( <Text {...props}>{text}</Text>);
};
