import React from 'react';
import Box from '../Box/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";
const StartUpTrends = () => {
  return (
    <div>
      <h1>Startup Trends</h1>
      <Box
        index={1}
        title="Cleantech 2.0 trends"
        image={process.env.PUBLIC_URL + '/cleantech2.jpg'}
        shortContent="Short content for Startup Trend 1."
        expandedContent={
          <div>
                      <p>
              ESG, Sustainability, Cleantech and Climate tech are the new buzz words in the startup world. There is a clear upsurge in this space, which is a good sign for fighting the climate change. 

              </p>
              <p>
              As per what is available in the public domain, people talk about cleantech 1.0 and cleantech 2.0. Apparently, cleantech 1.0 was a slow phase and hence not so successful, though companies like battery manufacturer QuantumScape and carbon-recycling firm LanzaTech have emerged as unicorns. 

              </p>
              <p>
              It seems cleantech 2.0 is more vibrant and up with more options. It seems the VCs who could make it made a return of 8.6 times
              </p>
              <p>
              Learning from the past, VCs seem bullish now again in cleantech and climate tech startups, expecting it to be the next big wave.

              </p>
              <p>
              Some of unicorns inspiring the world of cleantech 2.0 are Northvolt (makes Batteries from Recycled batteries), Prometheusfuels (Converts CO2 to Gasoline & Jet Fuels), Nexil (Green building technology & Manufacturing processes), Fulcrum bioenergy (Converts garbage into net-zero Jet Fuel), Monolith corp (Makes clean Hydrogen using methane pyrolysis) etc. 

              </p>
          </div>
        }
      />
      <Box
        index={2}
        title="Investments At Glance"
        image={process.env.PUBLIC_URL + '/startuptrend2.jpg'}
        shortContent="   In 2021, climate tech companies globally raised more than enterprise software at $103.7bn, and in the footsteps of healthtech and fintech - companies which raised $119bn...."
        expandedContent={
          <div>
                          <p>
    In 2021, climate tech companies globally raised more than enterprise software at $103.7bn, and in the footsteps of healthtech and fintech - companies which raised $119bn and $129.4bn respectively. Source: <a href="https://technation.io">technation.io</a>.
  </p>
  <p>
  Blackrock CEO Larry Fink said he thinks the next 1,000 unicorns, or start-ups worth at least $1 billion, will be based on climate technology.

  </p>
  <p>
  European VC investment into climate tech start-ups is seven times higher this year than in 2016, up from $1.1 billion to $8 billion, the report said.

  </p>
  <p>
  The second quarter of 2021 saw 77% growth in the number of Series B+ deals compared to the same quarter in 2020, an all-time high. 

  </p>
  <p>
  Asia recorded a 2x increase in total late-stage investments (Series B+) in 2020, from $1.17 billion in 2019 to $2.47 billion, in 2020. Source: <a href="https://www.startupgenome.com">startupgenome</a>.
  </p>
  <p>
  Global clean energy investment needs to be hitting a sum of $4 trillion annually by 2030 for the world to reach net zero by 2050, according to a 2021 International Energy agency (IEA) report.

  </p>
          </div>
        }
      />
      <Box
        index={3}
        title="Cleantech startups – Fast Growing"
        image={process.env.PUBLIC_URL + '/netzero3.png'}
        shortContent="  Globally, the number of emerging technology companies tackling the climate crisis has increased...."
        expandedContent={
          <div>
                   <p>
              Globally, the number of emerging technology companies tackling the climate crisis has increased 4x, by over 35,000 firms since 2010 to reach 44,595 in 2022.

              </p>
              <p>
              The UK is second only to the United States for the number of climate tech startups and scaleups - with over 5,200 climate tech pioneers now operating, compared to the 14,300 in USA.

              </p>
              <p>
              Globally there are 160 climate tech unicorns, companies valued at over $1bn.

              </p>
              <p>
              The US is home to the majority of high value climate tech firms, with 91 unicorns, including the likes of Rivian Automotive, Impossible Foods, and Tesla Motors - valued currently at $694.1bn.

              </p>
              <p>
              Other Asian and African countries are fast growing 

              </p>
              <p>
              That leads to a question, how big is the cleantech market potential?

              </p>
          </div>
        }
      />
      <Box
        index={4}
        title="Global Market Potential of Cleantech Busines"
        image={process.env.PUBLIC_URL + '/netzero4.png'}
        shortContent="   In IEA’s net-zero scenario, the size of the global market for clean tech will surpass the value of the oil market by...."
        expandedContent={
          <div>
                       <p>
              In IEA’s net-zero scenario, the size of the global market for clean tech will surpass the value of the oil market by 2030, rising from $122 billion to $870 billion.

              </p>
              <p>
              The following data collected from various reports in public domain should give a broad glimpse:
              <ul>
                <li>Of an estimated market of around $2 trillion by 2030, for Power Generation, green share market size is estimated to be around $500 billion @ 27% market share.</li>
                <li>Of an estimated market of around $0.8 trillion by 2030, for Aviation fuels, green share market size is estimated to be around $400 billion @ 50% market share.</li>
                <li>Of an estimated market of around $0.7 trillion by 2030, for Transportation fuels, green share market size is estimated to be around $200 billion @ 30% market share.</li>

              </ul>
              <p>
    <strong>Cannot Afford To Miss The Bus</strong>
    
  </p>
  <button>Join the Tribe</button>

              </p>
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

export default StartUpTrends;
