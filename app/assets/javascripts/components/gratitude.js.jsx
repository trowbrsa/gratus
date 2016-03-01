var Gratitude = React.createClass({

  // handleDelete: function(gratitude) {
  //   gratitude.preventDefault()
  //    $.ajax
  //      method: 'DELETE'
  //      url: "/gratitudes/#{ @props.gratitude.id}"
  //      dataType: 'JSON'
  //       success: ()
  //         @props.handleDeleteRecord @props.gratitude
  //
  // },
  render: function() {
    return(
      <tr>
        <td>{this.props.gratitude.description}</td>
        <td>Delete</td>
      </tr>
    );
  }

});
