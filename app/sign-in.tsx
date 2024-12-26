import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

import { logger } from "@/lib/logger";

const SignIn = () => {
  const handleSignIn = () => {
    logger.info("sign in");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-2/3" />

        <View className="px-10">
          <Text className="text-base font-rubik uppercase text-center text-black-200">
            Welcome To React Native Example
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's get you closer to {"\n"}
            <Text className="text-primary-300">Better examples</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to React Native Example with Google
          </Text>

          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
            onPress={handleSignIn}
          >
            <View className="flex flex-row items-center gap-2 justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-black-300">Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
