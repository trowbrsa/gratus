var Gratitudes = React.createClass({
  getInitialState: function() {
    return { gratitudes: this.props.data };
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
    index = gratitudes.indexOf(gratitude);
    gratitudes.splice(index, 1);
    this.setState({gratitudes: gratitudes});
  },

  render: function() {
    var Grads = this.state.gratitudes.map(function(gratitude) {
      return (
      <Gratitude key={gratitude.id}
                 gratitude={gratitude}
                 deleteRecord={this.deleteRecord}/>
             );}, this);

      return (
      <div className='gratitudes'>
        <GratitudeForm handleNewRecord={this.addRecord} />
        <table className='table table-bordered'>
          <tbody>
            {Grads}
          </tbody>
        </table>
      </div>
    );
  }
});
