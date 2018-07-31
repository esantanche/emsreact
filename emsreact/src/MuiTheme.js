import {createMuiTheme} from "@material-ui/core/styles/index";
import teal from "@material-ui/core/colors/teal";
import cyan from "@material-ui/core/colors/cyan";

/**
 *
 */
const theme = createMuiTheme({
    palette: {
        primary: {
            light: teal[400],
            main: teal[500],
            dark: teal[600],  // Use white text
        },
        secondary: {
            light: teal[200],
            main: teal[300],
            dark: teal[400], // use white text
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