import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        const fishes = {...this.state.fishes}; // taking copy of existing state
        fishes[`fish${Date.now()}`] = fish; // adding new fish to the fishes variable
        this.setState({
            fishes: fishes // set new fishes object to state
        });
    }

    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes });
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null; // firebase requires to be null before deleting
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        const order = {...this.state.order}; // copying existing state
        order[key] = order[key] + 1 || 1; // adds to the order OR updates the number in the order
        this.setState({
            order: order // updates state object
        })
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({
            order: order
        });
    }

    render() {
        return (
            <div className="bait-by-the-barrel">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                         {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                            key={key} 
                            index={key}
                            details={this.state.fishes[key]} 
                            addToOrder={this.addToOrder}/>
                         ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory 
                addFish={this.addFish} 
                updateFish={this.updateFish} 
                deleteFish={this.deleteFish} 
                loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes}/>
            </div>
         );
    }        
}

export default App; 