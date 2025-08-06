import stylex from '@stylexjs/stylex';
import { colors, fontFamilies, fontSizes } from '../styles/theme.stylex'

const styles = stylex.create({
    thumbnail: {
        aspectRatio: '1/1',
        width: '15rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        backgroundColor: {
            default: colors.pageBgDark,
            ':hover': colors.butttonWhite,
        },
        color: {
            default: colors.butttonWhite,
            ':hover': colors.pageBgDark,
        },
        fontFamily: fontFamilies["roboto"],
        fontSize: fontSizes["64"]
    },
    link: {
        textDecoration: 'none',
        color: colors.butttonWhite,
    }
});


export const Thumbnail = (props: GenericChildrenProps) => (
    // <center>
    <div {...stylex.props(styles.thumbnail)}>
        {props.children}
    </div>
    // </center>
);

export default Thumbnail