//Aparecer suavemente//
import { View, Text, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { router } from "expo-router";


export default function Splash() {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            router.replace("/(tabs)");
        });
    }, []);

    return (
        <Animated.View style={{ flex: 1, justifyContent: "center", alignContent: "center", opacity }}>
            <Text>Splash Scren</Text>
        </Animated.View>
    );
}