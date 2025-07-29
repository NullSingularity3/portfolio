import stylex from '@stylexjs/stylex';
import React from 'react';
import { colors, fontFamilies, fontSizes, fontWeights } from '../styles/theme.stylex';

const styles = stylex.create({
    backgroundWrapper: {
        width: '100%',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1)), url('/header_bg.png')`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    wrapper: {
        paddingTop: '10rem',         // Increase space Top
        paddingBottom: '8rem',      // Increase space Bottom
        flexDirection: 'column',
        gap: '0.75rem',
        width: '100%',
    },
    name: {
        letterSpacing: '0.125rem',
        fontFamily: fontFamilies["roboto"],
        fontSize: fontSizes["64"],
        fontWeight: fontWeights["regular"],
        color: colors.white,
        paddingBottom: '0',
        marginBottom: '-0.75rem',   // pull content down to sit on the line
    },
    line: {
        width: '100%',
        height: '2px',
        backgroundColor: colors.white,
    },
    bottomRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '0rem',
    },
    subtitle: {
        display: 'flex',
        justifyContent: 'start',
        fontFamily: fontFamilies["roboto"],
        fontSize: fontSizes["40"],
        fontWeight: fontWeights["regular"],
        color: colors.white,
        opacity: 0.8,
    },
    menuBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '1.666rem 0',
    },
    nav: {
        display: 'flex',
        gap: '2rem'
    },
    link: {
        textDecoration: 'none',
        fontSize: fontSizes["32"],
        fontWeight: fontWeights["regular"],
        lineHeight: 1,
        height: 'min-content',
        color: colors.white,
        borderBottom: '1.2px solid transparent',
        borderColor: {
            default: 'transparent',
            ':hover': colors.butttonWhite
        },
    }
});

interface HeaderNavigationLinkProps {
    children: React.ReactNode;
    href: string;
}

export const Header = () => (
  <div {...stylex.props(styles.backgroundWrapper)}>
    <div {...stylex.props(styles.wrapper)}>
      <div>
        <div {...stylex.props(styles.name)}>ZDYBA</div>
        <div {...stylex.props(styles.line)} />
      </div>

      <div {...stylex.props(styles.bottomRow)}>
        <div {...stylex.props(styles.subtitle)}>Marta Prabucka</div>

        <HeaderNavigation>
          <HeaderNavigationLink href="#">Works</HeaderNavigationLink>
          <HeaderNavigationLink href="#">About</HeaderNavigationLink>
          <HeaderNavigationLink href="#">CV</HeaderNavigationLink>
          <HeaderNavigationLink href="#">Contact</HeaderNavigationLink>
        </HeaderNavigation>
      </div>
    </div>
  </div>
);


export const HeaderNavigation = (props: GenericChildrenProps) => (
    <nav {...stylex.props(styles.nav)}>
        {props.children}
    </nav>
);

export const HeaderNavigationLink = (props: HeaderNavigationLinkProps) => (
    <a href={props.href} {...stylex.props(styles.link)}>
        {props.children}
    </a>
);

export default Header;
