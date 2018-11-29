import React, { Component } from 'react'
import { connect } from 'react-redux'

class InspirationContainer extends Component {
    render(){
      return (
        <div className="block" id="inspiration-container">
          <p>INSPIRATION</p>
        </div>
      );
    }
}

const mapStateToProps = state => ({ inspiration: state.inspiration })

export default connect(mapStateToProps)(InspirationContainer);
