import stylex, { props } from '@stylexjs/stylex'
import {colors , fontFamilies} from '../styles/theme.stylex';

const currentYear = new Date().getFullYear();

const styles = stylex.create(
    {
        background: {
            padding: '0 6rem',
            width: '100%',
            // maxWidth: '1326px',
            margin: '0 auto',            
        },
        wrapper: {
            paddingTop: '10rem',         // Increase space Top
            paddingBottom: '10rem',      // Increase space Bottom
            flexDirection: 'column',
            gap: '0.75rem',
            width: '100%',
        },
        footer: {
            fontFamily: fontFamilies["roboto"],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem 1rem',
            border: '0.5px',
            // borderColor: colors.butttonWhite,
            // borderStyle: "solid",
            marginTop: '4rem', // Added top margin
       }, 
        line: {
            width: '100%',
            height: '2px',
            backgroundColor: colors.white,
    },
    },
    
)

const Footer = (props: GenericChildrenProps) => {
    return (

        <div {...stylex.props(styles.background)}>
        <div {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.line)}/>
            <footer {...stylex.props(styles.footer)}>
                <p>© Portfolio of Marta Prabucka / {currentYear}</p>
        </footer>
        </div>
        </div>

    );
};

export default Footer;