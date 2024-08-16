import {AppRegistry} from 'react-native';

// app 1 - getting started
// import AppPro from './AppPro';

// app 2 - cards component ans styling 
// import App from './App';


// app 3 - password generator
import PasswordGenerator from './PasswordGenerator';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PasswordGenerator);
