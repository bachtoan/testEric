import { StyleSheet } from "react-native";

const avatarSize = 128;

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:"center",
        backgroundColor:'#fff',
        paddingBottom:10
    },

    coverImage:{
        width:'100%',
        height:170,
        position:'relative',
        marginBottom: avatarSize/2,
    },

    avatar:{
        position:'absolute',
        width:avatarSize, 
        height:avatarSize, 
        alignSelf:'center',
        bottom:-avatarSize/2,
    },
  });