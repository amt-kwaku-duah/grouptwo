// import React from 'react';

const ColRight = () => (
  <div className="col-right">
    <div className="login-form">
      <div className="login">
        <div className="logo">
          <div className="logo-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path d="M38.6953 25.1006L18.6835 34.9935L18.3838 34.3871C12.9201 23.3349 17.4505 9.94609 28.5026 4.4824L38.6953 25.1006Z" fill="#3CCB7F"/>
              <path d="M26.8556 22.5875L11.4002 30.2279C8.05133 21.5466 11.2359 11.6917 18.9479 6.59149L26.8556 22.5875Z" stroke="#099250" stroke-width="5"/>
            </svg>
            <h1 className="brand-name">SE</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
              <path d="M0.175293 0.30957H22.4988V0.98604C22.4988 13.315 12.5042 23.3096 0.175293 23.3096V0.30957Z" fill="#3CCB7F"/>
              <path d="M9.67529 7.80957H26.9161C26.071 17.0759 18.8488 24.4991 9.67529 25.6534V7.80957Z" stroke="black" stroke-width="5"/>
            </svg>
          </div>
          <h1 className="submity">SUBMITY</h1>
        </div>
        <div className="login-info">
          <h2>LOG IN</h2>
          <p>Login in to your account to access all the features and resources</p>
        </div>
      </div>
      <form action="">
        <div className="form-labels">
          <label>Email/ Staff ID</label>
          <input type="text" placeholder="Username or Email" required />
        </div>
        <div className="form-labels">
          <label>Password</label>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="form-btn">
          <button>login</button>
        </div>
      </form>
    </div>
  </div>
);

export default ColRight;
