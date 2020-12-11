import React, {Component} from 'react'
export default class BurgerStack extends Component{
    render() {
        const burgerChoice = this.props.burgerItem.map((eachItem, ind) => {
            return <div>
                    <li key={ind}>{eachItem.name}</li><button>Remove</button>
                    </div>
        })
        return(
        <div>
            <h1>Burger</h1>
            {burgerChoice}
        </div>
        )
    }
}
    