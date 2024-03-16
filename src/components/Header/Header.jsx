import profile from '../../assets/profile/Frame.png'


const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 mx-4 border-b-2 gap 4'>
        <h1 className='text-4xl font-bold'>Food Panda</h1>
        <div className='flex gap-4 ml-8'>
          <h4>Home</h4>
          <h4>Recipes</h4>
          <h4>About</h4>
          <h4>Search</h4>
        </div>
        <input type="text" className="grow search ml-10" placeholder="Search" />
        <img className='bg-green-600  rounded  width: 32px
height: 32px' src={profile} alt="" />

      </div>
      <div className="hero min-h-screen bg-no-repeat" style={{ backgroundImage: 'url(https://i.postimg.cc/hGjw9jhs/Rectangle-1.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-color-white">
            <h1 className="mb-5 text-5xl font-bold text">Discover an exceptional cooking class tailored for you!e</h1>
            <p className="mb-5 text-xl text">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <button className='button font-bold'>Get Started</button>
            <button className='button font-bold ml-4'>Our Feedback</button>
          </div>
        </div>

      </div>

      <div>
        <h1 className='text1'>Our Recipes</h1>
        <p className='text-xl'>This dish embodies the essence of User's culinary expertise, offering a harmonious blend of freshness, richness, and sophistication.</p>
      </div>
      
    </div>
  );
};

export default Header;