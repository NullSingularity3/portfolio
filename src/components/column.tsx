import stylex from '@stylexjs/stylex';
import React from 'react';

// gutter - the space between columns in a grid layout
const gutter=1.25;


const styles = stylex.create({
  column: {
    backgroundColor: 'rgba(113, 7, 95, 0.86)',
    flexGrow: 1,
    padding: `0 ${gutter / 2}rem`,  // ` is like f-string in python
  },
  // i hate it but you have to generate it before for stylex
  // object spread (... python: unpack) is not possible :V
  // stylex takes only static values
  span1: { flexBasis: '8.3333%', maxWidth: '8.3333%' },
  span2: { flexBasis: '16.6667%', maxWidth: '16.6667%' },
  span3: { flexBasis: '25%', maxWidth: '25%' },
  span4: { flexBasis: '33.3333%', maxWidth: '33.3333%' },
  span5: { flexBasis: '41.6667%', maxWidth: '41.6667%' },
  span6: { flexBasis: '50%', maxWidth: '50%' },
  span7: { flexBasis: '58.3333%', maxWidth: '58.3333%' },
  span8: { flexBasis: '66.6667%', maxWidth: '66.6667%' },
  span9: { flexBasis: '75%', maxWidth: '75%' },
  span10: { flexBasis: '83.3333%', maxWidth: '83.3333%' },
  span11: { flexBasis: '91.6667%', maxWidth: '91.6667%' },
  span12: { flexBasis: '100%', maxWidth: '100%' },
});

interface ColumnProps {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Column = ({ children, span }: ColumnProps) => {
  const spanStyle = span ? styles[`span${span}` as keyof typeof styles] : null;

  return (
    <div {...stylex.props(styles.column, spanStyle)}>
      {children}
    </div>
  );
};

export default Column;
