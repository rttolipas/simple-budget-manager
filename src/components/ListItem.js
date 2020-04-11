import React from 'react'
import { Grid, Checkbox, Button } from 'semantic-ui-react'

import appStyle from '../App.module.css'


const ListItem = ({ doneList, deleteList, text, amount, done, id }) => {
    
    const numeral = require('numeral');
    
    return (
        <Grid>
            <Grid.Column width={9} verticalAlign="middle">
                <Checkbox label={text} 
                onClick={() => doneList(id)}
                checked={done}
                style={{ textDecoration: done ? 'line-through': 'none' }}
                className={appStyle.listText} />
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="middle" textAlign="right">
                <span className={appStyle.listText}>{numeral(amount).format('0,0.00')}</span>
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
                <Button fluid color="red" onClick={() => deleteList(id)} icon="trash"></Button>
            </Grid.Column>
        </Grid>
    )
}

export default ListItem
