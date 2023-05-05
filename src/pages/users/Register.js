import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles'

import { 
    TextField,   
    Button
} from '@mui/material/'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))


const Register = () => {
    const classes = useStyles()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    } 

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false

        let newFormState = {
            ...form,

        }

        if(!form.name.value) {
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Type your name correctly!'
            } 
        }

        if(!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Type your role correctly!'
            } 
        }

        if (hasError) {
            return setForm(newFormState)        
        }        
        
        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setOpenToasty(true)
            setIsLoading(false)
        })
        
    }

    return (
        <>
            <div className={classes.wrapper}>
                <TextField 
                error={form.name.error}
                helperText={form.name.error ? form.name.helperText : ''}
                label="Type your name" 
                variant="standard" 
                name='name' 
                value={form.name.value} 
                onChange={handleInputChange}             
            />
            </div>
            <div className={classes.wrapper}>
                <TextField 
                error={form.job.error}
                helperText={form.job.error ? form.job.helperText : ''}
                label="Type your role" 
                variant="standard" 
                name='job' 
                value={form.job.value} 
                onChange={handleInputChange} />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" onClick={handleRegisterButton} disabled={isLoading}>
                    {
                        isLoading ? 'Wait...' : 'Sign in'
                    }
                </Button>
            </div>
            <Toasty 
                open={openToasty} 
                severity="success" 
                text="Registration completed"
                onClose={() => setOpenToasty(false)}
            /> 
        </>
    )
}

export default Register