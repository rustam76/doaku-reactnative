import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  BannerAd,
  TestIds,
  useInterstitialAd,
} from '@react-native-admob/admob';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/AntDesign';
import {findAllData, findSearchData} from '../api/api';
import Muslim from '../assets/muslim.png';
import CardCom from '../components/CardCom';
import Loading from '../components/Loading';
import mandoa from '../assets/mandoa.png';
const HomePage = () => {
  const [data, setData] = React.useState(null);
  const [isCollaps, setCollaps] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [isLoadings, setLoadings] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [isData, setIsData] = React.useState(true);
  const findAll = async () => {
    const result = await findAllData();
    setData(result);
    setLoadings(false);
  };
  

  const findSearch = async query => {
    try {
      const result = await findSearchData(query);
      if (result && result.length > 0) {
        if (result[0].msg) {
          setMsg(result[0].msg);
          setLoading(true);
        }
      } else {
        setSearchQuery(result);
        setLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    findAll();
    findSearch();
  }, []);

  const handleSearch = query => {
    if (!query) {
      findAll();
      setIsData(true);
      setLoading(false);
    } else {
      findSearch(query);
      setIsData(false);
    }
  };

  const handleCollaps = index => {
    setCollaps(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCollaps2 = () => {
    isCollaps ? setCollaps(false) : setCollaps(true);
  };

  if (isLoadings || data === null) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#040C23]">
      <View className="flex-1 bg-[#3B1E77]">
      <View className="px-5 py-4">
        <View className="flex-row items-center justify-between">
          <View className="w-36">
          <Text className="text-[#FFFFFF] font-medium text-[20px]">
            {`Kumpulan \nDoa Doa Islam`}
          </Text>
          </View>
          <Image source={mandoa} className="h-32 w-32" />
        </View>
        <View className="flex pt-3 justify-center">
          <TextInput
            className=" w-full rounded-full py-3 px-12 border-2 border-gray-300 text-[#FFFFFF]"
            placeholder="Search"
            placeholderTextColor="#999999"
            onChangeText={handleSearch}
          />
          <View className="absolute pl-3 pt-3">
            <FontAwesome5 name="search1" size={25} color="#fff" />
          </View>
        </View>
      </View>
      <View style={{flex: 1, borderTopRightRadius: 40, borderTopLeftRadius: 40, backgroundColor: '#040C23',paddingTop:30 }}>
        <ScrollView
          className="px-5 py-4 ">
          <View className="">
            {isData ? (
              <View>
                {data.map((item, i) => (
                  <CardCom
                    key={i}
                    id={item.id}
                    doa={item.doa}
                    isCollaps={isCollaps[i]}
                    ayat={item.ayat}
                    latin={item.latin}
                    artinya={item.artinya}
                    onPress={() => handleCollaps(i)}
                  />
                ))}
              </View>
            ) : (
              <View>
                {isLoading ? (
                  <View>
                    <Text className="text-center px-2 text-[#FFFFFF] font-medium text-[16px]">
                      {msg}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <CardCom
                      id={searchQuery.id}
                      doa={searchQuery.doa}
                      isCollaps={isCollaps}
                      ayat={searchQuery.ayat}
                      latin={searchQuery.latin}
                      artinya={searchQuery.artinya}
                      onPress={() => handleCollaps2()}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      </View>
      <View className="items-center">
      <BannerAd size={'BANNER'} unitId={'ca-app-pub-8389654504160551/7030640261'} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
