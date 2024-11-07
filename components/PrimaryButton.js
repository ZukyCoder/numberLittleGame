import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}) {

    function onPress() {
        console.log('pressed');
    }

    return (
        <View style={styleButton.mainContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styleButton.pressedContainer, styleButton.onPressedContainer] : styleButton.pressedContainer } 
                onPress={onPress} 
                android_ripple={{color: '#c9759f'}}
            >
                <Text style={styleButton.textContainer}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;
const styleButton = StyleSheet.create({
    mainContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    pressedContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        opacity: 0.75,
    },
    onPressedContainer: {
        opacity : 0.75,
        backgroundColor: '#c9759f',
    },
    textContainer: {
        textAlign: 'center',
        color: 'white'
    },
})