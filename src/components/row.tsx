import stylex from '@stylexjs/stylex';
import { colors } from '../styles/theme.stylex'

const styles = stylex.create({
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        // backgroundColor: 'rgba(47, 14, 85, 0.86)',
        borderColor: colors.butttonWhite,
        borderWidth: 0.5,
        borderStyle: "solid",
    }
});


export const Row = (props: GenericChildrenProps) => (
        <div {...stylex.props(styles.row)}>
        {props.children}
    </div>
);
