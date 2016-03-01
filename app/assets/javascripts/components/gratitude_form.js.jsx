var GratitudeForm = React.createClass({
  getInitialState: function() {
    return { description: ''};
  },

  handleChange: function(e) {
  var name = e.target.name;
  var obj = {};
  obj[name] = e.target.value;
  this.setState(obj);
  },

  valid: function() {
    return (this.state.description);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.post('/gratitudes',
      { gratitude: this.state },
      function(data) {
        this.props.handleNewRecord(data);
        this.setState(this.getInitialState());
        }.bind(this),
        'JSON'
    );
  },

  render: function() {
    return(
    <form className='form-inline' onSubmit={this.handleSubmit}>
      <div className = 'form-group'>
        <input type='text' className='form-control'
          placeholder='Description' name='description'
          value={this.state.description} onChange={this.handleChange}>
        </input>
      </div>
      <div className='form-group'>
        <input type='submit' className='btn btn-primary'
          disabled={!this.valid()}>
        </input>
      </div>
    </form>
    );
  }
});
