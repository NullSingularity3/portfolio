import stylex from '@stylexjs/stylex';
import { colors } from '../styles/theme.stylex'

const styles = stylex.create({
    row: {
        width: 'fit-content',
        display: 'flex',
        // justifyContent: 'space-between',     // uncomment those for auto-scaling
        // alignItems: 'center',
        flexWrap: 'wrap',
        // backgroundColor: 'rgba(47, 14, 85, 0.86)',
        borderColor: colors.butttonWhite,
        borderWidth: 0.5,
        borderStyle: "solid",
    }
});


export const Row = (props: GenericChildrenProps) => (
    // <center>
    <div {...stylex.props(styles.row)}>
        {props.children}
    </div>
    // </center>
);
