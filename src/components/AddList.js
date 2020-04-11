import React, { Component  } from 'react'
import { Grid, Input, Button } from 'semantic-ui-react'

class AddList extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             text: '',
             amount: '',
             done: false
        }

        this.textInput = React.createRef()
    }

    componentDidMount() {
        this.textInput.current.focus();
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
            this.textInput.current.focus();
            return
        }
        this.props.addList(this.state);
        this.setState({
            text: '',
            amount: ''
        })
        this.textInput.current.focus();
    }  

    render() {
        return (
            <Grid>
                <Grid.Column width={8}>
                    <Input fluid type='text' 
                    name="text"
                    value={this.state.text} 
                    ref={this.textInput}
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
                    <Button fluid color="green" onClick={this.handleSubmit} icon="add"></Button>
                </Grid.Column>
            </Grid>
        )
    }
}

export default AddList
