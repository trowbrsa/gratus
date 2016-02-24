var Gratitudes = React.createClass({
  getInitialState: function() {
    return { gratitudes: this.props.data };
  },

  getDefaultProps: function() {
    return { gratitudes: [] };
  },

  addGratitude: function(gratitude) {
    var gratitudes = this.state.gratitudes.slice();
    gratitudes.push(gratitude);
    this.setState({ gratitudes: gratitudes });
  },

  render: function() {
    return(
      <div className='gratitudes'>
        <h2 className='title'>
          Write down some gratitudes!
        </h2>
        <GratitudeForm handleNewGratitude={this.addGratitude} />
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
