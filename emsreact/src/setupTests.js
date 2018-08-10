// This file is need to make mocked fetch calls work
// See https://github.com/jefflau/jest-fetch-mock#using-with-create-react-app

global.fetch = require('jest-fetch-mock');
