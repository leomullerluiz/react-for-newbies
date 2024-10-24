import PropTypes from 'prop-types';
//Import PropTypes from the prop-types library
//PropTypes is a library that allows us to define the shape of the data that we pass to a component
//It is used to ensure that the data that is passed to a component is in the correct format

const Pokemon = ({ data }) => {

    return (
        <div className="w-full max-w-[calc(100vw/3)] mx-auto">
            <div
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">Type: {data.types.map((type) => type.type.name).join(', ')}</p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            src={data.sprites.front_default}
                            className="size-16 rounded-lg object-cover shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}
Pokemon.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }).isRequired,
            })
        ).isRequired,
        sprites: PropTypes.shape({
            front_default: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Pokemon