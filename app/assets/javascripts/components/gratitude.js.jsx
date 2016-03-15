var Gratitude = React.createClass({
  getInitialState: function() {
    return { edit: false };
  },

  handleDelete: function(gratitude) {
     $.ajax({
       method: 'DELETE',
       url: "/gratitudes/" + this.props.gratitude.id
     }).success(function(){
        this.props.deleteRecord(this.props.gratitude);
      }.bind(this));
  },

  handleEdit() {
    if (this.state.edit) {
      var gratitude = this.refs.description.value;
      console.log('in handleEdit', this.state.edit, gratitude);
    }
    this.setState({edit: !this.state.edit});
  },

  onUpdate() {
    if (this.state.edit) {
      var data = { description: this.refs.gratitude.value };
      this.props.handleUpdate(gratitude);
    }
    this.setState({edit: !this.state.edit});
  },

 handleEditGratitude(gratitude) {
   var gratitudes = thisstate.gratitudes.filter((g) => { return g.id != gratitude.id});
   gratitude.push(gratitude);
   this.setState({gratitudes: gratitudes});
 },

  handleUpdate: function(e) {
    e.preventDefault(e);
    var data = { description: this.refs.description };
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
      var content = this.state.edit ? <input type='text'
                                             ref='description'
                                             defaultValue={this.props.gratitude.description} />
                                    : <p>{this.props.gratitude.description}</p>
      return (
        <div>
        {content}

        <button onClick={this.handleEdit}>{this.state.edit ? 'Submit' : 'Edit'}</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
      )
    }
});
