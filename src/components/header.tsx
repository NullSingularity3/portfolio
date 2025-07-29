import stylex from '@stylexjs/stylex';
import React, { Children } from 'react';

const styles = stylex.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.66rem 0'
    },
    nav: {
        display: 'flex',
        gap: '2rem'
    }
});


interface HeaderNavigationLinkProps {
    children: React.ReactNode;
    href: string;
}

export const Header = () => (
    <header {...stylex.props(styles.header)}>
        <HeaderNavigation>
            <HeaderNavigationLink href="#">Works</HeaderNavigationLink>
            <HeaderNavigationLink href="#">About</HeaderNavigationLink>
            <HeaderNavigationLink href="#">CV</HeaderNavigationLink>
            <HeaderNavigationLink href="#">Contact</HeaderNavigationLink>               
        </HeaderNavigation>
    </header>
);


export const HeaderNavigation = (props: GenericChildrenProps) => (
        <header {...stylex.props(styles.nav)}>
        {props.children}
    </header>
);

export const HeaderNavigationLink = (props: HeaderNavigationLinkProps) => (
        <a href={props.href} {...stylex.props(styles.link)}>
        {props.children}
    </a>
);

export default Header