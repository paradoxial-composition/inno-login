import React from 'react';
import './ChangePassword.css';
import {
      Card, Form, Icon, Input, Button
    } from 'antd';
import Login from '../Login/Login';
  
    
class ChangePassword extends React.Component {
      state = {
        password:'',
        passwordConfirm: '',
        redirect: false,
        
    }

      handleClick = event => {
        event.preventDefault();
          //back end communication logic here
          // axios backend call to validate password
          this.props.form.validateFields((err, values) => {
            if (!err) {
              this.setState({
                  redirect: true
                  });
              
            }
          });
          
      }
  
  
      render() {
       
  
        const { getFieldDecorator } = this.props.form;
        const redirect = this.state.redirect;
      
        if(redirect) {
          //redirection ex: return <Redirect to="/login" />
              //Password Form
              //return <Login />
        } else {
              return (
                <div className="centered">
                  <Card style={{ width: 300 }}>
                  <Form onSubmit={this.handleSubmit} className="login-form">
  
                   
                    <Form.Item>
                    <label>please type in your password:</label>
                        {getFieldDecorator('password', {
                          rules: [{ required: true, message: 'Please input your password' }],
                        })(
                          <Input type="password"  prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" onChange={(event) => this.setState({password:event.target.value} )} />
                        )}
                     </Form.Item>
                     <Form.Item>
                     <label>please confirm your password:</label>
                        {getFieldDecorator('confirmpass', {
                          rules: [{ required: true, message: 'Please confirm your password' }],
                        })(
                          <Input type="password"  prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" onChange={(event) => this.setState({passwordConfirm:event.target.value} )} />
                        )}
                     </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button"
                      onClick={this.handleClick}
                      >
                        Confirm
                      </Button>
                    </Form.Item>
              </Form>
                </Card>
                </div>
                
              );
        }
      }
    }
    
    const WrappedLoginForm = Form.create({ name: 'normal_login' })(ChangePassword);
  
    export default WrappedLoginForm;


  // /* jshint ignore:start */
  // class LoginForm extends React.Component {
  //   state = {
  //     password:'',
  //     redirect: false,
      
  // }

  //   handleClick = event => {
  //     event.preventDefault();
  //     //backend communication logic here

  //       this.setState({
  //         redirect: true
  //     });
  //   }


  //   render() {
     

  //     const { getFieldDecorator } = this.props.form;
  //     const redirect = this.state.redirect;
  //     if(redirect) {
  //       //redirection ex: return <Redirect to="/login" />
  //           //Password Form
  //     } else {
  //           return (
  //             <div className="centered">
  //               <Card style={{ width: 300 }}>
  //               <Form onSubmit={this.handleSubmit} className="login-form">

  //                 <label>please type in your pwd:</label>
  //                 <Form.Item>
  //                     <Input type="password"  prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" onChange={(event) => this.setState({password:event.target.value} )} />
  //                  </Form.Item>
  //                 <Form.Item>
  //                   <Button type="primary" htmlType="submit" className="login-form-button"
  //                   onClick={this.handleClick}
  //                   >
  //                     Confirm
  //                   </Button>
  //                 </Form.Item>
  //           </Form>
  //             </Card>
  //             </div>
              
  //           );
  //     }
  //   }
  // }
  
  // const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

  // export default WrappedLoginForm;