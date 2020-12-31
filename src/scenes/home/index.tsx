import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {styles} from './styles';
import logo from '../../assets/images/logo.jpeg';
import {strings} from './strings';

export const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Butterfly</Text>
          <Text style={styles.sectionDescription}>
            <Text style={styles.highlight}>{strings.companyName}</Text>
            {strings.typeOfProject}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};
