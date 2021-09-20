import PropTypes from 'prop-types';

const Header = ({ city, state }) => {
    return (
        <div className="md:text-4xl pb-5">
            <h1>{city}, {state}</h1>
        </div>
    )
}

Header.propTypes = {
    city: PropTypes.string.isRequired(),
    state: PropTypes.string.isRequired(),
}

export default Header
