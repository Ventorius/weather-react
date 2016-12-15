var React = require('react');

var About = (props) =>{
  return (
      <div>
        <h1 className='text-center page-title'>About</h1>
        <p>Simple weather app built with Foundation and React</p>
        <p>Used tools:</p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a>
          </li>
          <li>
            <a href='http://foundation.zurb.com/'>Foundation</a>
          </li>
          <li>
            <a href='http://openweathermap.org'>Open Weather Maps</a>
          </li>
        </ul>
      </div>
  )
};

module.exports = About;
