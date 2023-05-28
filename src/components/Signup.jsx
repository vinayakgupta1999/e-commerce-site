import React, { useState } from 'react'
import "./login.css"
import { Button, Form, Input, Card, message } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [form] = Form.useForm();
    const [formFilled, setFormFilled] = useState(true)
    const navigate=useNavigate()
    const onFinish = (values) => {
        const data = localStorage.getItem("users")
        const alluser = JSON.parse(data)
        console.log(alluser)
        if (alluser?.length) {
            const checkuser = alluser.filter((val) => val.emailAddress == values.emailAddress)
            if (checkuser.length) {
                message.error("email already exist")
            } else {
                localStorage.setItem("users", JSON.stringify([...alluser, values]))
                navigate('/login')
            }
        } else {
            localStorage.setItem("users", JSON.stringify([values]))
            navigate('/login')
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
                    <h1 className='heading'>SignUp</h1>
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
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="FirstName"
                            />
                        </Form.Item>

                        <Form.Item
                            label={false}
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your lastname!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="LastName"
                            />
                        </Form.Item>

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
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<UserOutlined />}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            label={false}
                            name="cpassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('confirm password not match to password!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<UserOutlined />}
                                placeholder="Confirmm Password"
                            />
                        </Form.Item>
                        <Form.Item className='text-center'>
                            <Button type="primary" htmlType="submit" className='btn-submit' disabled={formFilled}>
                                Submit
                            </Button>
                        </Form.Item>
                        <div className='text-center text-info' >Do you have already account? <span style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>Login Here</span></div>

                    </Form>
                </div>
            </Card>
        </div>
    );
}

export default Signup