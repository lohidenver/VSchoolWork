
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from '@material-ui/lab';

import useStyles from './styles'

const Map = ({coordinates, setCoordinates, setBounds}) => {
    const classes =useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    // const coordinates = {lat:39.7577763, lng:-105.0118008};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCkAKsF21Tn1v9qoODl8LnuzOwcjyAoZLs'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                // onChildClick={''}
            >

            </GoogleMapReact>


        </div>
    )
}

export default Map;