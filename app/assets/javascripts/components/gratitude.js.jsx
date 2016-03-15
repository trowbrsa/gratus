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
        <td>{this.props.gratitude.description}<br></br>{<img src={this.props.gratitude.img_url} class="img-responsive"/>}</td>
        <td><div className="fa fa-times fa-lg" onClick={this.handleDelete}></div></td>
      </tr>
    );
  }
});
