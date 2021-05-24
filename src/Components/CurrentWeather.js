import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CurrentWeather = ({currentWeather}) => {
    
    console.log(currentWeather);

    return (
    <div>
        <h3 style={{marginTop:50}}>The Current Weather at Selected Zip Code</h3> 
        <TableContainer>
        <Table aria-label="simple table" style={{width:200}} align="center">
            <TableHead>
            <TableRow>
                <TableCell align="center"><b>Temperature</b></TableCell>
                <TableCell align="center"><b>Description</b></TableCell>
            </TableRow>
        </TableHead>
            <TableBody>
                <TableRow>
                <TableCell align="center">{currentWeather.temp}°F</TableCell>
                <TableCell align="center">{currentWeather.weather[0].description}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    );
    
};
export default CurrentWeather;
