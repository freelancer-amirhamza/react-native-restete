import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex w-full h-full border items-center text-white justify-center bg-black-300">
      <View className="flex flex-col items-center gap-3 justify-center w-fit p-5 
       h-fit border border-white rounded-lg shadow-md ">
      <Text className="text-white text-4xl font-semibold text-center">Welcome to the My First App</Text>
      <Text className="text-white text-xl" >Click on the links below to navigate</Text>
      <Link className="text-white font-bold text-xl cursor-pointer" href="/sign-in" >Sign In</Link>
      <Link className="text-white font-bold text-xl cursor-pointer" href="/explore" >Explore</Link>
      <Link className="text-white font-bold text-xl cursor-pointer" href="/profile" >Profile</Link>
      <Link className="text-white font-bold text-xl cursor-pointer" href="/properties/1" >Properties</Link>
      </View>
    </View>
  );
}
