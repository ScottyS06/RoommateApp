import react, {useMemo} from 'react';

import {
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    Text,
    Pressable,
  } from 'react-native';

  const {width} = Dimensions.width('window');
  const ITEM_WIDTH = width * 0.12;
  const ITEM_HEIGHT = 70;
  const ITEM_OFFSET = ITEM_WIDTH + 12;

  interface Props{
      selectedDate: Date;
      selectedDate: Date date => void;
  }

  function getDateString(date: Date): string{
    return date.toString().split(" ")[0];
  }

  function dateSubractDays(date: Date, days: number){
      var result = new Date(date);
      result.setDate(result.getDate() - days);
      return result;
  }