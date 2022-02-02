const { useEffect } = require("react");
const { useLocation } = require("react-router-dom");

const RoutesWatcher = () => {
    // Variables
    const location = useLocation();

    // Life cycle
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
};

module.exports = RoutesWatcher;