import stylex, { props } from '@stylexjs/stylex'
import {colors , fontFamilies} from '../styles/theme.stylex';

const currentYear = new Date().getFullYear();

const styles = stylex.create(
    {
       footer: {
        fontFamily: fontFamilies["roboto"],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1rem',
        border: '0.5px',
        borderColor: colors.butttonWhite,
        borderStyle: "solid",
       } 
    }
)

const Footer = (props: GenericChildrenProps) => {
    return (
        <footer {...stylex.props(styles.footer)}>
            <p>© Portfolio of Marta Prabucka · {currentYear}</p>
        </footer>
    );
};

export default Footer;