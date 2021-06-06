import { MDBAnimation, MDBBtn, MDBContainer, MDBDataTable, MDBDataTableV5, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import Footer from '../components/Footer';
import { BLACK_COLOR, DARK_BLUE_COLOR, LIGHT_STEEL_BLUE_COLOR } from '../utils/colors';
import firebase from 'firebase';
import { readData } from '../firebase/services';

const HistoryPage = props => {
    const [isTypingDone, setTypingDone] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const [dataTable, setDataTable] = useState({
        columns: [{
            label: 'Humidity',
            field: 'humidity',
            width: 200,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },
        },
        {
            label: 'Temperature',
            field: 'temperature',
            width: 270,
        },
        {
            label: 'Date',
            field: 'date',
            width: 250,
        },
        {
            label: 'Time',
            field: 'time',
            width: 250,
        },
        ],
        rows: [{}]
    });


    useEffect(() => {
        document.title = "History IOT Temp Humid"

        setIsDataLoaded(false)
        let ref = firebase.database().ref(`FirebaseIOT/history`)
        readData(ref).then(res => {
            setIsDataLoaded(true)

            setDataTable((columns) => {
                return {
                    ...columns,
                    rows: res
                }
            })
        })
    }, []);

    useEffect(() => {
        console.log(dataTable.rows)
    }, [dataTable.rows]);

    return (
        <>
            <div style={{ backgroundColor: BLACK_COLOR, height: '90vh', padding: '3em' }}>
                <Typist onTypingDone={() => setTypingDone(true)}>
                    <Typist.Delay ms={400} />
                    <MDBTypography tag="h2" className="ml-2 text-white" style={{
                        textDecoration: "underline",
                        fontWeight: "650",
                        textDecorationColor: DARK_BLUE_COLOR
                    }}>
                        History
                        </MDBTypography>
                </Typist>
                <MDBContainer >
                    <MDBDataTableV5
                        responsive
                        theadColor="dark"
                        tbodyColor="table-dark "
                        className="text-white"
                        data={dataTable}
                        entries={5}
                        pagesAmount={4}
                    />
                    {isTypingDone ?
                        <MDBAnimation type="fadeIn">
                            <div className="text-center mt-4">
                                <MDBBtn color="amber"
                                    target="_blank"
                                    href="https://console.firebase.google.com/u/0/project/iottemphumid-67c9b/database/iottemphumid-67c9b-default-rtdb/data"
                                > See Firebase Console</MDBBtn>
                                <Link to="/">
                                    <MDBBtn color="deep-purple">
                                        Go Back
                        </MDBBtn>
                                </Link>
                            </div>
                        </MDBAnimation>
                        : null
                    }
                </MDBContainer>
            </div>
        </>
    );
};

export default HistoryPage;