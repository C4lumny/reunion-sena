import PropTypes from 'prop-types';

export const Button = ({text, style}) => {
    return(
        <button className={style}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string
};