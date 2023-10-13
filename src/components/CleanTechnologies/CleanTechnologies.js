import React from 'react';
import Box from '../Box/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

const CleanTech = () => {
  return (
    <div>
      <h1>Clean Technologies</h1>
      <Box
        index={1}
        title="Clean technologies – An Overview"
        image={process.env.PUBLIC_URL + '/cleantech1.png'}
        shortContent=" ESG, Sustainability, Cleantech and Climate tech are the new buzz words in the startup world. There is a clear upsurge in this space, which is a good sign for...."
        expandedContent={
          <div>
               <p>
               Cleantech or Climate tech, as they are referred to in short, are expected to be the next big wave after what the internet wave of business the world has witnessed.
              </p>
              <p>These technologies essentially revolve around the aim of helping the world move away from fossil fuels to enter Sustainable Energy Era.
</p>
<p>

Technologies are growing from the laboratory stage and are making significant strides towards becoming commercially viable. 


</p>

          </div>
        }
      />
      <Box
        index={2}
        title="Clean Technologies - Categories
        "
        
        shortContent="Short content for Clean Tech 2."
        expandedContent={
          <div>
                  <div className="column">
                  <p>To make it easy, these technologies can be categorized as follows based on the category of carbon emissions they are reducing or offsetting</p>
                  <ul className="bullet-list">
                    <li className="bullet-item">Transportation</li>
                    <li className="bullet-item">Power generation</li>
                    <li className="bullet-item">Building and construction</li>
                    <li className="bullet-item">Agriculture / Food</li>
                    <li className="bullet-item">Energy storage</li>
                    <li className="bullet-item">Circularity (mainly waste conversion and recycling)</li>
                  </ul>
                </div>
                <div className="column">
                  <ul className="bullet-list">
                    <li className="bullet-item">Carbon Capture and Storage</li>
                    <li className="bullet-item">Renewable Energy</li>
                    <li className="bullet-item">Water Management</li>
                    <li className="bullet-item">(Digital) Tools, Devices and Green Materials</li>
                    <li className="bullet-item">Financial Services and Carbon Credits</li>
                    <li className="bullet-item">Lifestyle Products/Services</li>
                  </ul>
                </div>
          </div>
        }
      />
      <Box
        index={3}
        title="Key Clean Technologies of Focus"
        
        shortContent=""
        expandedContent={
          <div>
            <div className="column">
                    <ul className="bullet-list">
                      <li className="bullet-item">ZERO CARBON CEMENT and OTHER BUILDING MATERIALS</li>
                      <li className="bullet-item">ENERGY STORAGE</li>
                      <li className="bullet-item">CARBON CAPTURE and USAGE</li>
                      <li className="bullet-item">GREEN HYDROGEN</li>
                      <li className="bullet-item">CELLULOIC BIO-FUELS</li>
                      <li className="bullet-item">WIND ENERGY</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="bullet-list">
                      <li className="bullet-item">SOLAR POWER</li>
                      <li className="bullet-item">FLOATING SOLAR PARKS</li>
                      <li className="bullet-item">SOLAR POWER CONCENTRATOR</li>
                      <li className="bullet-item">FUSION TECHNOLOGY</li>
                      <li className="bullet-item">HYPERLOOP</li>
                      <li className="bullet-item">GEO THERMAL POWER</li>
                    </ul>
                  </div>
          </div>
        }
      />
      <Box
        index={4}
        title="The Magic is in The Air"
        image={process.env.PUBLIC_URL + '/cleantech4.jpg'}
        shortContent=" On one side, some technologies which are about generating power or water from...."
        expandedContent={
          <div>
             <p>
                    On one side, some technologies which are about generating power or water from the air or even the waste all sound like magic.
                  </p>
                  <p>
                    On the other side, there are technologies like biofuels and green hydrogen that have made significant progress towards becoming commercially viable. Of course, technologies like nuclear fusion power or hyperloop transportation are still at the nascent stage.
                  </p>
                  <p>
                    To conserve land, there are also technologies like floating solar parks or wind farms, solar power concentrators, etc. at work.
                  </p>
                  <p>
                    There is also significant progress being made in developing low carbon or zero-carbon materials that can replace conventional non-green materials, especially in building and construction activities.
                  </p>
                  <p>
                    While such mainstream technologies are at work, there are a lot of digital technologies at play to support the cleantech or climate tech movement.
                  </p>
                  <p>
                    Cannot afford to miss the bus.
                  </p>
                  <div className="button-container">
                    <a href="https://example.com/join-tribe" target="_blank" rel="noopener noreferrer" className="join-button">Join the Tribe</a>
                  </div>
          </div>
        }
      />
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
          <img
            src={process.env.PUBLIC_URL + "/carbon-calculator.png"}
            alt="Carbon Calculator"
          />
        </div>
        <div className="carbon-content">
          <h2>Carbon Footprint Calculator</h2>
          <p>You will realize,You too are the damager.</p>
          <p>Calculate Your Carbon Footprint.</p>
          <button> Click To Start</button>
        </div>
      </div>
      </div>
  );
};

export default CleanTech;
