import {createMuiTheme} from "@material-ui/core/styles/index";
import teal from "@material-ui/core/colors/teal";
import cyan from "@material-ui/core/colors/cyan";

/**
 *
 */
const theme = createMuiTheme({
    palette: {
        primary: {
            light: teal[500],
            main: teal[600],
            dark: teal[700],  // Use white text
        },
        secondary: {
            light: cyan[500],
            main: cyan[600],
            dark: cyan[700], // use white text
        }
        // text: {
        //     secondary: "white"
        // }
    },
    typography: {
        fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", sans-serif"
    }
});

export default theme;