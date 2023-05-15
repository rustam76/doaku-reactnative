import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Muslim from '../assets/muslim.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CardCom = props => {
  const {id, onPress, doa, isCollaps, ayat, latin, artinya} = props;
  return (
    <View className="bg-[#040C23] py-3">
      <TouchableOpacity onPress={onPress}>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center justify-center">
            <View className="flex items-center justify-center">
              <Image source={Muslim} className="" />
              <Text className="text-[#FFFFFF] font-medium text-[16px] absolute text-center">
                {id}
              </Text>
            </View>
            <Text className="px-2 text-[#FFFFFF] font-medium text-[16px]">
              {doa}
            </Text>
          </View>

          {isCollaps ? (
            <FontAwesome5 name="chevron-up" size={15} color="#A44AFF" />
          ) : (
            <FontAwesome5 name="chevron-down" size={15} color="#A44AFF" />
          )}
        </View>
      </TouchableOpacity>
      {isCollaps && (
        <View className="py-4">
          <View>
            <Text className="text-[#FFFFFF] font-bold text-[20px]">{ayat}</Text>
            <Text className="text-[#A19CC5] text-[14px] py-2">{latin}</Text>
          </View>
          <Text className="text-[#C0BED4] text-[16px]">{artinya}</Text>
        </View>
      )}
      <View className="border border-[#7B80AD10] rounded-full mt-[16px]"></View>
    </View>
  );
};

export default CardCom;
