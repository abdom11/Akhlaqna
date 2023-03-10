import React from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import AmanatiLogo from "../Classes/logoXml";
// import {SvgXml} from "react-native-svg";

export default function Homepage({navigation}) {
    let phoneNumber;
    let password;

    const checkLogin = () => {
        const axios = require('axios').default;
        // console.warn("hi");
        axios.post('http://ryzentx.online/?phoneNumber=' + phoneNumber + '&password=' + password)
            .then(function (response) {
                console.warn(response.data);
                if (response.data === 1) {
                    // redirect to Dashboard
                    navigation.navigate('PostsPage');
                } else {
                    // alert something is wrong
                    Alert.alert('Error', 'Username/Password Wrong');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.background}>
            <View style={styles.form}>
                <View style={styles.logoSection}>
                    <View style={styles.logo}>
                        <Image source={require("../../assets/Logo.png")}
                               style={styles.imageLogo}/>
                        {/*<AmanatiLogo style={styles.imageLogo}/>*/}
                    </View>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleText}>Login</Text>
                </View>

                <View style={styles.inputsArea}>
                    <View style={[styles.inputSection, {justifyContent: 'center',}]}>
                        <View style={styles.phoneInput}>
                            <View style={styles.iconHolder}>
                                <MaterialCommunityIcons size={30}
                                                        name={"phone"}
                                                        color={"#660032"}/>
                            </View>
                            <TextInput placeholder={"Phone Number"}
                                       placeholderTextColor={"#660032"}
                                       onChangeText={text => {
                                           phoneNumber = text
                                       }}
                                       keyboardType={"phone-pad"}
                            />

                        </View>
                    </View>
                    <View style={styles.inputSection}>
                        <View style={styles.passInput}>
                            <View style={styles.iconHolder}>
                                <MaterialCommunityIcons size={30}
                                                        name={"lock"}
                                                        color={"#660032"}/>
                            </View>
                            <TextInput placeholder={'Password'}
                                       placeholderTextColor={'#660032'}
                                       onChangeText={text => {
                                           password = text
                                       }}
                                       secureTextEntry={true}/>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonsArea}>
                    <View style={styles.forgetButton}>
                        <TouchableOpacity onPress={checkLogin}>
                            <Text style={styles.textForget}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginButton}>
                        <TouchableOpacity onPress={checkLogin}>
                            <Text style={styles.textLogin}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signupButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.textSignup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    form: {
        flex: 1,
        borderColor: '#660032',
        backgroundColor: 'white',
    },
    border: {
        flex: 1,
    },

    title: {
        position: 'absolute',
        // alignContent: 'center',
    },
    titleText: {
        fontSize: 26,
        color: '#660032',

        marginLeft: '56%',
        marginTop: '73%',
    },

    logoSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        // backgroundColor: 'red',
    },
    logo: {
        height: 125,
        width: 125,
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 150 / 2,

        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        // alignSelf: 'center',
        height: 87,
        width: 57,

        // marginTop: 12,
        marginLeft: 4,
    },

    inputsArea: {
        flex: 1,
    },
    inputSection: { // Used Twice !
        flex: 1,

        paddingHorizontal: 32,
    },
    iconHolder: {
        width: 32,
        // backgroundColor: 'red',
        marginRight: 7
    },
    phoneInput: {
        flexDirection: 'row',
        height: 50,

        backgroundColor: 'white',
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 30,

        paddingTop: 7,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 7,
    },
    passInput: {
        flexDirection: 'row',
        height: 50,

        backgroundColor: 'white',
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 30,

        paddingTop: 7,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 7,
    },


    buttonsArea: {
        flex: 1,
    },
    forgetButton: {
        marginTop: -40,
        marginBottom: 20,
    },
    loginButton: {
        marginHorizontal: 100,

        // backgroundColor: 'grey',
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 30,

        paddingTop: 2,
        paddingRight: 45,
        paddingLeft: 45,
        paddingBottom: 5,
    },
    textLogin: {
        fontSize: 26,
        color: '#660032',
        // marginLeft: 5,
        alignSelf: 'center',
    },
    textForget: {
        fontSize: 17,
        color: '#660032',
        // marginLeft: 5,
        alignSelf: 'center',
    },
    signupButton: {

        // backgroundColor: 'pink',
        // borderWidth: 1,

        marginHorizontal: 150,
        marginTop: 100,
    },
    textSignup: {
        fontSize: 22,
        color: '#660032',
        // marginLeft: 5,
        alignSelf: 'center',
    },
});