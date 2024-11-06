import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet(theme => ({
    avatarView: (hasBorder: boolean, isAddReel: boolean ) =>({
      padding:4,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 75,
      backgroundColor:'#fff',
      borderColor: isAddReel ? '#0000004D': "#3864FF",
      borderWidth: isAddReel ? 3 : hasBorder ? 2 : 0,
    }),

    avatar: (count: number)=>({
      width:'100%',
      height:'100%',
      position:'relative',
    }),

    addReel:{
      width:'100%',
      height:'100%',
      backgroundColor:'#0000004D',
      borderRadius: 75,
     },

    plus:{
      position:'absolute',
      top: "50%",
      left: "50%",
      transform: [{ translateX: '-50%'}, { translateY: '-50%'}],
    },

    count:{
      fontSize:24,
      fontWeight:600,
      position:'absolute',
      textAlign: "center",
      color:'white',
      top: "50%",
      left: "50%",
      transform: [{ translateX: '-50%'}, { translateY: '-50%'}],
    },

    desc: {
      textAlign:'center'
    }
}))
