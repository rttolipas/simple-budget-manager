import React, {useState, useEffect} from 'react'
import { Card } from 'semantic-ui-react'



const Board = () => {

    const numeral = require('numeral');

    const [total, setTotal] = useState(0)

    useEffect(() => {
        computeTotal()
    })

    const computeTotal = () =>{
        if(localStorage.getItem('_lists') == '') return;
        const listItems = JSON.parse(localStorage.getItem('_lists'));
        if(listItems.length > 0){
            const amount = listItems.map(item => item.amount);
            const total = amount.reduce((total, num) => total + num);
            setTotal(numeral(total).format('0,0.00'));
        }else{
            setTotal(numeral(0).format('0,0.00'));
        }
        
    }

    return (
        <Card fluid raised color='red'>
            <Card.Content>
                <Card.Meta>
                    Total Expenses:
                </Card.Meta>
                <Card.Header textAlign='center'>
                &#8369;{total}
                </Card.Header>
            </Card.Content>
        </Card>
    )
}
export default Board;
