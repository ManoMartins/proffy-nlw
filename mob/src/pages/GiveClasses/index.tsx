import React, { useCallback } from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';
import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
    
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBackgroundImage} 
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>

      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
};

export default GiveClasses;
