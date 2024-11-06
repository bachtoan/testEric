import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      justifyContent:'center',
    },

    nameView: {
     flexDirection:'row',
     alignItems:'center',
     gap:10
    },

    name: {
      fontSize: 24,
      fontWeight: '600',
    },

    desc:{
      fontSize: 14,
      fontWeight: '400',
    },

    otherView:{flexDirection:'row', gap:20, marginTop:15},

    otherItem:{
      flexDirection:'row'
    },

    otherData:{
      fontWeight:600
    }
  });