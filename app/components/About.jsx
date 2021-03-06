var React = require('react');


var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">This is a weather application build on React. I have built this for The complete React web Developer course.</p>
      <p>
       Here are some of ther tools I used:
      </p>
      <ul>
       <li>
        <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
       </li>
       <li>
        <a href="http://openweathermap.org">Open weather Map</a> - I used Open Weather Map to search for weather data by city name.
       </li>
     </ul>
    </div>
  );
};

module.exports = About;
