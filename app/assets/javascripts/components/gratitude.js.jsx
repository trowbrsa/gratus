var Gratitude = React.createClass({

  handleDelete: function(gratitude) {
     $.ajax({
       method: 'DELETE',
       url: "/gratitudes/" + this.props.gratitude.id
     }).success(function(){
        this.props.deleteRecord(this.props.gratitude);
      }.bind(this));
  },

  handleEdit: function(gratitude) {
     $.ajax({
       method: 'POST',
       url: "/gratitudes/" + this.props.gratitude.id
     }).success(function(){
        this.props.editRecord(this.props.gratitude);
      }.bind(this));
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.gratitude.description}</td>
        <td><button className="btn btn-danger" type="button" onClick={this.handleDelete}>Remove</button></td>
        <td><button className="btn btn-primary" type="button" onClick={this.handleEdit}>Edit</button></td>
    </tr>
    );
  }

});
