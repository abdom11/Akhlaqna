import React, {Component} from "react";
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from "./components/homepage/homepage.js";
import SignUp from "./components/signUp/signUp";
import SignUpPhone from "./components/signUp/signUpPhone";
import SignUpEmail from "./components/signUp/signUpEmail";
import SignUpQID from "./components/signUp/signUpQID";
import SignUpConfirmation from "./components/signUp/signUpConfirmation";
import PostsPage from "./components/Pages/postsPage";
import SearchPage from "./components/Pages/searchPage";
import NotificationsPage from "./components/Pages/notificationsPage";
import ChatsPage from "./components/Pages/chatsPage";
import AddPostPage from "./components/Pages/addpostPage";
import Chat from "./components/Pages/chat";
import FoundPage from "./components/Pages/foundPage";
import LostPage from "./components/Pages/lostPage";
import PersonProfile from "./components/Pages/PersonProfile";
import AccountPage from "./components/Pages/AccountPage";
import SettingPage from "./components/Pages/SettingPage";

const Stack = createNativeStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Homepage" component={Homepage}/>

                    {/* Sign Up Section */}
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="SignUpQID" component={SignUpQID}/>
                    <Stack.Screen name="SignUpPhone" component={SignUpPhone}/>
                    <Stack.Screen name="SignUpEmail" component={SignUpEmail}/>
                    <Stack.Screen name="SignUpConfirmation" component={SignUpConfirmation}/>

                    {/* Posts Page */}
                    <Stack.Screen name="PostsPage" component={PostsPage}/>

                    {/* Search Page */}
                    <Stack.Screen name="SearchPage" component={SearchPage}/>

                    {/* Notifications Page */}
                    <Stack.Screen name="NotificationsPage" component={NotificationsPage}/>

                    {/* Chats Page */}
                    <Stack.Screen name="ChatsPage" component={ChatsPage}/>

                    {/* Add Post Page */}
                    <Stack.Screen name="AddPostPage" component={AddPostPage}/>

                    {/* Chat Page */}
                    <Stack.Screen name="Chat" component={Chat}/>

                    {/* Found Page */}
                    <Stack.Screen name="FoundPage" component={FoundPage}/>

                    {/* Lost Page */}
                    <Stack.Screen name="LostPage" component={LostPage}/>

                    {/* Person Profile */}
                    <Stack.Screen name="PersonProfile" component={PersonProfile}/>

                    {/* Account Page */}
                    <Stack.Screen name="AccountPage" component={AccountPage}/>

                    {/* Setting Page */}
                    <Stack.Screen name="SettingPage" component={SettingPage}/>

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

function HomeScreen({navigation, route}) {
    let pages =
        [
            'Homepage',
            'SignUp',
            'SignUpQID',
            'SignUpPhone',
            'SignUpEmail',
            'SignUpConfirmation',
            'PostsPage',
            'SearchPage',
            'NotificationsPage',
            'ChatsPage',
            'AddPostPage',
            'Chat',
            'FoundPage',
            'LostPage',
            'PersonProfile',
            'AccountPage',
            'SettingPage'
        ];

    let btns = [];
    for (let i = 0; i < pages.length; i++) {
        btns.push(<Button
            title={"Go to " + pages[i]}
            onPress={() => navigation.navigate(pages[i])}
        />);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {btns}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
