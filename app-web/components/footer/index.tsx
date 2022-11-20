
import { styled } from "@stitches/react";

const FooterStyled = styled('footer', {

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: ' 30px',
    position: 'absolute',
    bottom:0,
    left: 0,
    right: 0,
    zIndex:-1,
})
export const Footer = () => (
    <FooterStyled>
        <a href="https://wandersondavid.com" target='blank'><p>© 2022 por Wanderson David.</p></a>
    </FooterStyled>
);