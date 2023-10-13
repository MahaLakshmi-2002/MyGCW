import React, { useState } from 'react';
import './Blog.css';
// import { FiSearch } from 'react-icons/fi';
import { FiSearch, FiArrowUp, FiArrowDown } from 'react-icons/fi'; // Import sorting icons from react-icons
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../Footer';
// import '../Header';
import '../Header.css';
import JointheTribe from '../JoinTheTribe/JointheTribe';
import Header from '../Header';





const blogsPerPage = 9; // Number of blogs to display per page

const Blog = () => {
  // Sample data for blogs
  const sampleBlogs = [
    {
      id: 1,
      title: 'The next big wave - a peek',
      image: '/blog.png',
      content:
        'Green business opportunities and net zero McKinsey Surging demand for zero-carbon technologies, materials, and services gives ...',
      url:'https://www.mckinsey.com/capabilities/sustainability/our-insights/accelerating-toward-net-zero-the-green-business-building-opportunity',
    },
    {
      id: 2,
      title: 'New Age Gold Rush',
      image: '/blog2.png',
      content:
        'India among world\'s top 10 for climate tech investment: Report Venture capital investment into climate tech companies globally has skyrocketed....',
        url:'https://www.business-standard.com/article/economy-policy/india-among-world-s-top-10-for-climate-tech-investment-report-121102601458_1.html',
    },
    {
      id: 3,
      title: 'Cleantech market may surpass oil market by 2030',
      image: '/blog3.png',
      content: 'By 2030, cleantech market could surpass the value of oil market | Business Insider India...',
      url:'https://www.businessinsider.in/tech/enterprise/cleantech-market-could-surpass-the-value-of-oil-market-in-2030/articleshow/92702121.cms#:~:text=The%20International%20Energy%20Agency%2C%20which%20has%20been%20emphasizing,2030%2C%20rising%20from%20%24122%20billion%20to%20%24870%20billion.'
    },
    {
      id: 4,
      title: '35 Ways to reduce future carbon, while you offset your footprint',
      image: '/blog4.png',
      content: 'In the face of the recent National Climate Assessment report on the threats of climate change...',
      url:'https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/'
    },
    {
      id: 5,
      title: 'Surprisingly, this sector causes One-third of the world\'s carbon emissions',
      image: '/blog5.png',
      content: 'Building materials drive carbon emissions, and they\'re set to grow A new study from Leiden researchers...',
      url:'https://phys.org/news/2021-10-materials-carbon-emissions-theyre.html',
    },
    {
      id: 6,
      title: 'Global energy storage market to double by 2030',
      image: '/blog6.png',
      content: 'Energy Storage Systems Market (By Technology: Compressed Air, Pumped Hydro Storage, Lithium Ion, Sodium Sulphur, Lead Acid,...',
      url:'https://www.precedenceresearch.com/energy-storage-systems-market/amp',
    },
    {
      id: 7,
      title: 'Biofuels Market Size to Surpass US$ 201.21 Billion by 2030',
      image: '/blog7.png',
      content: 'Global demand for biofuels is set to grow by 41 billion litres, or 28%, over 2021-2026 in the main case....',
      url:'https://www.iea.org/reports/renewables-2021/biofuels?mode=transport&region=World&publication=2021&flow=Consumption&product=Ethanol',
    },
    {
      id: 8,
      title: 'We burn close to $1 Trillion for transportation fuels',
      image: '/blog8.png',
      content: 'Transportation Fuel Market Research Report - Segmentation By Fuel Type (Gasoline, Diesel, Biofuels) By End-User (Roadways, Airways,...',
      url:'https://www.marketdataforecast.com/market-reports/transportation-fuel-market'
    },
    {
      id: 9,
      title: 'Power Generation market to reach $1.7 Trillion by 2030',
      image: '/blog9.png',
      content: 'Power Generation Market Research Report - Segmentation By Application (Commercial, Industrial and Residential), By Source...',
      url:'https://www.marketdataforecast.com/market-reports/power-generation-market'
    },
    {
        id: 10,
        title: 'Emerging Trends in Renewable Energy',
        image: '/blog10.png',
        content: 'The renewable energy sector is rapidly evolving, with several emerging trends shaping its future...',
        url:'https://www.freshdialogues.com/2010/06/03/vinod-khosla-cleantech-wisdom/'
      },
      // Box 11
      {
        id: 11,
        title: 'The Role of AI in Sustainable Agriculture',
        image: '/blog11.png',
        content: 'Artificial Intelligence (AI) is transforming the agriculture industry, driving sustainable practices...',
        url:'https://howrid.com/health/list-of-oxygen-rich-foods/'
      },
      {
        id: 12,
        title: 'Investing in Clean Energy for a Greener Future',
        image: '/blog12.png',
        content: 'Clean energy investments are gaining momentum as countries commit to achieving carbon neutrality...',
        url:'https://www.weforum.org/agenda/2022/12/these-countries-achieved-net-zero-emissions/'
      },
      // Box 13
      {
        id: 13,
        title: 'The Future of Electric Vehicles',
        image: '/blog13.jpg',
        content: 'Electric vehicles are poised to dominate the automotive industry as technology advances...',
        url:''
      },
        // Box 14
    {
        id: 14,
        title: 'Sustainable Fashion: Redefining the Industry',
        image: '/blog14.jpg',
        content: 'The fashion industry is embracing sustainable practices to reduce its environmental impact...',
      },
      // Box 15
      {
        id: 15,
        title: 'Renewable Energy in Developing Nations',
        image: '/blog15.jpg',
        content: 'Renewable energy adoption in developing nations is crucial for a sustainable global future...',
      },
          // Box 16
    {
        id: 16,
        title: 'Green Building: The Future of Construction',
        image: '/blog16.jpg',
        content: 'Green building practices are reshaping the construction industry for a more sustainable future...',
      },
      // Box 17
      {
        id: 17,
        title: 'The Impact of Climate Change on Biodiversity',
        image: '/blog17.jpg',
        content: 'Climate change is threatening biodiversity, leading to urgent conservation efforts...',
      },
      // Box 18
    {
        id: 18,
        title: 'The Circular Economy: Reducing Waste, Maximizing Resources',
        image: '/blog18.jpg',
        content: 'The circular economy model is transforming industries to minimize waste and optimize resources...',
      },
  ];
  // Calculate the total number of pages
  const totalPages = Math.ceil(sampleBlogs.length / blogsPerPage);
  // State to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the blogs to be displayed on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sampleBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle clicking on the "Next Page" button
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle clicking on the "Previous Page" button
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const [selectedOption, setSelectedOption] = useState('relevance');
  const [ascendingSort, setAscendingSort] = useState(true);

  const sortingOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Date', value: 'date' },
    { label: 'Popularity', value: 'popularity' },
  ];

  const handleSortChange = (option) => {
    setSelectedOption(option);
    // Implement your sorting logic based on the selected option here
  };

  const toggleSortDirection = () => {
    setAscendingSort(!ascendingSort);
    // Implement your sorting logic based on the sort direction here
  };

  // Sample blog data (replace with your actual data)
  const blogData = [
    // ... your blog data here ...
  ];
 

  return (
    <div>
      <Header/>
      {/* Image Container */}
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/blog.png'} alt="Blog Image" />
      </div>

      
      <div className="row">
    <div className="col">
    <h1 style={{marginLeft:'20px' }}><b style={{ color: '#00af00' }}>Blog</b></h1>
    </div>
    <div class="col-md-8" style={{ marginRight:'10px' }}>
      <form className="example" action="action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
      </form>
      <div className="sort-by">
        <span>Sort By: </span>
        <select
          value={selectedOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {sortingOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <button onClick={toggleSortDirection}>
          {ascendingSort ? <FiArrowUp /> : <FiArrowDown />}
        </button>

      </div>
  

    </div>
   
  </div>
  
      
      
<JointheTribe/>
 
      {/* Rest of the blog boxes */}
      <div className="blog-container">
        {currentBlogs.map((blog) => (
          <div className="blog-box" key={blog.id}>
            
            <div className="box-image">
              <img src={process.env.PUBLIC_URL + blog.image} alt={`Image ${blog.id}`} />
              <a href="your-bell-link-here" className="bell-link">
              <FontAwesomeIcon icon={faBell} /></a>  
            </div>
            <div className="box-content">
              
              <h2 className="box-title">{blog.title}</h2>
              <p>{blog.content}</p>
              {/* heart icon */}
              <a href="#" className="heart-link">
              <FontAwesomeIcon icon={faHeart} /></a>
              
              {/* share icon */}
              <a href={blog.url} target='_blank' className="share-link">
              <FontAwesomeIcon icon={faShare} /></a>
                
              <a href={blog.url}  target='_blank' className="read-more-link">
              Read More
              <FontAwesomeIcon icon={faArrowRight} />
              </a>

              
              
              
            </div>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="page-buttons-container">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        
        <button onClick={handleNextPage} disabled={indexOfLastBlog >= sampleBlogs.length}>
          Next Page
        </button>

        <span className='page-no'>
        Page <span className='bordered-text'>{currentPage}</span> of <span className='bordered-text'>{totalPages}</span>
        </span>



      </div>
    
    <div className="carbon-calculator-container">
      <div className="carbon-image">
        <img src={process.env.PUBLIC_URL + '/carbon-calculator.png'} alt="Carbon Calculator" />
      </div>
      <div className="carbon-content">
        <p>
        <h2 class="white-text">You Will Realize, You Too Are The Damager.</h2>
        </p>
        <p>
          <b><h1 class="green-text">Calculate Your Carbon Footprint</h1></b>
        </p>
        <button class="yellow-background">Click To Start</button>

      </div>
    </div>
    </div>
  );
};

export default Blog;
