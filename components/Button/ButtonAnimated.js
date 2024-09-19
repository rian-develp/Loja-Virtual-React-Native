import { Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import themes from '../../themes/themes';

export const ButtonAnimated = ({ top, marginStart, buttonAnimation, buttonTitle, animationDeley, onPress = () => {}}) => {
    return (
        <Animatable.View
            animation={buttonAnimation}
            delay={animationDeley}
            style={{
                width: '80%',
                height: '16%',
                backgroundColor: themes.COLORS.PURPLE,
                borderRadius: themes.DIMENSIONS.BORDER_RADIUS_24PX,
                top: top,
                marginStart: marginStart
            }}
        >
            <TouchableOpacity
                style={{ 
                    height: '100%', 
                    width: '100%', 
                    justifyContent: 'center', 
                    left: '40%'
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        color: themes.COLORS.WHITE, 
                        fontWeight: 'bold', 
                        fontSize: themes.FONT_SIZES.SUBTITLE_SIZE
                    }}>{buttonTitle}</Text>
            </TouchableOpacity>
        </Animatable.View>
    );
}