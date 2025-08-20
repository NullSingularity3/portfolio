import stylex from '@stylexjs/stylex';
import React from 'react';
import { colors, fontFamilies, fontSizes, fontWeights } from '../styles/theme.stylex';

// used for responsive design
const l: LargeMaxMediaQuery =  '@media (max-width: 1024px)';

const styles = stylex.create({
    backgroundWrapper: {
        padding: '0 6rem',
        width: '100%',
        // maxWidth: '1326px',
        margin: '0 auto',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 70%, #101014 100%), url('/header_bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    wrapper: {
        paddingTop: '10rem',         // Increase space Top
        paddingBottom: '10rem',      // Increase space Bottom
        flexDirection: 'column',
        gap: '0.75rem',
        width: '100%',
    },
    name: {
        letterSpacing: '0.125rem',
        fontFamily: fontFamilies["roboto"],
        fontSize: fontSizes["72"],
        fontWeight: fontWeights["regular"],
        color: colors.white,
        paddingBottom: '0',
        marginBottom: '-0.9rem',   // pull content down to sit on the line
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
        marginTop: '1rem'
    },
    nav: {
        display: 'flex',
        gap: '2rem',
        marginTop: '1rem'
    },
    link: {
        textDecoration: 'none',
        fontSize: fontSizes["32"],
        fontWeight: fontWeights["regular"],
        lineHeight: 1,
        height: 'min-content',
        color: colors.white,
        borderBottom: '1.2px solid transparent',
        borderColor: 'transparent',
        ':hover': {
            borderColor: colors.butttonWhite
        }
    },
    menuBars: {
        background : 'none',
        color: "#fff",
        border: 'none',
        cursor: 'pointer',
    },
    drawer: {
        display: 'flex',
        alignItems: {
            default: 'center',
            [l]: 'flex-start',
        },
        gap: {
            default: '2rem',
            [l]: '1rem'
        },
        marginTop: '0rem',
        position: {
            default: 'static',
            [l]: 'fixed',
        },
        top: '0',
        right: '0',
        bottom: '0',
        flexDirection: {
            default: 'row',  
            [l]: 'column',
        },
        padding: {
            default: 0,
            [l]: '2rem',
        },
        backgroundColor: {
            default: 'transparent',
            [l]: colors.darkbg,
        },
        boxShadow: {
            default: 'none',
            [l]: '-0.5 0 2rem rgba(0, 0, 0, 0.1)'
        }
    }}
);

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
        <HeaderNavigationDrawer>
          <HeaderNavigationLink href="/">Works</HeaderNavigationLink>
          <HeaderNavigationLink href="/about">About</HeaderNavigationLink>
          <HeaderNavigationLink href="/cv">CV</HeaderNavigationLink>
          <HeaderNavigationLink href="/contact">Contact</HeaderNavigationLink>
        </HeaderNavigationDrawer>
            <button type="button" aria-label="open menu" {...stylex.props(styles.menuBars)}>
            <svg width="1.6rem" height="1.6rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="currentColor" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
            </svg>
            </button>
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

export const HeaderNavigationDrawer = (props: GenericChildrenProps) => (
    <div {...stylex.props(styles.drawer)}>
        {props.children}
    </div>
);

export const HeaderNavigationLink = (props: HeaderNavigationLinkProps) => (
    <a href={props.href} {...stylex.props(styles.link)}>
        {props.children}
    </a>
);

export default Header;
