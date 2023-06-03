
const initialstate = {
    primary: 'white-500',
    secondary: 'gray-400'
}

function themeReducer (state=initialstate, action) {
    return {primary: state.secondary, secondary:state.primary}
};

export default themeReducer;