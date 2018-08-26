import React from 'react';
//require('./index.css');
import { Segment } from 'semantic-ui-react';
import DataProvider from './DataProvider';
import Table from './Table';

class Page1 extends React.Component{
	render(){
		let mystyle={
			width:'200px',
			backgroundColor:'blue',
			textAlign:'center',
			fontSize:'24px'
		}
		return(
			<div>
			    <DataProvider render = {data => <Table data={data} />} />
			</div>
		);
	}
}

export default Page1;