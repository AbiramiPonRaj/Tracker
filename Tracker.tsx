import React, { useState, useEffect } from 'react';
import './Tracker.css';

const Tracker = () => {
    return (
        <div style={{ marginLeft: '2%', fontFamily: 'Bookman Old Style' }} >
            <h4 style={{ marginLeft: '5%' }}>Veni</h4>
            <span style={{ marginLeft: '3%' }}>Matching Score : 80</span>
            <ul className="timeline">
                <li className="list active">
                    <div className="list-content">
                        <div className="details">
                            <h5 className="status-title">L1 First Review</h5>
                            <span className="status-title" style={{ color: '#080807' }}>Veni Has Been Closed In Lvl1 Review</span>
                            <span className="status-title" style={{ color: '#8f98a1' }}>09-sep-2024 - Tuesday</span>
                        </div>
                    </div>
                </li>
                <li className="list active">
                    <div className="list-content">
                        <div className="details">
                            <h5 className="status-title">L1 Second Review</h5>
                            <span className="status-title" style={{ color: '#080807' }}>Veni Has Been Esc In Lvl2 Review</span>
                            <span className="status-title" style={{ color: '#8f98a1' }}>09-sep-2024 - Tuesday</span>
                        </div>
                    </div>
                </li>
                <li className="list active">
                    <div className="list-content">
                        <div className="details">
                            <h5 className="status-title">L2 Search Review</h5>
                            <span className="status-title" style={{ color: '#080807' }}>Veni Has Been RFI In Lvl2 Search</span>
                            <span className="status-title" style={{ color: '#8f98a1' }}> 09-sep-2024 - Tuesday</span>
                        </div>
                    </div>
                </li>
                <li className="list active">
                    <div className="list-content">
                        <div className="details">
                            <h5 className="status-title">L3 Search Review</h5>
                            <span className="status-title" style={{ color: '#080807' }}>Veni Has Been Closed In Lvl3 Search Review</span>
                            <span className="status-title" style={{ color: '#8f98a1' }}>09-sep-2024 - Tuesday</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    );
}

export default Tracker;