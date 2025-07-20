import stylex from '@stylexjs/stylex';

const styles = stylex.create({
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(119, 0, 255, 0.86)',
    }
});

export const Row = (props: GenericChildrenProps) => (
        <div {...stylex.props(styles.row)}>
        {props.children}
    </div>
);

export default Row;