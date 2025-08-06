import React from 'react';

type VideoProps = {
  src: string;
  title?: string;
  width?: number;
  height?: number;
  description?: string;
};

const Video: React.FC<VideoProps> = ({
  src,
  title = 'Embedded video',
  width = 560,
  height = 315,
  description,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}
    />
    {description && <p style={{ marginTop: '1rem', textAlign: 'center' }}>{description}</p>}
  </div>
);