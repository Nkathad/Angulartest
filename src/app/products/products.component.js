import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "productbox": {
        "border": "1px solid #ddd",
        "textAlign": "center",
        "marginBottom": 20,
        "minHeight": 250,
        "paddingTop": 20
    },
    "productbox img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    }
});