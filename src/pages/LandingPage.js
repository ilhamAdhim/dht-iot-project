import { MDBAnimation, MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import Footer from '../components/Footer';
import { readData } from '../firebase/services';
import { BLACK_COLOR, DARK_BLUE_COLOR, VIOLET_COLOR } from '../utils/colors';
import firebase from "firebase"
import { myFirebase } from '../firebase';

const LandingPage = () => {
    const [isTypingDone, setTypingDone] = useState(false);
    const [humidity, setHumidity] = useState({});
    const [temperature, setTemperature] = useState({});

    useEffect(() => {
        document.title = "IOT Temp Humid"

        let ref = myFirebase.database().ref(`FirebaseIOT/`)
            ref.on('value', snapshot => {
               console.log(snapshot.val())
               setHumidity(snapshot.val().humidity)
               setTemperature(snapshot.val().temperature)
            })
    }, []);

    return (
        <>
            <div style={{ backgroundColor: BLACK_COLOR, height: '90vh' }}>
                <div className="p-4">
                    <Typist stdTypingDelay={100}>
                        <Typist.Delay ms={500} />
                        <MDBTypography tag="h1" className=" ml-4 text-white">
                            Read Humidity & Temperature in Real Time
                        </MDBTypography>
                    </Typist>
                    <Typist onTypingDone={() => setTypingDone(true)}>
                        <Typist.Delay ms={4200} />
                        <MDBTypography tag="h2" className="ml-4 text-white" style={{
                            textDecoration: "underline",
                            fontWeight : "650",
                            textDecorationColor: DARK_BLUE_COLOR
                        }}>
                            with DHT Sensor and Firebase
                        </MDBTypography>
                    </Typist>
                </div>
                
                {isTypingDone ? 
                <MDBAnimation type="fadeIn">
                    <div className="d-flex justify-content-center text-white align-items-center p-2 ml-4 mr-4 mh-100">
                        <MDBCard className="mr-4" style={{backgroundColor: VIOLET_COLOR, width : "30em"}}>
                            <MDBCardBody>
                            <MDBCardTitle className="text-center">Humidity</MDBCardTitle>
                                <div className="text-center" style={{fontSize: "5vh"}}>
                                    { humidity || 0} %
                                </div>
                            High
                            </MDBCardBody>
                        </MDBCard>
                        
                        <MDBCard className="mr-4" style={{backgroundColor: VIOLET_COLOR, width : "30em"}}>
                            <MDBCardBody>
                            <MDBCardTitle className="text-center">Degree</MDBCardTitle>
                                <div className="text-center" style={{fontSize: "5vh"}}>
                                    { temperature || 0} °C
                                </div>
                            High
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                 <div  className="text-center mt-4">
                    <MDBBtn color="amber"
                    target="_blank"
                     href="https://console.firebase.google.com/u/0/project/iottemphumid-67c9b/database/iottemphumid-67c9b-default-rtdb/data"
                    > See Firebase Console</MDBBtn>
                 </div>
                </MDBAnimation>
                 : null} 
            </div>
            <Footer />
        </>

    );
};

export default LandingPage;