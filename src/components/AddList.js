import React, { Component  } from 'react'
import { Grid, Input, Button } from 'semantic-ui-react'

class AddList extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             text: '',
             amount: 0,
             done: false
        }

        this.textInput = React.createRef()
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = () => {
        const { text, amount } = this.state
        if(!text || !amount){
            alert("Please enter list and amount first.");
            return
        }
        this.props.addList(this.state);
        this.setState({
            text: '',
            amount: 0
        })
    }  

    render() {
        return (
            <Grid>
                <Grid.Column width={8}>
                    <Input fluid type='text' 
                    name="text"
                    value={this.state.text} 
                    onChange={this.changeHandler} 
                    placeholder='List Name...' />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Input fluid type="number"
                    name="amount" 
                    value={this.state.amount} 
                    onChange={this.changeHandler} 
                    placeholder="Amount..." />
                </Grid.Column>
                <Grid.Column width={3} textAlign="right">
                    <Button fluid color="blue" onClick={this.handleSubmit} icon="add"></Button>
                </Grid.Column>
            </Grid>
        )
    }
}

export default AddList
