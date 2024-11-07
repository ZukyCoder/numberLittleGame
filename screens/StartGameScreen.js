import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={stylesStartGame.mainContainer}>
            <TextInput style={stylesStartGame.numberInputContainer} 
                       maxLength={2} 
                       keyboardType='number-pad'
                       autoCapitalize='none'
                       autoCorrect={false}/>
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
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 10 /* for Android */,
    shadowColor: 'black',    
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.75,
},
numberInputContainer: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: '#ddb52f',
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
},
                
});