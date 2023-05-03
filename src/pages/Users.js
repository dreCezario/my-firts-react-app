import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'

import UserCard from '../components/UserCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
        margin: theme.spacing(2),
    },
  }))
  

const Users = () => {
    const classes = useStyles()
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response =>{
                const { data } = response.data

                setUsers(data)
            })
    }, [])

    return (
        <Grid container>
                {
                    users.map(item => (
                        <Grid item xs={12} md={4} >
                            <UserCard 
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                className={classes.card}
                            />
                        </Grid>
                    ))
                }
        </Grid>
    )
}

export default Users