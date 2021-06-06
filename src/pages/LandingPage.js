import { MDBAnimation, MDBBtn, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import Footer from '../components/Footer';
import { readData } from '../firebase/services';
import { BLACK_COLOR, DARK_BLUE_COLOR } from '../utils/colors';
import { myFirebase } from '../firebase';
import firebase from 'firebase';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isTypingDone, setTypingDone] = useState(false);
    const [humidity, setHumidity] = useState({});
    const [temperature, setTemperature] = useState({});

    useEffect(() => {
        document.title = "IOT Temp Humid"

        let ref = firebase.database().ref(`FirebaseIOT/`)
        readData(ref).then(res => {
            setHumidity(res.humidity)
            setTemperature(res.temperature)
        })
    }, []);

    return (
        <>
            <div style={{ backgroundColor: BLACK_COLOR, height: '90vh' }}>
                <div className="p-4">
                    <Typist stdTypingDelay={100}>
                        <Typist.Delay ms={500} />
                        <MDBTypography tag="h1" className=" ml-2 text-white">
                            Read Humidity & Temperature in Real Time
                        </MDBTypography>
                    </Typist>
                    <Typist onTypingDone={() => setTypingDone(true)}>
                        <Typist.Delay ms={4200} />
                        <MDBTypography tag="h2" className="ml-2 text-white" style={{
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
                        <Cards title="Humidity" value={humidity} unit="%" indicator="High" />
                        <Cards title="Degree" value={temperature} unit="°C" indicator="Warm" />
                    </div>
                 <div  className="text-center mt-4">
                    <MDBBtn color="amber"
                    target="_blank"
                     href="https://console.firebase.google.com/u/0/project/iottemphumid-67c9b/database/iottemphumid-67c9b-default-rtdb/data"
                    > See Firebase Console</MDBBtn>
                    <Link to="/history">
                        <MDBBtn color="deep-purple">
                            See History
                        </MDBBtn>
                    </Link>
                 </div>
                </MDBAnimation>
                 : null} 
            </div>
        </>

    );
};

export default LandingPage;