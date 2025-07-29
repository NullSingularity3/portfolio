import stylex from '@stylexjs/stylex';

const styles = stylex.create({
    container: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1)), url('/header_bg.png')`,
        width: '100%',
        maxWidth: '1326px',
        margin: '0 auto',
        padding: '0 1.25rem',
        backgroundColor: 'rgb(0, 0, 0)',
    }
});

export const Container = (props: GenericChildrenProps) => (
        <div {...stylex.props(styles.container)}>
        {props.children}
    </div>
);
