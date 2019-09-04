import React, { Fragment } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import Card from '@components/common/Card'

const style = StyleSheet.create({
  headerContainer: {
    height: 350,
    backgroundColor: '#f4f7fc',
    zIndex: 1,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: 'white',
    fontSize: 34,
    zIndex: 1,
    fontWeight: '900',
    marginLeft: '5%',
    marginBottom: '10%',
    maxWidth: '60%',
  },
  imgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  cardContainer: {
    height: 30,
    width: 60,
    position: 'absolute',
    bottom: -15,
    left: '5%',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  cardTxt: {
    color: '#000',
    fontWeight: '500',
  },
  restaurantInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    zIndex: 1,
  },
  foodCategoryCard: {
    backgroundColor: '#fafa93',
    width: 90,
    height: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  restaurantDistanceTxt: {
    color: 'white',
    fontWeight: '900',
  },
  foodCategoryCardTxt: {
    color: '#000',
    fontSize: 10,
    fontWeight: '500',
  },
})

const TITLE_DEFAULT = "Mama's Tasty Pasta"
const URI_DEFAULT =
  'https://www.discoverwalks.com/blog/wp-content/uploads/2018/12/womaneatingslim-1024x683.jpg'

const HeaderRestaurant = props => {
  const { title = TITLE_DEFAULT, uri = URI_DEFAULT } = props

  return (
    <Fragment>
      <View style={style.restaurantInfoContainer}>
        <Card style={style.foodCategoryCard}>
          <Text style={style.foodCategoryCardTxt}>BEST PASTA</Text>
        </Card>
        <Text style={style.restaurantDistanceTxt}>2.5 km</Text>
      </View>
      <Text style={style.headerTitle}>{title}</Text>
      <View style={style.imgContainer}>
        <Image source={{ uri }} style={style.img} />
      </View>
      <View style={style.cardContainer}>
        <Card style={style.card}>
          <Text style={style.cardTxt}>4.8</Text>
        </Card>
      </View>
    </Fragment>
  )
  // return (
  //   <View style={style.headerContainer}>
  //     <View style={style.restaurantInfoContainer}>
  //       <Card style={style.foodCategoryCard}>
  //         <Text style={style.foodCategoryCardTxt}>BEST PASTA</Text>
  //       </Card>
  //       <Text style={style.restaurantDistanceTxt}>2.5 km</Text>
  //     </View>
  //     <Text style={style.headerTitle}>{title}</Text>
  //     <View style={style.imgContainer}>
  //       <Image source={{ uri }} style={style.img} />
  //     </View>
  //     <View style={style.cardContainer}>
  //       <Card style={style.card}>
  //         <Text style={style.cardTxt}>4.8</Text>
  //       </Card>
  //     </View>
  //   </View>
  // )
}

export default HeaderRestaurant
