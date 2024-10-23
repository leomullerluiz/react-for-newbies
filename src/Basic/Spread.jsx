import PropTypes from 'prop-types';
//...rest and ...spread are used to pass more than one property to a component, we use to pass an array of properties to a component and we can use the rest operator to get the remaining properties
const Spread = ({ text_color, rand_number, text, ...properties }) => {

    return (
        <p style={{ color: text_color }} {...properties}>{text} || RandNumber:  {rand_number}</p>
    )
}

Spread.propTypes = {
    text: PropTypes.string.isRequired,
    text_color: PropTypes.string,
    rand_number: PropTypes.number
};

export default Spread