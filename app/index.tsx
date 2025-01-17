import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const index = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/welcome')
    }, 1000)
  }, [])
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/images/splashImage.png')}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral900
  },
  logo: {
    height: '20%',
    aspectRatio: 1
  }
})
