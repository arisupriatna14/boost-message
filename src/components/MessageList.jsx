import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

export default class MessageList extends Component {
  titleFormat(title) {
    return title.toLowerCase().split(' ').join('-')
  }

  render () {
    const { dataPromo } = this.props
    return (
      <Fragment>
        {
          dataPromo.map((data, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index} style={{marginBottom: 10}}>
                <div className="card">
                  <img 
                    src={data.url}
                    alt="img-promo"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <Link to={`/message/${this.titleFormat(data.title)}`} style={{textDecoration: 'none', color: 'black'}}>
                      <h5>{data.title}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}