import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={stylesStartGame.mainContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const stylesStartGame = StyleSheet.create({
mainContainer: {
    //flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 10 /* for Android */,
    shadowColor: 'black',    
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.75,
    
}
});