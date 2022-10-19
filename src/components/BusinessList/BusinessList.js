import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business';

export default class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                { this.props.businesses.map(business => {
                    return <Business business={business}  key={business.id}/>
                }) }
            </div>
        )
    }
}