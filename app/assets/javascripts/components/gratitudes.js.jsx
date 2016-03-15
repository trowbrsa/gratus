var Gratitudes = React.createClass({
  getInitialState: function() {
    return { gratitudes: this.props.gratitudes };
  },

  getDefaultProps: function() {
    return { gratitudes: [] };
  },

  addRecord: function(gratitude) {
    var gratitudes = this.state.gratitudes.slice();
    gratitudes.push(gratitude);
    this.setState({ gratitudes: gratitudes });
  },

  deleteRecord: function(gratitude) {
    var gratitudes = this.state.gratitudes.slice();
    var index = gratitudes.indexOf(gratitude);
    gratitudes.splice(index, 1);
    this.setState({gratitudes: gratitudes});
  },

  editRecord: function(gratitude) {
    var gratitudes = this.state.gratitudes.slice();
    var index = this.state.gratitudes.indexOf(gratitude);
    gratitudes[index] = data;
    this.setState({ gratitudes: gratitudes});
  },

  onUpdate(gratitude) {
    this.props.handleUpdate(gratitude);
  },


  render: function() {
    var Grads = this.state.gratitudes.map(function(gratitude) {
      return (
      <Gratitude key={gratitude.id}
                 gratitude={gratitude}
                 deleteRecord={this.deleteRecord}
                 handleUpdate={this.onUpdate}/>
             );}, this);

      return (
      <div className='gratitudes'>
        <GratitudeForm handleNewRecord={this.addRecord} />
        <div className='table table-bordered'>
          <div>
            {Grads}
          </div>
        </div>
      </div>
    );
  }
});
