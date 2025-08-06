import Button from './button';
import { Row } from './row';

const navLinks = [
  { href: '/', label: 'Painting' },
  { href: '/animation', label: 'Animation' },
  { href: '/vj', label: 'VJ' },
  { href: '/other', label: 'Other' },
];

const Navigation = () => (
  <Row>
    {navLinks.map(link => (
      <Button key={link.href} href={link.href}>{link.label}</Button>
    ))}
  </Row>
);

export default Navigation;