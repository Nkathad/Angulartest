import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ng-valid[required]": {
        "borderLeft": "5px solid #42A948"
    },
    "ng-validrequired": {
        "borderLeft": "5px solid #42A948"
    },
    "ng-invalid:not(form)": {
        "borderLeft": "5px solid #a94442"
    }
});