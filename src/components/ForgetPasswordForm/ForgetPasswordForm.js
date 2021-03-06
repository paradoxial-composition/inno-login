import React, { Component } from 'react';
import {
    Form, Icon, Input, Button
  } from 'antd';

class ForgetPasswordForm extends Component {
	constructor(props) {
		super();
		this.state = {
			redirect: false,
			forgot: false,
			email_forgot: '',
		};

		this.handleForgotSubmit = this.handleForgotSubmit.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
	}
	handleForgotSubmit (e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			console.log('Received values of form: ', values);
			this.props.toLoginForm();
	
		 console.log("handleForgotSubmit has passed, calling back end now");
		 this.props.toLoginForm();
		 }
		});
	}

	handleCancelClick (e) {
		e.preventDefault();
		this.props.toLoginForm();
	}
		

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
				<Form name="form-forget" onSubmit={this.handleForgotSubmit} className="login-form-forgot">
				  <Form.Item>
					{getFieldDecorator('email_forgot', {
					  rules: [{ required: true, message: 'Please input your email!' },
							  { type: 'email', message: 'Please input a valid email address !' }],
					})(
					  <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" onChange={(event) => this.setState({email_forgot:event.target.value} )}/>
					)}
				  </Form.Item>
				  <Form.Item>
					<a className="login-form-forgot" onClick={this.handleCancelClick}>Cancel</a>
					<Button type="primary" htmlType="submit" className="login-form-button"
					>
					  Confirm
					</Button>
				  </Form.Item>
				</Form>
		);
	}
}

ForgetPasswordForm.defaultProps = {
	backendPath: `http://localhost:8081/forgetPassword`
}
const WrappedLoginForm = Form.create({ name: 'normal_login' })(ForgetPasswordForm);

export default WrappedLoginForm;