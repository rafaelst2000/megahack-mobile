import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  out: {
    flexDirection: 'row',
    maxWidth: 440,
  },

  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    borderBottomColor: "#71bf44",
    borderBottomWidth: 2
  },

  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 300,
    lineHeight: 32,
  }
})
export default styles