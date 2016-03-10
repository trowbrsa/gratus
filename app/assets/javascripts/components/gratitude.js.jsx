var Gratitude = React.createClass({
  getInitialState: function() {
    return { edit: false };
  },

  handleToggle: function(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },

  handleDelete: function(gratitude) {
     $.ajax({
       method: 'DELETE',
       url: "/gratitudes/" + this.props.gratitude.id
     }).success(function(){
        this.props.deleteRecord(this.props.gratitude);
      }.bind(this));
  },

  handleEdit: function(e) {
    e.preventDefault(e);
    var data = { description: this.refs.description.value}
     $.ajax({
       method: 'PUT',
       url: "/gratitudes/" + this.props.gratitude.id,
       dataType: 'JSON',
       data: { gratitude: data},
       success:
       function(data){
        this.setState({edit: false}),
        this.props.handleEditGratitude(this.props.gratitude, data);
      }.bind(this)
    });
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.gratitude.description}</td>
        <td><button className="btn btn-danger" type="button" onClick={this.handleDelete}>Remove</button></td>
        <td><button className="btn btn-primary" type="button" onClick={this.handleToggle}>Edit</button></td>
    </tr>
    );
  },

  render: function() {
    if (this.state.edit) {
      return this.GratitudeForm();
    } else {
      return this.gratitude();
    }
  }
});
