import React from 'react'
import { makeStyles } from '@mui/styles';
import { 
    Container, 
} from '@mui/system';

import Header from '../partials/Header/Header'

const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0px',
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()


    return (
        <>
            <Header />
            <Container  className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default