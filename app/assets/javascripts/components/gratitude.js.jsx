var Gratitude = React.createClass({

  handleDelete: function(gratitude) {
     $.ajax({
       method: 'DELETE',
       url: "/gratitudes/" + this.props.gratitude.id
     }).success(function(){
        this.props.deleteRecord(this.props.gratitude);
      }.bind(this));
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.gratitude.description}</td>
        <td>{this.props.gratitude.title}</td>
        <td>{<img src={this.props.gratitude.img_url} class="img-responsive"/>}</td>
        <td><button className="btn btn-danger" type="button" onClick={this.handleDelete}>Remove</button></td>
      </tr>
    );
  }

});
