import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RefreshIcon from '@mui/icons-material/Refresh';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Feature() {
    return (
        <>
            <section id='feature'>
                <div className='feature contain'>
                    <div className='feature-card'>
                        <LocalShippingIcon />
                        <div>
                            <h2>
                                Free Shipping
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                            </p>
                        </div>
                    </div>
                    <div className='feature-card'>
                        <RefreshIcon />
                        <div>
                            <h2>
                                Free Returns
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                            </p>
                        </div>
                    </div>
                    <div className='feature-card'>
                        <HelpOutlineIcon/>
                        <div>
                            <h2>
                                Customer Support
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Feature
