import React, { Component } from 'react';
import './App.css';

class WeatherApp extends component {
    constructor(props) {
        super(props);
        this.state = {temp: 0, desc: '', icon: '', loading: true}
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?\
            q=London&units=Metric\
            &apiKEY=18f323e4e2ec7cc1acd6bd932f548bd0')
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    temp: responseData.main.temp,
                    desc: responseData.weather[0].description,
                    icon: responseData.weather[0].icon,
                    loading: false
                })
            })
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div className="App">

            </div>
        );
    }
}
export default WeatherApp;