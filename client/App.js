import React from 'react';
import SearchBar from './SearchBar.js'
import ListView from './ListView.js'

 class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {groceries: ['bananas', 'cigars', 'bowl of snakes']};
   };

   render(){
       return (
           <div>
             <h1>Hello!</h1>
             <SearchBar />
             <ListView />
             
            </div>
       );
   }

}

export default App