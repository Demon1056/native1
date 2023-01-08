import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MainTaB = createBottomTabNavigator();

const Home = ({ logOut }) => {
  return (
    <MainTaB.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarItemStyle: { borderRadius: 20, height: 40 },
        tabBarStyle: {
          paddingHorizontal: 81,
          paddingVertical: 9,
        },
      }}
      initialRouteName="Публикации"
      sceneContainerStyle={{
        backgroundColor: "FFFFFF",
        marginHorizontal: 16,
      }}
    >
      <MainTaB.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIconStyle: { color: "red" },
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="appstore-o"
                size={24}
                color={focused ? "#FFFFFF" : color}
              />
            );
          },

          headerRight: () => (
            <Ionicons
              name="exit-outline"
              size={24}
              color="grey"
              onPress={() => logOut(false)}
            />
          ),
        }}
      ></MainTaB.Screen>
      <MainTaB.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons
              name="plus"
              size={24}
              color={focused ? "#FFFFFF" : color}
            />
          ),
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} color="grey" />
          ),
        }}
      ></MainTaB.Screen>
      <MainTaB.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? "#FFFFFF" : color}
            />
          ),
        }}
      ></MainTaB.Screen>
    </MainTaB.Navigator>
  );
};

export default Home;
