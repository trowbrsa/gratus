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

  deleteElement:function() {
    console.log("remove");
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
