var Skill = React.createClass({
  getInitialState() {
    return { details: '', editable: false, name: ''}
  }, 

  handleEdit() {
    if (this.state.editable) {
      var name = this.state.name;
      var details = this.state.details;
      console.log('in handleEdit', this.state.editable, name, details);
      this.onUpdate();
    }
    this.setState({ editable: !this.state.editable })

  }, 

  onUpdate() {
    if (this.state.editable) {
      var id = this.props.skill.id;
      var name = this.state.name;
      var details = this.state.details;
      var level = this.props.skill.level;
      var skill = {id: id, name: name, details: details, level: level}

      this.props.handleUpdate(skill);
console.log(skill)
    }
    this.setState({ editable: !this.state.editable })
  },

  handleLevelChange(action) {
    var levels = ['bad', 'halfbad', 'fantastic'];
    var name = this.props.skill.name;
    var details = this.props.skill.details;
    var level = this.props.skill.level;
    var index = levels.indexOf(level);

    if (action === 'up' && index < 2) {
      var newLevel = levels[index + 1];
      this.props.handleUpdate({id: this.props.skill.id, name: name, details: details, level: newLevel})
    } else if (action === 'down' && index > 0) {
      var newLevel = levels[index - 1];
      this.props.handleUpdate({id: this.props.skill.id, name: name, details: details, level: newLevel})
    }
  },

  render() {
    var name = this.state.editable ? <input type='text' 
                                            defaultValue={this.props.skill.name}
                                            onChange={ (e) => this.setState({ name: e.target.value }) }
                                     />
                                   : <h3>{this.props.skill.name}</h3>

    var details = this.state.editable ? <textarea type='text' 
                                                  onChange={ (e) => this.setState({details: e.target.value}) }
                                                  defaultValue={this.props.skill.details}/>
                                      : <p>{this.props.skill.details}</p>

    return (
      <div>
        {name}
        <div className='skill-level'>
          <button type='button' 
                  className='btn btn-default btn-sm'
                  onClick={this.handleLevelChange.bind(this, 'down')}>
            <span className='glyphicon glyphicon-triangle-bottom'></span>
          </button>
          <p><strong>Level:</strong> {this.props.skill.level}</p>
          <button type='button' 
                  className='btn btn-default btn-sm'
                  onClick={this.handleLevelChange.bind(this, 'up')}>
            <span className='glyphicon glyphicon-triangle-top'></span>
          </button>
        </div>
        {details}

        <button onClick={this.props.handleDelete}>
          Delete
        </button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    )
  }
});
