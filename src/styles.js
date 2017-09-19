import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Roboto', sans-serif"
    },
    "navbar-inverse": {
        "backgroundColor": "#F2184F"
    },
    "navbar-inverse navbar-nav>li>a": {
        "color": "#fff"
    },
    "app-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 15,
        "paddingLeft": 10,
        "backgroundColor": "#002E5B",
        "fontSize": 22,
        "color": "#fff",
        "fontWeight": "700"
    },
    "navbar": {
        "marginBottom": 0
    },
    "navbar-inverse navbar-brand": {
        "paddingTop": 16,
        "paddingRight": 0,
        "paddingBottom": 16,
        "paddingLeft": 0,
        "backgroundColor": "#fff",
        "minWidth": 250,
        "textAlign": "center",
        "fontSize": 24,
        "fontWeight": "bold"
    },
    "form-control": {
        "boxShadow": "none"
    }
});