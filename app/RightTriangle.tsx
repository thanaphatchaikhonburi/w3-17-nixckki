import { View, Text, Button, StyleSheet, TextInput} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
export default function Rectangle() {

const [area , setArea] = useState(0) // area = 20 x, setArea(20) /
const [width, setWidth] = useState(0)
const [length, setLength] = useState(0)

function rectangleCal(){
var result = 1/2 * width * length
setArea(result)
}

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่สามเหลี่ยมมุมฉาก</Text>
 {/* <Button title=" ไปหน้า 2"/> */}
         
        <Text> ด้านหนึ่ง คือ {width} ซม. </Text>
         <Text> ด้านสอง คือ {length} ซม. </Text>
 <Text> พื้นที่สามเหลี่ยมมุมฉาก คือ {area} ตร.ซม. </Text>




            <TextInput style={styles.TextInput} placeholder="กรอกความกว้าง" placeholderTextColor="gray"
            value={width.toString()}
            onChangeText={(w) => setWidth(Number(w))}
            />

            <TextInput style={styles.TextInput} placeholder="กรอกความยาว" placeholderTextColor="gray"
            
            value={length.toString()}
            onChangeText={(l) => setLength(Number(l))}
            />
      <Button title="คำนวณ" onPress={() => rectangleCal() } />
        </View>
    )
}.0

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems:"center",
        gap: 20
    },
    textTitle: {
        fontSize:22,
        fontWeight:"700",
        color:"white"
    },
    TextInput:{
        borderWidth: 1,
        borderColor: "white",
        width: "80%",
        borderRadius: 20
    }

})
   