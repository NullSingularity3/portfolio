import Thumbnail from './thumbnail';

type GalleryItem = {
  src: string;
  label: string;
  href?: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

const Gallery = ({ items }: GalleryProps) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: 'transparent',
  }}>
    {items.map(item => (
      item.href ? (
        <a key={item.label} href={item.href}>
          <Thumbnail src={item.src} style={{ width: '200px', height: '200px' }}>{item.label}</Thumbnail>
        </a>
      ) : (
        <Thumbnail key={item.label} src={item.src} style={{ width: '200px', height: '200px' }}>{item.label}</Thumbnail>
      )
    ))}
  </div>
);

export default Gallery;