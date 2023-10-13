import React from 'react';
import Box from '../Box/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

const NetZeroCarbonNeautral = () => {
  return (
    <div>
      <h1>Net Zero & Carbon Neutral</h1>
      <Box
        index={1}
        title="What’s Carbon-Neutral & Net-Zero"
        image={process.env.PUBLIC_URL + '/netzero1.jpg'}
        shortContent="This is for those who are not familiar of the difference between ....."
        expandedContent={
          <div>
                          <p>
              This is for those who are not familiar of the difference between Carbon neutrality and Net zero.


              </p>
              <p>
              Though both are for combating climate change, carbon neutrality is focused more on balancing the current carbon emissions with negative or zero or low carbon emissions. For this, United nations and the major counties have pledged to achieve a carbon neutral world by 2050. 

              </p>
              <p>
              Net zero is about focusing on reducing all greenhouse gas emissions including carbon emissions across all the supply chains and sectors. For this, United nations and major organizations have pledged to reach Net zero by 2050.

              </p>
              <p>
              Based on their feasibility, some countries have decided different years other than 2050 to achieve the Carbon-neutrality or Net-zero. 

              </p>
              <p>
              Small countries like Bhutan, Madagascar, Panama, Suriname are already carbon-neutral
              </p>

          </div>
        }
      />
      <Box
        index={2}
        title="The Real Impactful Climate action "
        image={process.env.PUBLIC_URL + '/image2.jpg'}
        shortContent="To make the world Carbon-Neutral and Net-Zero by 2050, is a larger-than-life purpose that people are finding worthwhile to adopt now. We certainly owe to pass...."
        expandedContent={
          <div>
                      <p>
              To make the world Carbon-Neutral and Net-Zero by 2050, is a larger-than-life purpose that people are finding worthwhile to adopt now. We certainly owe to pass on a healthy planet to the next generation
              </p>
              <p>
              To reach the goal, organizations world over are encouraged to offset their carbon footprint by buying carbon credits. Buying carbon credits is like capitalizing the offsets which were already achieved. Hence just these efforts are not enough to make significant strides towards the goal. Need to invest in the green programs or projects which has potential to reduce the present carbon emissions, year after year.

              </p>
              <p>
              All climate actions like saving a tissue paper or switching off the power for an hour etc. are all important to use them consciously but really are not impactful climate actions

              </p>
              <p>To learn more about the terms, click below the link of World Economic Forum. <a href="https://www.weforum.org">Carbon neutral and net zero – what do these words mean? | World Economic Forum</a></p>
          </div>
        }
      />
      <Box
        index={3}
        title="McKinsey Report"
        image={process.env.PUBLIC_URL + '/netzero3.png'}
        shortContent=" The McKinsey report estimated that the annual cost of achieving net zero will be $9.2 trillion....."
        expandedContent={
          <div>
                          <p>
              The McKinsey report estimated that the annual cost of achieving net zero will be $9.2 trillion.

              </p>
              <p>
              The world is already spending $5.7 trillion a year to lower the impact of fossil fuels and use alternatives. 

              </p>
              <p>
              However, an extra $3.5 trillion, every year from 2021 to 2050, will need to be put towards alternative energy sources and land use including agriculture to limit global warming to 1.5 degrees, the report said. This amounts to spending over 3.5% of the world GDP, more than the usual spend. 

              </p>
              <p>Click below to read the report for more details. 
                <a href="https://www.mckinsey.com/business-functions/sustainability/our-insights/the-net-zero-transition-its-cost-and-benefits">The net-zero transition: Its cost and benefits | Sustainability | McKinsey & Company</a></p>
              <p>Click here for another interesting read: 
                <a href="https://www.theworldcounts.com/challenges/climate-change/cost-of-climate-change">Cost of Climate Change (theworldcounts.com)</a></p>

          </div>
        }
      />
      <Box
        index={4}
        title="Global Market Potential of Cleantech business"
        image={process.env.PUBLIC_URL + '/netzero4.png'}
        shortContent="In IEA’s net-zero scenario, the size of the global market for clean tech will surpass the...."
        expandedContent={
          <div>
                          <p>
              In IEA’s net-zero scenario, the size of the global market for clean tech will surpass the value of the oil market by 2030, rising from $122 billion to $870 billion.

              </p>
              <p>
              The following data collected from various reports in public domain should give a broad glimpse.
              <ul>
                <li>Of an estimated market of around $2 trillion by 2030, for Power Generation, green share market size is estimated to be around $500 billion @ 27% market share.</li>
                <li>Of an estimated market of around $0.8 trillion by 2030, for Aviation fuels, green share market size is estimated to be around $400 billion @ 50% market share.</li>
                <li>Of an estimated market of around $0.7 trillion by 2030, for Transportation fuels, green share market size is estimated to be around $200 billion @ 30% market share.</li>
              </ul>
              </p>

              <p>
              <strong>Cannot Afford To Miss The Bus</strong>
    
              </p>
                <button>Join the Tribe</button>
          </div>
        }
      />
      <Box
        index={5}
        title="Defence against invasions or emissions?"
        image={process.env.PUBLIC_URL + '/netzero5.png'} 
        shortContent=" The big question is whether the countries will have extra resources to spend ...."
        expandedContent={
          <div>
                          <p>
              The big question is whether the countries will have extra resources to spend additional 3.5% of their GDP, when the global defence spend itself is around 2.25% (approx. 2 trillion dollars) of a total world GDP of $85 trillion dollars. 

              </p>
              <p>
              So, the writing is on the wall that there is a huge gap which may stall us from achieving the carbon neutral world by 2050 or containing the global temperature at 1.5 degree Celsius. 

              </p>
              <p>
              This is why all individuals in the world must take steps to complement the mega initiatives, by offsetting their own carbon footprint in their own preferred ways in supporting programs to reduce the world’s carbon footprint. 
              </p>
              <p>
              <strong>Fight the carbon emissions, together </strong>
    
              </p>
                <button>Join the Tribe</button>
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

export default NetZeroCarbonNeautral;
