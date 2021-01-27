import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: 25
  },
  cart: {
    height: '93%',
    width: '100%',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 3,
  },
  listOfItemsInCard: {
    height: 250,
    width: '100%',
  },
  buttonBlock: {
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5
  },
  itemInCart: {
    backgroundColor: 'rgba(95, 95, 95, 0.2)',
    height: 100,
    marginVertical: 5,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emptyCartImage: {
    color: 'blue',
    width: 200,
    height: 200,
    maxWidth: '90%',
    marginHorizontal: 'auto',
    marginTop: '10%',
  },
  cartImg: {
    height: '60%',
    width: '20%',
    borderRadius: 10,
    margin: 10
  },
  iconCross: {
    alignSelf: 'flex-start',
    marginTop: 5
  },
  flatList: {
    borderWidth: 5,
    borderColor: 'black'
  },
  greenBtn: {
    width: '33%',
    backgroundColor: 'green',
    height: 35,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 1
  },
  grayBtn: {
    width: '33%',
    backgroundColor: 'red',
    height: 35,
    paddingTop: 8,
    borderRadius: 5,
    marginHorizontal: 1
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  navbar: {
    backgroundColor: 'blue',
    width: '100%',
    minHeight: 50,
    maxHeight: '7%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  },
  largeText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3
  },
  crossedText: {
    fontSize: 15,
    textDecorationLine: 'line-through'
  }
})

export default styles
