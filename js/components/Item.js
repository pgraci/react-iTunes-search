import React from 'react';
import moment from 'moment';
import { getKind } from '../utils';

class Item extends React.Component {

  render () {

    let {data} = this.props,
        price = data.trackPrice || data.collectionPrice || data.price;

    return (
      <div className="ui card">
        <div className="image">
          <img src={data.artworkUrl100.replace('100x100', '1200x1200')} />
        </div>
        <div className="content">
          <div className="header">{data.trackName || data.collectionName}</div>
          <div className="meta">
            {data.artistName}
          </div>
          <div className="description">
          <a href={data.trackViewUrl || data.collectionViewUrl} target="_blank">BUY NOW</a>
          </div>
        </div>
      </div>
    );

  }

}

Item.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default Item;
