import { useGlobalContext } from "@/lib/global-provider";
import { logger } from "@/lib/logger";
import { View, Text, TouchableOpacity } from "react-native";

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    logger.info("logout");
    refetch();
  };

  return (
    <View>
      <Text>Profile</Text>

      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
