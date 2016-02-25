var Gratitude = React.createClass({
  render: function() {
    return(
      <tr>
        <td>{this.props.gratitude.description}</td>
        <td>Delete</td>
      </tr>
    );
  }

});
