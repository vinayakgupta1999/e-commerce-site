import React, { useState } from 'react'
import "./login.css"
// import "antd/dist/antd.css";
import { Button, Form, Input, Card, message } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [form] = Form.useForm();
    const [formFilled, setFormFilled] = useState(true)
    const navigate=useNavigate()
    const onFinish = (values) => {
        const data = localStorage.getItem("users")
        const alluser = JSON.parse(data)
        if (alluser?.length) {
            const checkuser = alluser.filter((val) => val.emailAddress === values.emailAddress)
            if(checkuser.length){
                if(checkuser[0].password===values.password){
                    localStorage.setItem('currentuser',JSON.stringify(checkuser.emailAddress))
                    navigate('/home')
                }else{
                    message.warning("Incorrect username or password.")
                }
            }else{
            message.error('user not found')

            }
        } else {
            message.error('user not found')
        }

    };
    const onFormChange = (allFields) => {
        if (allFields?.every((item) => !!item.value || item.value === 0)) setFormFilled(false)
        else setFormFilled(true);
    }
    return (
        <div className='center-div'>
            <Card
                className='common-card'
            >
                <div>
                    <h1 className='heading'>Login</h1>
                    <Form
                        form={form}
                        name="basic"

                        wrapperCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFieldsChange={(changedFields, allFields) => {
                            onFormChange(allFields);
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label={false}
                            name="emailAddress"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: 'Wrong format!',
                                }
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item
                            label={false}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<UserOutlined />}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item className='text-center'>
                            <Button type="primary" htmlType="submit" className='btn-submit' disabled={formFilled}>
                                Submit
                            </Button>
                        </Form.Item>
                        <div className='text-center text-info' >New to FirstCry? <span style={{cursor:'pointer'}} onClick={()=>{navigate('/signup')}}>Register Here</span></div>
                    </Form>
                </div>
            </Card>
        </div>
    );
}

export default Login