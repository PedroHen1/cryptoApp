import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  FlatList,
  Image,
  TextInput
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import { styles } from './style';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const Home = () => {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=14d')
    .then(res => {setCoins(res.data)})  
    .catch(error => console.log(error))
  }, []);

  const data = coins;

  const renderCategoryItem = ({item}) => {
    return (
      <View style={styles.cryptoItemWrapper}>
          <View style={styles.cryptoItemImage}>
            <Image 
                source={{uri: item.image}}
                style={{
                    width: 30,
                    height: 30,
                }}
            />
          </View>

          <View style={styles.cryptoItemNameWrapper}>
            <Text style={styles.cryptoItemName}>{item.name}</Text>
            <Text style={styles.cryptoItemSymbol}>{item.symbol}</Text>
          </View>

          <View style={styles.chartWrapper}>
            <LineChart 
                withHorizontalLabels={false}
                withVerticalLabels={false}
                withDots={false}
                withInnerLines={false}
                withOuterLines={false}
                withVerticalLines={false}
                data={{
                    datasets: [
                        {
                            data: item.sparkline_in_7d.price,
                            strokeWidth: 1,
                        }
                    ]
                }}
                width={100}
                height={60}
                chartConfig={{
                    color: () => 'rgba(11,156,49,0.8)',
                    backgroundGradientFrom: "#050a11",
                    backgroundGradientTo: "#050a11",              
                }}
                bezier
                style={{
                    paddingRight: 0,
                }}
            />
          </View>

          <View style={styles.cryptoItemPriceWrapper}>
                <Text style={styles.cryptoItemPrice}>${item.current_price.toLocaleString('en-US')}</Text>
                <View style={styles.cryptoItemPercentageWrapper} >
                    <Text style={{color: (item.price_change_percentage_24h > 0 ) ? 'green' : 'red'}} >{item.price_change_percentage_24h.toFixed(2)} %</Text>
                    <Feather name='arrow-up-right' size={13} style={{
                        color: (item.price_change_percentage_24h > 0 ) ? 'green' : 'red',
                        transform: (item.price_change_percentage_24h > 0 ) ? [{rotate: '0deg'}] : [{rotate: '90deg'}]
                        }} />
                </View>        
          </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.headerWrapper}>
            <Feather name='align-left' size={24} color={'#feffff'} />
            <View>
                <Image source={{uri:'https://github.com/PedroHen1.png'}} style={styles.profileImage}/>
            </View>
        </View>

        {/* Balance info */}
        <View style={styles.balanceWrapper}>
            <Text style={styles.balanceTitle}>Portfolio</Text>
            <View style={styles.balanceValueWrapper}>
                <Text style={styles.balanceValue}>3784.88</Text>
                <Text style={styles.balanceValueCoin}>USD</Text>
            </View>
            <View style={styles.balanceTrendingWrapper}>
                <Text style={styles.balanceTrending}>+2.77%</Text>
                <Feather name='trending-up' size={24} color={'#49976A'} />
            </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
            <Feather name='search' size={17} color={'#feffff'} />
            <TextInput placeholder={'Search...'} placeholderTextColor={'#99A4AE'} style={styles.searchInput} />
            <Ionicons name='filter' size={17} color={'#feffff'} />
        </View>
        
      <FlatList 
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default Home;
