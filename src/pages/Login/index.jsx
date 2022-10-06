import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, watch, formState = { errors } } = useForm();
  const allFilelsValue = watch();
  console.log(allFilelsValue);

  return (
    <div>
      <form>
        <label>User Name</label>
        <input
          type='text'
          name='userName'
          {...register('userName', { required: 'Vui lòng nhập tên' })}
          placeholder='User Name'
        />
        <label>Password</label>
        <input
          type='text'
          name='password'
          {...register('password', {
            required: 'Vui lòng nhập mật khẩu',
            maxLength: {
              value: 8,
              message: 'Tối đa 8 ký tự', // JS only: <p>error message</p> TS only support string
            },
          })}
          placeholder='Password'
        />
        <label htmlFor=''>Phone Number</label>
        <input type='text' name='phone' {...register('phone', { valueAsNumBer: true })} />
      </form>
    </div>
  );
};

export default Login;
