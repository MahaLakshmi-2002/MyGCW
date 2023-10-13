import React from 'react';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules

import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="image-wrapper" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/aboutus.jpg)` }}></div>
      

      <div className="about-box1">
        <div className="image-box">
          <img src={process.env.PUBLIC_URL + '/aboutusbox1.png'} alt="Box 1" />
        </div>
        <div className="content">
          
          <p>
          Global Carbon Warriors is a global network of experienced professionals and investors. Its motto is to support and guide cleantech / climate tech startups in the fight against carbon emissions, to make the world carbon-neutral.
          </p>
        </div>
      </div>

      <div className="about-box2">
        <div className="content">
          <h2>Charter</h2>
          <ul>
          <li>
          Build the tribe of Global carbon warriors and work together to make the world carbon-neutral and net zero by 2050
          </li><br/>
          <li>
          Work in line with organizations like United Nations, UNEP, UNDP, IPCC, WMO, GEF, GCF etc. and others who are frontrunners for the cause.

          </li><br/>
          <li>
          The tribe or its members shall measure its or their contributions in terms of number of carbon tons reduced or offset through efforts or investment.
          </li><br/>
          <li>
          The role of each member of the tribe is to sensitize able friends, colleagues, relatives, and acquaintances about the catastrophic impact of the carbon emissions; enable them to join the tribe and make an impact through cleantech / climate tech companies.
          </li><br/>
          <li>
          Enable collaboration and connects among tribe members across the globe to seamlessly co-work towards the cause.
          </li><br/>
          <li>
          Charter is not just for achieving the carbon-neutrality and net-zero but sustain it forever.
          </li><br/>
          </ul>
          
        </div>
        <div className="image-boxes">
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + '/charter1.png'} alt="Box 2 Image 1" />
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + '/charter2.png'} alt="Box 2 Image 2" />
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + '/charter3.png'} alt="Box 2 Image 3" />
          </div>
          <div className="image-box">
            <img src={process.env.PUBLIC_URL + '/charter4.png'} alt="Box 2 Image 4" />
          </div>
        </div>
      </div>
      <div className="profile-view-container swiper">
        <div className="profile-content">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/recentposts.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/investorupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/hotroles.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/recentposts.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/hotroles.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/recentposts.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      
    <div className="carbon-calculator-container">
        <div className="carbon-image">
          <img src={process.env.PUBLIC_URL + '/carbon-calculator.png'} alt="Carbon Calculator" />
        </div>
        <div className="carbon-content">
          <h2>Carbon Footprint Calculator</h2>
          <h1>You will realize,You too are the damager.</h1>
          <h3>Calculate Your Carbon Footprint</h3>
          <Button variant="contained"sx={{
        backgroundColor: ' #fafa33',color: 'black',
        '&:hover': {
          backgroundColor: ' #fafa33', 
        },
      }}>Click To Start</Button>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
