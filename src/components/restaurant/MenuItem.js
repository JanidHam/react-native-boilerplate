import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const style = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemDescriptionContainer: {
    flex: 3,
    padding: 5,
  },
  itemDescriptionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescriptionSubTitle: {
    fontSize: 12,
    marginBottom: 5,
    color: 'gray',
  },
  itemDescriptionInfo: {
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 2,
    height: 80,
    padding: 5,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  itemPriceContainer: {
    flex: 1,
    padding: 5,
  },
})

const URI_IMAGE =
  'https://img-global.cpcdn.com/002_recipes/recipes_116031_v1419127785_receta_foto_00116031-hdzuxutbgf0qf577tqri/1280x1280sq70/photo.jpg'

const MenuItem = props => {
  const { uri = URI_IMAGE } = props

  return (
    <View style={style.itemContainer}>
      <View style={style.imgContainer}>
        <Image source={{ uri }} style={style.img} />
      </View>
      <View style={style.itemDescriptionContainer}>
        <Text style={style.itemDescriptionTitle}>Tomatillia Soup</Text>
        <Text numberOfLines={2} style={style.itemDescriptionSubTitle}>
          La mejor sopa de tortilla que puedas encontrar en tu perr#|@3
        </Text>
        <View style={style.itemDescriptionInfo}>
          <Text style={style.itemDescriptionSubTitle}>250g</Text>
          <Text style={style.itemDescriptionSubTitle}>450 kkal</Text>
        </View>
      </View>
      <View style={style.itemPriceContainer}>
        <Text>$30</Text>
      </View>
    </View>
  )
}

export default MenuItem
