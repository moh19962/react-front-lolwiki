import React, { Component } from 'react';
import items from './Deta'
const ChampContext = React.createContext();

class ChampProvider extends Component {
    state = {
        champs: [],
        sortedChamps: [],
        featuredChamps: [],
        loading: true,
        type: 'all',
    };

    componentDidMount() {
        this.getData();

    }

    //Fetch data from the backend. Get all champs
    //Get all te data from the data(file/base)
     formData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let type = item.fields.type;

            let champ = {...item.fields, images, type, id};
            return champ;
        });
        return tempItems;
    }


        // Fetch data from the backend. Get all champs
        getData = async () =>{
            try {
              await fetch('http://localhost:9191/champions/all', {
                    method: 'GET',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    })
                })
                    .then(res => {return res.json() })
                    .then(data => {
                        this.setState({champs: data})
                        console.log(this.state.champs)
                    })
                let champs = this.state.champs
                let featuredChamps = champs.filter(champ => champ.featured === true);
                this.setState({
                    champs,
                    featuredChamps,
                    sortedChamps: champs,
                    loading: false,
                })
            } catch (error) {
                console.log(error)
            }
        }
    

// Nu je een slug terug hebt gekregen zoek je specifiek naar een champ
    getChamp = (slug) => {
        let tempChamps = [...this.state.champs]
        const champ = tempChamps.find(champ => champ.championName === slug)
        return champ
    }

    handleChange = event => {
        const target = event.target;
        const value = event.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState(
            {
                [name]: value
            },
            this.filterChamps
            
        );
    };

//if not all filter else show all

    filterChamps = () => {
        let {champs, championType} = this.state

        let tempChamps = [...champs];
        if (championType !== 'all') {
            tempChamps = tempChamps.filter(champ => champ.championType === championType)
        }
        this.setState({
            sortedChamps: tempChamps
        })
    };


    render() {
        return (
            //destruct the state so it can used in another component
            <ChampContext.Provider value={{ ...this.state, getChamp: this.getChamp, handleChange: this.handleChange }}>
                {this.props.children}
            </ChampContext.Provider>
        );
    }
}

const ChampConsumer = ChampContext.Consumer;

export function withChampConsumer(Component){
    return function ConsumerWrapper(props){
        return <ChampConsumer>
            {value => <Component {...props} context={value}/>}
        </ChampConsumer>
    }
}

export { ChampProvider, ChampConsumer, ChampContext };
