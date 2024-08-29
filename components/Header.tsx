import React, {useEffect, useState} from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    Image

} from 'react-native';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { styled } from 'nativewind';

const StyledPressable = styled(TouchableOpacity);

const navigation = [
    {name:'home',href:'#', current: true , uri:'https://www.freepnglogos.com/uploads/logo-home-png/home-logo-images-black-5.png'},
    {name:'profile', href:'#',current: false, uri:'https://cdn.icon-icons.com/icons2/1747/PNG/512/profile_113589.png'},
];

const Header = () => { 

    const [navItems, setNavItems] = useState(navigation);
    const [currentComponent, setCurrentComponent] = useState(<HomePage />)

    const onClickButtons = ({name}) => {
        const updatedNavigation = navItems.map((item, index) => {
            if (item.name == name) {
              return {...item, current: true};
              
            } else {
              return {...item, current: false};
            }
          });

        setNavItems(updatedNavigation);

        if(name === 'home'){
            setCurrentComponent(<HomePage />)
        }
        if(name === 'profile'){
            setCurrentComponent(<ProfilePage />)
        }
        return undefined;
    }

    return (
            <View>
                {currentComponent}
                <View className='flex justify-center items-center h-screen relative'>
                    <View className='absolute bottom-10 flex-row gap-5'>

                        {navItems.map((item) => (
                        <StyledPressable
                            key={item.name}
                            
                            aria-current={item.current ? 'page' : undefined}
                            className={`border p-1 rounded-md ${item.current ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} 
                        onPress={() => onClickButtons({name: item.name})}>
                            <Image source={{uri: item.uri}} style={{width: 35, height: 35}}  />
                        </StyledPressable>
                        ))}
                    </View>

                    

                </View>

                
                

            </View>
            
        
    );
}

export default Header;