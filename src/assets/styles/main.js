import { StyleSheet } from 'react-native'

const config = {
  mBase: 20,
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f4f7fc',
    flex: 1,
    padding: 10,
  },
  shadow: {
    elevation: 1,
    shadowOffset: { width: 0, height: 0.5 },
    shadowColor: '#d3d7de',
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  mbBase: {
    marginBottom: config.mBase,
  },
})

const navbarDefault = {
  headerStyle: {
    backgroundColor: '#f4f7fc',
    borderBottomWidth: 0,
  },
  headerTintColor: '#1a1f36',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export { navbarDefault }

export default styles
