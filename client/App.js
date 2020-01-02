import React from 'react';
import SearchBar from './SearchBar.js'

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
             
            </div>
       );
   }

}

export default App