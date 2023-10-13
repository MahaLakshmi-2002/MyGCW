// // HomePage.js
import "./HomePage.css";
import React, { useState } from "react";
import Box from "./components/Box/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules

import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";
import JointheTribe from "./components/JoinTheTribe/JointheTribe";

const imageSlides = [
  {
    imageUrl: process.env.PUBLIC_URL + "/recentposts.png",
    content: "Once upon a time, in a quaint little village nestled between rolling hills, lived a curious young girl named Luna.",
  },
  {
    imageUrl: process.env.PUBLIC_URL + "/sponsored.png",
    content: " Luna was known throughout the village for her insatiable curiosity and her love for gazing at the night sky.",
  },
  {
    imageUrl: process.env.PUBLIC_URL + "/hotroles.png",
    content: " She had always dreamt of exploring the mysteries of the moon,One clear night, as Luna gazed at the moon ",
  },
  {
    imageUrl: process.env.PUBLIC_URL + "/cleantechupdates.png",
    content: " Luna's heart raced with excitement as she realized that this might be her chance to embark on the adventure.",
  },
];


const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Button */}
      <Button
        onClick={() => window.open("/video-webpage", "_blank")}
        variant="contained"
        sx={{
          backgroundColor: "#00E700",
          "&:hover": {
            backgroundColor: "#00E700",
          },
        }}
      >
        Video Webpage
      </Button>

      {/*<Button variant="contained" color="success"sx={{ margin: '0.5rem' }}>
          Video Webpage
  </Button>*/}
      <h2>Climate Crisis - Fact Check</h2>
      <div className="box-section">
        {/* Climate Crisis - Fact Check Box */}
        <div className="climate-box">
          <p>
            Mother Earth is in pain with fast-rising global temperature. It’s a
            climate crisis. Finding alternatives to the use of fossil fuels is
            the focus for reducing carbon emissions. Making Earth carbon-neutral
            and net-zero is a larger-than-life purpose, now. Life is calling all
            individuals too to join the fight against carbon emissions, for
            which major countries and many large Organizations are making large
            strides, already. As a tribe of Global Carbon Warriors, all
            professionals and investors support the cleantech startups with
            their talent, time or treasure, to help them achieve early
            breakthroughs. Here are some climate-crisis facts to make one more
            familiar, before taking the plunge.
          </p>
        </div>
        {/* Sponsor Box */}
        {/* <div className="sponsor-content">
          <h2>Sponsored</h2>
          <div className="box-image">
            <img
              src={process.env.PUBLIC_URL + "/sponsored.png"}
              alt="Sponsor Image"
            />
          </div>
          <div className="box-content">
            <p>Paragraph 1: Content for the Sponsor box goes here.</p>
          </div>
        </div>
      </div> */}
      
      
      <div className="sponsor-content">
        <h2>Sponsored</h2>
        
        <Swiper
        
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 ,disableOnInteraction:false }} // 10 seconds delay
          modules={[ Autoplay]}
          className="mySwiper"
            
         
        >
          {imageSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="box-image">
                <img src={slide.imageUrl} alt={`Image ${index + 1}`} />
              </div>
              
              <div className="box-content">
                <p>Title Comes Here</p>
                <p>{slide.content}</p> 
                                     
                <button className="sponser-button">Click to Sponser</button>   
                <button className="view-button-1">View</button>  
                        
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
        

      </div>
      
      
      </div>
      

      {/* Rest of the boxes */}
      <Box
        title="CATASTRPOHE IMMINENT"
        image={process.env.PUBLIC_URL + "/homepage1.png"}
        shortContent="Global temperature has risen close to the tipping point of 1.5ºC. The climate change effects are catastrophic beyond 1.5ºC..."
        expandedContent={
          <div>
            <p>
              Global temperature has risen close to the tipping point of 1.5ºC
            </p>
            <p>The climate change effects are catastrophic beyond 1.5ºC</p>
            <p>
              We are already witnessing wild fires, flash floods, severe
              droughts etc. We often think that climate change is somewhere on
              the other side of the planet. The truth is that you too can be hit
              by it anytime.
            </p>
            <p>
              WORLD needs an urgent action to offset emissions and prevent
              further global warming.
            </p>
          </div>
        }
        index={1} // Box 1 is odd, so index is 1
      />
      <Box
        title="MOTHER EARTH IS IN PAIN"
        image={process.env.PUBLIC_URL + "/homepage2.png"}
        shortContent="Moving Away from Fossil Fuels is the only Way forward.

        We still use Fossil fuels for around 80% of the energy needs, world over..."
        expandedContent={
          <div>
            <p>Moving Away from Fossil Fuels is the only Way forward.</p>
            <p>
              We still use Fossil fuels for around 80% of the energy needs,
              world over.
            </p>
            <p>Focusing on offsetting carbon emissions is the Key.</p>
            <p>
              Innovative alternative materials to Fossil fuels is what we need,
              to make the world Carbon-Neutral; The Real pain-relievers.
            </p>
          </div>
        }
        index={2} // Box 2 is even, so index is 2
      />
      <Box
        title="HIGH IMPACT SOLUTIONS – THE PAIN RELIEVERS"
        image={process.env.PUBLIC_URL + "/homepage3.png"}
        shortContent="Alternative green materials and sources of energy is what the world needs.

        Clean Technologies that reduce use of fossil fuels can..."
        expandedContent={
          <div>
            <p>
              Alternative green materials and sources of energy is what the
              world needs.
            </p>
            <p>
              Clean Technologies that reduce use of fossil fuels can make high
              impact.
            </p>
            <p>
              Many Cleantechs are working hard on clean technology innovations
              to achieve break-throughs.
            </p>
            <p>They can have high impact on reducing carbon emissions.</p>
            <p>
              United Nations and major countries have pledged to make the world
              carbon-neutral by 2050. It is a humongous task before us.
            </p>
            <p>
              To make the world Carbon-neutral, leaving the task to only
              Governments and Large organizations is not enough.
            </p>
          </div>
        }
        index={3} // Box 3 is odd, so index is 3
      />
      <Box
        title="JOIN THE DREAM OF A GREEN EARTH"
        image={process.env.PUBLIC_URL + "/homepage4.jpg"}
        shortContent="Cleantech is the next big wave, estimated to be a multi trillion dollar market.

        Many Cleantech Startups already are unicorns..."
        expandedContent={
          <div>
            <p>
              Cleantech is the next big wave, estimated to be a multi trillion
              dollar market.
            </p>
            <p>Many Cleantech Startups already are unicorns.</p>
            <p>Catching them at early stage, is the key.</p>
            <p>
              You can help them by contributing your time, talent or treasure TO
              MAKE A BIG DIFFERENCE.
            </p>
          </div>
        }
        index={4} // Box 4 is even, so index is 4
      />
      <Box
        title="CLEANTECH STARTUPS NEED YOU THE MOST"
        image={process.env.PUBLIC_URL + "/homepage5.png"}
        shortContent="Most of them are at early stages of growth.

        They need mentors, coaches, consultants and angel investors to support..."
        expandedContent={
          <div>
            <p>Most of them are at early stages of growth.</p>
            <p>
              They need mentors, coaches, consultants and angel investors to
              support them through early stages of growth.
            </p>
          </div>
        }
        index={5} // Box 5 is odd, so index is 5
      />
      <Box
        title="YOUR TALENT & TIME IS THE PANACEA"
        image={process.env.PUBLIC_URL + "/homepage6.png"}
        shortContent="Startups are usually bootstrapped.

        They prefer need-based consulting. Contributing your talent and ..."
        expandedContent={
          <div>
            <p>Startups are usually bootstrapped.</p>
            <p>They prefer need-based consulting.</p>
            <p>
              Contributing your talent & time remotely on part-time or full-time
              – matters most.
            </p>
          </div>
        }
        index={6} // Box 6 is even, so index is 6
      />
      <Box
        title="GIVE A DROP TO MAKE THE OCEAN"
        image={process.env.PUBLIC_URL + "/homepage7.png"}
        shortContent="You too are the damager of climate like everyone else. Calculate your carbon footprint; you will realize.

        You can offset the cost of ..."
        expandedContent={
          <div>
            <p>
              You too are the damager of climate like everyone else. Calculate
              your carbon footprint; you will realize.
            </p>
            <p>
              You can offset the cost of your own carbon footprint by investing
              the equivalent amount in startups.
            </p>
            <p>
              Donating your hard-earned money is like putting it into a
              blackhole; More often than not, we don’t know whether your money
              is working well for the intended cause.
            </p>
            <p>
              Makes sense to invest it directly in a startup. No worries; though
              you have no time for due diligence. You can piggy-ride on angel
              investors who syndicate retail investors too. They do the due
              diligence and also keep a tab on the investment till the exit.
            </p>
          </div>
        }
        index={7} // Box 7 is odd, so index is 7
      />
      <Box
        title="BE AN ANGEL"
        image={process.env.PUBLIC_URL + "/homepage8.png"}
        shortContent="You can be an angel investor for deals on GCW.

        You can be a lead syndicate investor for deals on GCW.
        
        You can co-invest with..."
        expandedContent={
          <div>
            <p>You can be an angel investor for deals on GCW.</p>
            <p>You can be a lead syndicate investor for deals on GCW.</p>
            <p>You can co-invest with other lead investors in a deal on GCW.</p>
            <p>You can fundraise on GCW for your curated cleantechs.</p>
            <p>
              Or invite the LPs of GCW to join your syndicate for offline deals.
            </p>
          </div>
        }
        index={8} // Box 8 is even, so index is 8
      />
      {/* Add the Join the Tribe button */}
      <JointheTribe/>
      <div className="latest-updates-box">
        <h2>Latest Updates</h2>
        <div className="latest-updates-container">
          {/* Box 1 */}
          <div className="latest-box">
            <div className="latest-box-image">
              <img
                src={process.env.PUBLIC_URL + "/upcomingevents.png"}
                alt="Image 1"
              />
            </div>
            <div className="box-content">
              <h3>Up Coming Events</h3>
              <p>Content for Box 1 goes here.</p>
              <button className="post-event">Post Your Events</button>  
              <button className="view-button">View</button>  
            </div>
          </div>

          {/* Box 2 */}
          <div className="latest-box">
            <div className="latest-box-image">
              <img
                src={process.env.PUBLIC_URL + "/hotroles.png"}
                alt="Image 2"
              />
            </div>
            <div className="box-content">
              <h3>Hot Roles</h3>
              <p>Content for Box 2 goes here.</p>
              <button className="post-hotroles">Post Hot Roles</button>  
              <button className="view-button">View</button>  
            </div>
          </div>

          {/* Box 3 */}
          <div className="latest-box">
            <div className="latest-box-image">
              <img
                src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                alt="Image 3"
              />
            </div>
            <div className="box-content">
              <h3>CleanTech Updates</h3>
              <p>Content for Box 3 goes here.</p>
              <button className="post-cleantech-update">Post Cleantech Updates</button>  
              <button className="view-button">View</button> 
            </div>
          </div>

          {/* Box 4 */}
          <div className="latest-box">
            <div className="latest-box-image">
              <img
                src={process.env.PUBLIC_URL + "/investorupdates.png"}
                alt="Image 4"
              />
            </div>
            <div className="box-content">
              <h3>Investor Updates</h3>
              <p>Content for Box 4 goes here.</p>
              <button className="post-investor-update">Post Investor Updates</button>  
              <button className="view-button">View</button> 
            </div>
          </div>

          {/* Box 5 */}
          <div className="latest-box">
            <div className="latest-box-image">
              <img
                src={process.env.PUBLIC_URL + "/recentposts.png"}
                alt="Image 5"
              />
            </div>
            <div className="box-content">
              <h3>Recent Posts / News</h3>
              <p>Content for Box 5 goes here.</p>
              <button className="view-button">View</button> 
            </div>
          </div>

          {/* Box 6 */}
          <div className="latest-box">
            <div className="latest-box-image">
              <img src={process.env.PUBLIC_URL + "/image6.png"} alt="Image 6" />
            </div>
            <div className="box-content">
              <h3>Gallery</h3>
              <p>Content for Box 6 goes here.</p>
              <button className="view-button">View</button> 
            </div>
          </div>
        </div>
      </div>

      {/*<div className="profile-view-container">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h2>Profile Name</h2>
          <p>Profile details and information go here.</p>
        </div>
      </div>*/}

      {/*Profile Scrolling Section*/}

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
          <h1>You will realize,You too are the damager.</h1>
          <h3>Calculate Your Carbon Footprint</h3>
          <Button
            variant="contained"
            sx={{
              backgroundColor: " #fafa33",
              color: "black",
              "&:hover": {
                backgroundColor: " #fafa33",
              },
            }}
          >
            Click To Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
