import React from 'react';
import Classes from './WeatherCard.module.css';
import Grid from '@material-ui/core/Grid';
import { capitalize, kelvinToCelsius, findTime } from '../../Helpers/helpers';
import { FaSun } from 'react-icons/fa';
import ReturnIcon from '../../Helpers/GetIcons';

const WeatherCard = (props) => {
  return (
    <div className={Classes.WeatherCard}>
      <div className={Classes.Title}>
        <h1>
          {capitalize(props.data.region)} ,{props.data.country}
        </h1>
        <h3>Thurday 20 August</h3>
      </div>
      <div className={Classes.Wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <ReturnIcon weather={props.data.main} />
            <div className={Classes.TextWrapper}>
              <h1>{kelvinToCelsius(props.data.temp)} &deg;</h1>
              <p>{capitalize(props.data.description)}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={Classes.ExtraDetails}>
              <div className={Classes.Upper}>
                <div className={Classes.TextWrapper}>
                  <h3>{kelvinToCelsius(props.data.temp_max)} &deg;</h3>
                  <p>High</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>{props.data.speed} mph</h3>
                  <p>Wind</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>{findTime(props.data.sunrise)}</h3>
                  <p>Sunrise</p>
                </div>
              </div>
              <div className={Classes.Upper}>
                <div className={Classes.TextWrapper}>
                  <h3>{kelvinToCelsius(props.data.temp_min)} &deg;</h3>
                  <p>Low</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>{props.data.humidity} %</h3>
                  <p>Rain</p>
                </div>
                <div className={Classes.TextWrapper}>
                  <h3>{findTime(props.data.sunset)}</h3>
                  <p>Sunset</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WeatherCard;
