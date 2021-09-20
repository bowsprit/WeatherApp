const Header = ({ city, state }) => {
    return (
        <div className="md:text-3xl pb-5">
            <h1>{city}, {state}</h1>
        </div>
    )
}

export default Header
