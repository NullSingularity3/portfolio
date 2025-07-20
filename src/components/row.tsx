import stylex from '@stylexjs/stylex';

const styles = stylex.create({
    row: {
        display: 'flex',
        flexWrap: 'wrap',

    }
});

export const Row = (props: GenericChildrenProps) => (
        <div {...stylex.props(styles.row)}>
        {props.children}
    </div>
);

export default Row;