import React from 'react';
import './register.scss';

const Register = () => {
  return (
    <div id='login-page vh-100 mt-5'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-9 col-lg-6 col-xl-5'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
              className='img-fluid'
              alt='Sample image'
            />
          </div>
          <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5'>
            <form onSubmit={() => {}}>
              <div className='form-outline mb-4'>
                <label className='form-label'>Email address</label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  placeholder='Enter a valid email address'
                />
              </div>

              <div className='form-outline mb-3'>
                <label className='form-label'>Password</label>
                <input
                  type='password'
                  className='form-control form-control-lg'
                  placeholder='Enter password'
                />
              </div>

              <div className='d-flex justify-content-between align-items-center'>
                <div className='form-check mb-0'>
                  <label className='form-check-label'>Remember me</label>
                  <input className='form-check-input me-2' type='checkbox' value='' />
                </div>
                <a href='#!' className='text-body'>
                  Forgot password?
                </a>
              </div>

              <div className='text-center text-lg-start mt-4 pt-2'>
                <button
                  type='button'
                  className='btn btn-primary btn-lg'
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Login
                </button>
              </div>

              <div className='divider d-flex align-items-center my-4'>
                <p className='text-center fw-bold mx-3 mb-0'>Or</p>
              </div>

              <div className='d-flex flex-row align-items-center justify-content-center justify-content-lg-start'>
                <p className='lead fw-normal mb-0 me-3'>Sign in with</p>
                <button type='button' className='btn btn-primary btn-floating mx-1'>
                  <i className='fab fa-facebook-f'></i>
                </button>

                <button type='button' className='btn btn-primary btn-floating mx-1'>
                  <i className='fab fa-google'></i>
                </button>

                <button type='button' className='btn btn-primary btn-floating mx-1'>
                  <i className='fab fa-github'></i>
                </button>
              </div>
              <div className='mt-5'>
                <p className='small fw-bold mt-2 pt-1 mb-0'>
                  Dont have an account?{' '}
                  <a href='#!' className='link-danger'>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
