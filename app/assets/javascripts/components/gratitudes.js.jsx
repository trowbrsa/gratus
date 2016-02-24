var Gratitudes = React.createClass({
  getInitialState: function() {
  console.log(this.props.data);
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
      <div className='gratitudes'>
        <GratitudeForm handleNewRecord={this.addRecord} />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.gratitudes.map(function(gratitude) {
              return <Gratitude key={gratitude.id} gratitude={gratitude} />
             })}
          </tbody>
        </table>
      </div>
    );
  }
});
