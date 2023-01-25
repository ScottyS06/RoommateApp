import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import { Icon } from 'react-native-elements'

const HomeScreen = ({navigation}) => {
    return(
        
        <SafeAreaView style={{flex: 1, paddingHorizontal: 20, marginLeft:15}}>
            {/* Title */}
            <View style={styles.header}>
                <View>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome </Text>
                <Text style={{fontSize: 38, fontWeight: 'bold'}}>Sankalp Varshney </Text>
                </View>
            </View>

            {/* Roomates */}
            <View style={{marginTop: 30, flexDirection: 'column'}}>
                <Text style={{paddingBottom:10, fontSize:18}}>Roomies</Text>
                <View style={{flexDirection:'row'}}>
                    <Icon name="person" size={30} style={{borderWidth: 2, borderRadius:10}}/>
                    <Icon name="person" size={30} style={{marginLeft: 15, borderWidth: 2, borderRadius:10}}/>
                    <Icon name="person" size={30} style={{marginLeft: 15, borderWidth: 2, borderRadius:10}}/>
                    <Icon name="add" size={30} style={{marginLeft: 15, borderWidth: 2, borderRadius:10}}/>
                </View>
                
            
            </View>
            
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default HomeScreen;