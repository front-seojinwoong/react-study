"use client";

const Layout = (props) => {
  return (
    <div className='onLayout subPage'>
      <div className='onContainer'>{props.children}</div>
    </div>
  );
};

export default Layout;
