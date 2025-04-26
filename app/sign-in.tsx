import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";

const SignIn = () => {
  const handleLogin = async() => {
    const result = await login();
    if(result){
      console.log("Login successfully!")
    }else{
      Alert.alert("Error","Failed to login")
    }
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="font-rubik-bold text-black-300 text-base text-center uppercase">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-bold text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-8">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full py-2 mt-3"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center gap-3">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
