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

  render: function() {
    return(
      <table className='table table-bordered'>
        <tbody>
          {this.state.gratitudes.map(function(gratitude) {
            return <Gratitude key={gratitude.id} gratitude={gratitude} />
           })}
        </tbody>
      </table>
    );
  }
});
