
import { Text as TextNext, TextProps } from "@nextui-org/react";
import { styled } from "@stitches/react";


type Props = {
  text: string
  token?: string
} & TextProps

export const Text = ({ text, token = '$text', ...props }: Props) => {


  const Text = styled(TextNext, {
    color: `${token} !important`,
  });

  return (<Text {...props}>{text}</Text>);
};
