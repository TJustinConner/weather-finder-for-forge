import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const DailyWeather = ({forecastWeather}) => {

    function timeConverter(UNIX_timestamp){
        var CurrentDate = new Date(UNIX_timestamp * 1000);
        var months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
        var year = CurrentDate.getFullYear();
        var month = months[CurrentDate.getMonth()];
        var date = CurrentDate.getDate();
        var trueTime = month + "/"+ date + "/" + year;
        return trueTime;
    };

    return (
    <div>
    <h3 style={{marginTop:100}}>Current Daily Weather Report</h3>
        <TableContainer>
        <Table aria-label="simple table" style={{width:1000}} align="center">
            <TableHead>
            <TableRow>
                <TableCell align="center"><b>When</b></TableCell>
                <TableCell align="center"><b>Temperature</b></TableCell>
                <TableCell align="center"><b>Real Feel</b></TableCell>
                <TableCell align="center"><b>Humidity Percent</b></TableCell>
                <TableCell align="center"><b>Wind Speed</b></TableCell>
                <TableCell align="center"><b>Description</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {forecastWeather["daily"].map((hourly) =>
                    <TableRow>
                    <TableCell align="center">{timeConverter(hourly.dt)}</TableCell>
                    <TableCell align="center">{Math.round(hourly["temp"].day)}°F</TableCell>
                    <TableCell align="center">{Math.round(hourly["feels_like"].day)}°F</TableCell>
                    <TableCell align="center">{hourly.humidity}%</TableCell>
                    <TableCell align="center">{Math.round(hourly.wind_speed)}mph</TableCell>
                    <TableCell align="center">{hourly.weather[0].description}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    );

};

export default DailyWeather;
