import React from 'react';

//for testing only
export default class Grid extends React.Component{
	constructor(props){
		super(props);
  	   console.log('render grid', props);

       this.numColumns = 12;
    }

    renderColumns() {
       for (var i = 0; i < this.numColumns; i++) { 
       // console.log('here', this.numColumns, i);
        <span>column</span>;
      }
    }
  	render() {

      let cols = [];

      for(var i = 0; i < this.numColumns; i++) {
         cols.push(<span className="colAll1" key={`col` + i}></span>);
      }

      if(this.props.show) {
      	return (
      		<div className="container test-grid">
            <div className="row">
      		    { cols }
            </div>
      		</div>
      	);
      } else {
        return null;
      }
  	}
}