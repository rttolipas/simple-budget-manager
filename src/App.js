import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Header from './components/Header'
import Board from './components/Board'
import AddList from './components/AddList'
import ListItem from './components/ListItem'

import { v4 as uuidv4 } from 'uuid';

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            lists : []
        }
        if(localStorage.getItem('_lists') == null){
            localStorage.setItem('_lists', []);
        }
    }
    
    componentDidMount(){        
        if(localStorage.getItem('_lists') !== ''){
            this.setState({
                lists: JSON.parse(localStorage.getItem('_lists'))
            })
        }
    }

    doneList = (id) => {
        const listItems = JSON.parse(localStorage.getItem('_lists'))
        const list = listItems.find(item => item.id === id);
        list.done = !list.done
        localStorage.setItem('_lists', JSON.stringify(listItems));
        this.setState({
            lists: listItems
        })
    }

    deleteList = (id) => {
        if(!window.confirm('Are you sure to delete this list?')){
            return;
        }
        const listItems = JSON.parse(localStorage.getItem('_lists'))
        const newList = listItems.filter(item => item.id !== id);
        localStorage.setItem('_lists', JSON.stringify(newList));
        this.setState({
            lists: newList
        })
    }

    addList = ({text, amount, done}) => {
        const storageItem = localStorage.getItem('_lists')
        const item = {
            id: uuidv4(),
            text: text.trim(),
            amount: parseFloat(amount),
            done
        }
        //first add
        if(!storageItem){
            localStorage.setItem('_lists', JSON.stringify([item]));
        }else{
            const items = JSON.parse(localStorage.getItem('_lists'));
            items.unshift(item);
            localStorage.setItem('_lists', JSON.stringify(items));
        }
        // // // set the new value of state
        this.setState({
            lists: JSON.parse(localStorage.getItem('_lists'))
        })
    }

    render() {
        return (
            <Grid padded>
                <Grid.Row>
                    <Grid.Column>
                        <Header />
                        <Board />
                        <AddList addList={this.addList} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {this.state.lists.map(list => (<ListItem key={list.id} text={list.text} done={list.done} amount={list.amount} id={list.id} doneList={this.doneList} deleteList={this.deleteList} />))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default App
