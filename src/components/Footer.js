import React from 'react';
import Typist from 'react-typist';
import { VIOLET_COLOR } from '../utils/colors';

const CONTRIBUTORS = ["Arga Diaz Prawira Y", "Flasma Veronicha H", "Muhammad Ilham A", "Vira Meliana A"]


const Footer = props => {
    return (
        <footer className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: VIOLET_COLOR }}>
            <div className="p-2 col-example text-left">Created by : </div>
            {CONTRIBUTORS.map(item =>
                <Typist className="p-2 col-example text-left" avgTypingDelay={200}>
                    <Typist.Delay ms={300} />
                    {item}
                </Typist>
            )}
        </footer>
    );
};

export default Footer;