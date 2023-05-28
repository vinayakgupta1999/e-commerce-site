import { Carousel } from 'antd';
import cimg from '../assets/images/cimg.png'
import cimg1 from '../assets/images/cimg1.png'
import cimg2 from '../assets/images/cimg2.png'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
const contentStyle = {
  margin: 0,
  height: '399px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};
const CrousalView = () => {
  const crousal = React.useRef()
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className='d-flex flex-column position-relative w-100'>
      <div className='d-flex justify-content-center align-items-center bg-white rounded-circle position-absolute' style={{ width: '40px', height: '40px', zIndex: 11111, top: '50%', left: '24px' }} onClick={() => { crousal.current.prev() }} ><LeftOutlined /></div>
      <Carousel ref={crousal} afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img alt='' src={cimg} style={{ width: '100%' }} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}><img alt='' src={cimg1} style={{ width: '100%' }} /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img alt='' src={cimg2} style={{ width: '100%' }} /></h3>
        </div>
      </Carousel>
      <div className='d-flex justify-content-center align-items-center bg-white rounded-circle position-absolute' style={{ width: '40px', height: '40px', zIndex: 11111, top: '50%', right: '24px' }} onClick={() => { crousal.current.next() }} ><RightOutlined /></div>

    </div>
  );
};
export default CrousalView;
