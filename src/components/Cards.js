import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';
import React from 'react';
import { VIOLET_COLOR } from '../utils/colors';

const Cards = props => {
    return (
        <MDBCard className="mr-4" style={{ backgroundColor: VIOLET_COLOR, width: "30em" }}>
            <MDBCardBody>
                <MDBCardTitle className="text-center"> {props.title} </MDBCardTitle>
                <div className="text-center" style={{ fontSize: "5vh" }}>
                    {props.value || 0} {props.unit}
                </div>
                <p> {props.indicator} </p>
            </MDBCardBody>
        </MDBCard>
    );
};


export default Cards;