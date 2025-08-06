import stylex from '@stylexjs/stylex';
import Button from './button';
import { Row } from './row';

const navLinks = [
  { href: '/', label: 'Painting' },
  { href: '/animation', label: 'Animation' },
  { href: '/vj', label: 'VJ' },
  { href: '/other', label: 'Other' },
];

const infoLinks = [
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

const styles = stylex.create({
  navigationWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  infoMenu: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    marginTop: '1rem',
    '@media (max-width: 629px)': {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
  },
});

const Navigation = () => (
  <div {...stylex.props(styles.navigationWrapper)}>
    <Row>
      {navLinks.map(link => (
        <Button key={link.href} href={link.href}>{link.label}</Button>
      ))}
    </Row>
  </div>
);

export default Navigation;