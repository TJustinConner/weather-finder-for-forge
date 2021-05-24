import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
 
const HourlyWeather = ({forecastWeather}) => {

    function getTime(timestamp) {
        var trueDate = new Date(timestamp * 1000),
            year = trueDate.getFullYear(),
            month = (trueDate.getMonth() + 1), //plus one due to array starting at 0
            localDate = ("0" + trueDate.getDate()).slice(-2), //splicer to remove extra 0 while also keeping the needed numbers in date. (last 2)
            militaryTime = trueDate.getHours(),
            halfDayTime   = militaryTime,
            ampm = "AM",
            TotalTime;

        if (militaryTime === 0) {
            halfDayTime= 12;
        } 
        
        else if (militaryTime === 12) {
            halfDayTime= 12;
            ampm = "PM";
        }

        else if (militaryTime > 12) {
            halfDayTime= militaryTime - 12;
            ampm = "PM";
        } 
        else {
            ampm = "AM";
        }

        TotalTime = month + "/" + localDate + "/" + year  + "@ " + halfDayTime+ ":00" + ampm;
        return TotalTime.substring();
    }

    return (
    <div>
        <h3 style={{marginTop:100}}>Current Hourly Weather Report</h3>
        <TableContainer>
            <Table aria-label="simple table" style={{width:1000}} align="center">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>Time </b></TableCell>
                        <TableCell align="center"><b>Temperature</b></TableCell>
                        <TableCell align="center"><b>Feels Like</b></TableCell>
                        <TableCell align="center"><b>Humidity Percent</b></TableCell>
                        <TableCell align="center"><b>Wind Speed</b></TableCell>
                        <TableCell align="center"><b>Description</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {forecastWeather["hourly"].map((hourly) =>
                    <TableRow>
                        <TableCell align="center">{getTime(hourly.dt)}</TableCell>
                        <TableCell align="center">{Math.round(hourly.temp)}°F</TableCell>
                        <TableCell align="center">{Math.round(hourly.feels_like)}°F</TableCell>
                        <TableCell align="center">{Math.round(hourly.humidity)} %</TableCell>
                        <TableCell align="center">{Math.round(hourly.wind_speed)} mph</TableCell>
                        <TableCell align="center">{hourly.weather[0].description}</TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );

};

export default HourlyWeather;

