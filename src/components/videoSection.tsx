import React from 'react';

type VideoSectionProps = {
  src: string;
  title: string;
  description: string;
  lineColor?: string;
};

const VideoSection: React.FC<VideoSectionProps> = ({
  src,
  title,
  description,
  lineColor = '#fff', // Default to white, adjust as needed
}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    margin: '3rem 0',
    flexWrap: 'wrap',
  }}>
    <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
      <iframe
        width="100%"
        height="315"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}
      />
    </div>
    <div style={{
      flex: '1 1 300px',
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '2rem',
      borderLeft: `4px solid ${lineColor}`,
    }}>
      <h3 style={{ margin: 0, marginBottom: '1rem', fontSize: '1.5rem', color: lineColor }}>{title}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </div>
  </div>
);

export default VideoSection;