import Carousel from 'react-bootstrap/Carousel';
import Project1 from "../../assets/Project1.png";
import Quiz from "../../assets/Quiz.png";
import Weather from "../../assets/Weather.png";
import Workday from "../../assets/Workday.png";
import Vent from "../../assets/Vent.png"; 
import "./Projects.css"
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <Carousel variant="dark">
      
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Project1}
          alt="Project1"
        />
        <Carousel.Caption>
          <h3 className="font-link text">City Explorer</h3>
          <p className="font-link text ">An app that allows users to choose a city and the dates they are planning to visit, returning local events in that date range and a list of breweries nearby. Our motivation for creating the project was our own struggles finding a single place to learn what’s going on in a city we are unfamiliar with.</p>
        
        </Carousel.Caption>
      </Carousel.Item>

    

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Quiz}
          alt="Quiz App"
        />

        <Carousel.Caption>
          <h3 className="font-link text">Quiz App</h3>
          <p className="font-link text">A timed coding quiz with multiple-choice questions to test your coding knowledge. Features dynamically updated HTML and CSS powered by JavaScript code.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Weather}
          alt="Weather App"
        />

        <Carousel.Caption>
          <h3 className="font-link text">Weather App</h3>
          <p className="font-link text">
          A weather dashboard that will run in the browser and features dynamically updated HTML and CSS. Uses the OpenWeather One Call API to retrieve weather data for cities.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Workday}
          alt="Workday App"
        />

        <Carousel.Caption>
          <h3 className="font-link text">Workday App</h3>
          <p className="font-link text">
          Work Day Scheduler is a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Vent}
          alt="Weather App"
        />

        <Carousel.Caption>
          <h3 className="font-link text">Vent App</h3>
          <p className="font-link text">
          Vent allows users to post rants online as a way to destress. The hot air has to go somewhere, why not vent online? Users can register, log in, post, and comment.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Projects;