import React from 'react';

import './Login.css';
import LoginForm from '../LoginForm';
import { Card } from 'antd';


const Login = props => (
    <div className="centered">
        <Card style={{ width: 300 }}>
            <LoginForm backendLoginPath='test' />
        </Card>
    </div>
);
  
  export default Login;