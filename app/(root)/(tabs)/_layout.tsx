import TabIcon from "@/components/tab-icon";
import icons from "@/constants/icons";
import { Tabs } from "expo-router";

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "white",
        position: "absolute",
        borderTopColor: "#0061FF1A",
        borderTopWidth: 1,
        minHeight: 70,
      },
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} title="Home" />,
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        title: "Explore",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.search} title="Explore" />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.person} title="Profile" />
        ),
      }}
    />
  </Tabs>
);

export default TabsLayout;
