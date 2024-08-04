import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import ClosetTab from "./closet/ClosetTab";
import { useUser } from "../config/user-context";
import { getClosetsbyUserId } from "@/network/web/closet";
import ClosetType from "@/utils/types/ClosetType";

const HomeTabs = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Closet");
  const [closets, setClosets] = useState<ClosetType[]>();

  useEffect(() => {
    const fetchClosets = async () => {
      if (user?.id) {
        try {
          const fetchedClosets = await getClosetsbyUserId({
            user_id: user?.id,
          });
          console.log("Closets for user:", fetchedClosets);
          setClosets(fetchedClosets);
        } catch (error) {
          console.error("Error fetching user closets:", error);
        }
      }
    };

    fetchClosets();
  }, [user]);

  console.log("Closets", closets);

  return (
    <View className="mt-4">
      <View className="flex-row justify-between items-center mb-1 border-b-[2px] border-[#F3F3F3] pb-2">
        <Pressable
          onPress={() => setActiveTab("Closet")}
          className="flex-1 items-start"
        >
          <View>
            <Text
              className={`${activeTab === "Closet" ? "font-bold" : ""} text-base text-left`}
            >
              Closet ({closets?.length})
            </Text>
            {activeTab === "Closet" && (
              <View
                className="h-0.5 bg-black absolute left-0 right-0 mt-2"
                style={{ bottom: -10 }}
              />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("Pieces")}
          className="flex-1 items-center"
        >
          <View>
            <Text
              className={`${activeTab === "Pieces" ? "font-bold" : ""} text-center text-base`}
            >
              Pieces (11)
            </Text>
            {activeTab === "Pieces" && (
              <View
                className="h-0.5 bg-black absolute left-0 right-0 mt-2"
                style={{ bottom: -10 }}
              />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("Fits")}
          className="flex-1 items-end"
        >
          <View>
            <Text
              className={`${activeTab === "Fits" ? "font-bold" : ""} text-right text-base`}
            >
              Fits (2)
            </Text>
            {activeTab === "Fits" && (
              <View
                className="h-0.5 bg-black absolute left-0 right-0 mt-2"
                style={{ bottom: -10 }}
              />
            )}
          </View>
        </Pressable>
      </View>
      <View className="mt-1">
        {activeTab === "Closet" && <ClosetTab closetCards={closets} />}
        {activeTab === "Pieces" && <Text>Pieces Content</Text>}
        {activeTab === "Fits" && <Text>Fits Content</Text>}
      </View>
    </View>
  );
};

export default HomeTabs;
