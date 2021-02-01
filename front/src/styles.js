import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    borderTopColor: 'black',
    borderTopWidth: 25
  },
  container: {
    flex: 1,
  },
  buttonBlock: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: 5
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
    margin: 10,
    backgroundColor: 'gray'
  },
  iconCross: {
    alignSelf: 'flex-start',
    marginTop: 5
  },
  flatList: {
    borderWidth: 5,
    borderColor: 'black'
  },
  greenbutton: {
    width: '33%',
    backgroundColor: 'green',
    height: 35,
    paddingVertical: 8,
    borderRadius: 5,
    margin: 2
  },
  redbutton: {
    width: '33%',
    backgroundColor: 'red',
    height: 35,
    paddingTop: 8,
    borderRadius: 5,
    margin: 2
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
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  crossedText: {
    fontSize: 13,
    textDecorationLine: 'line-through'
  },
  tabNav: {
    fontSize: 30
  },
  input: {
    height: 30, borderColor: 'gray', borderWidth: 1, margin: 4, padding: 2
  },
  addItem: {
  //  width: 100,
  } 
})

export default styles

export const stylesTailwind = {
  menuItem: 'h-20 uppercase w-full rounded-xl bg-gray-300 pl-10 py-6 flex flex-row mb-2',
  menuText: 'text-xl font-bold text-center',
}
