import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity, } from 'react-native'
import NumberFormat from 'react-number-format'

import styles from './styles'

const ListRow = () => {

  return(
    <View style={styles.out}>
      <View style={styles.line}>
        <Text style={styles.text}>{title}</Text>
        <NumberFormat
          value={desc}
          displayType={'text'}
          thousandSeparator={" "}
          renderText={valor => <Text style={styles.text}>{valor}</Text>} />
      </View>
    </View>
  )
}
export default ListRow