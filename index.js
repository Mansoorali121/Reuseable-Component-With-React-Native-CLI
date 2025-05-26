/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Fccomponent from './src/components/Fccomponent';

AppRegistry.registerComponent(appName, () => Fccomponent);
