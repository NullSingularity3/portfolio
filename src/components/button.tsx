import stylex from '@stylexjs/stylex';
import { fontFamilies, fontSizes, fontWeights, colors } from '../styles/theme.stylex'

const styles = stylex.create({
    button: {
        fontFamily: fontFamilies.roboto,
        display: 'inline-flex',
        fontSize: fontSizes['32'], // Marta value
        width: 'fit-content',
        fontWeight: fontWeights.semibold,
        lineHeight: 1,
        textDecoration: 'none',
        padding: '1rem 2.5rem',
        backgroundColor: {
            default: colors.pageBgDark,
            ':hover': colors.butttonWhite,
        },
        color: {
            default: colors.butttonWhite,
            ':hover': colors.pageBgDark,
        },
        transition: '.2s background-color',
        // borderColor: colors.butttonWhite,
        // borderWidth: 0.5,
        // borderStyle: "solid",
    }
});

interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

export const Button = (props: ButtonProps) => (
        <a href={props.href} {...stylex.props(styles.button)}>
        {props.children}
    </a>
);

export default Button