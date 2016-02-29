var Gratitude = React.createClass({
  render: function() {
    return(
      <tr>
        <td>{this.props.gratitude.description}</td>
        <td><input type="button" className='btn btn-danger' onClick={this._onClick} value="Remove"/></td>
      </tr>
    );
  }

});
