// This file is need to make mocked fetch calls work
// See https://github.com/jefflau/jest-fetch-mock#using-with-create-react-app
// It's also used to configure the Enzyme adaptor for React 16. It's needed for Enzyme to work

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
