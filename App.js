import { StatusBar } from 'expo-status-bar';
import {MyStack} from './stack/MyStack'
import themes from './themes/themes';

export default function App() {
  return (
    <>
      <MyStack/>
      <StatusBar 
      style="auto"
      backgroundColor={themes.COLORS.STATUS_BAR_COLOR}/>
    </>
  );
}