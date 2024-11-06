import { createStyleSheet } from "react-native-unistyles";

enum ButtonState {
    default ='default',
    border ='border',
    highlight = 'highlight'
}

export const stylesheet = createStyleSheet(theme => ({
    container:{
        flex:1
    },

    button: (type,colorStyle) =>( {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:8,
        gap:8,
        paddingHorizontal:14,
        flexDirection:'row',
        borderRadius: type == ButtonState.border ? 24 : 8,
        backgroundColor:colorStyle == ButtonState.highlight ? '#3864FF' : '#F9FAFB'
    }),

    text: (colorStyle)=>({
        color: colorStyle == ButtonState.highlight ? 'white' : 'black',
        fontWeight:600,
        fontSize:14
    })

}))
