/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Fccomponent from './src/components/Fccomponent';
import StackDemo from './Navigation/stack/StackDemo';
import Drawernavigator from './Navigation/drawer/Drawernavigator';

AppRegistry.registerComponent(appName, () => Drawernavigator);
