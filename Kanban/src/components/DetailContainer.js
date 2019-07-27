import React from 'react';
import Drawer from '@atlaskit/drawer';


const DetailContainer = (props) => {
    return (
        <Drawer
            onClose={props.handleClose}
            isOpen={props.isOpen}
            width="wide"
        >
            {props.children}
        </Drawer>
    );

}

export default DetailContainer;