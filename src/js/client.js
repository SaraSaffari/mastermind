import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/main.scss');
require('../../node_modules/bootstrap/scss/bootstrap.scss');
// require('bootstrap'); // requires jquery

import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
