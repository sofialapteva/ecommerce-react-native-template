import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    borderTopColor: '#127475',
    borderTopWidth: 25,
    backgroundColor: '#127475'
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
    marginVertical: 15
  },
  itemOnMain: {
    marginHorizontal: 3,
    paddingVertical: 1,
    height: '8rem',
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 15,
  },
  emptyCartImage: {
    width: 200,
    height: 200,
    maxWidth: '90%',
    marginHorizontal: 'auto',
    marginTop: '10%',
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
    backgroundColor: '#0e9594',
    height: 35,
    paddingVertical: 8,
    borderRadius: 5,
    margin: 2
  },
  redbutton: {
    width: '33%',
    backgroundColor: '#f2542d',
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
    backgroundColor: '#127475',
    width: '100%',
    minHeight: 50,
    maxHeight: '7%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
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
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
    padding: 2
  },
  addItem: {
    //  width: 100,
  }
})

export default styles

export const stylesTailwind = {
  menuItem: 'h-20 uppercase w-full rounded-xl bg-gray-300 pl-10 py-6 flex flex-row mb-2',
  menuText: 'text-xl font-bold text-center',
  img: 'h-28 w-28 m-2 bg-gray-200',
  label: 'flex justify-around py-10 text-left w-5/12',
}
