var Skill = React.createClass({
  getInitialState() {
    return { details: '', editable: false, name: ''}
  },

  handleEdit() {
    if (this.state.editable) {
      var name = this.state.name;
      var details = this.state.details;

      this.onUpdate();
    }
    this.setState({ editable: !this.state.editable })

  },

  onUpdate() {
    if (this.state.editable) {
      var skill = { id: this.props.skill.id,
                    name: this.state.name,
                    details: this.state.details,
                    level: this.props.skill.level }

console.log(skill);
      this.props.handleUpdate(skill);
    }
  },

  handleUpdateLevel(action) {
    var level = this.props.skill.level;
    var newLevel = this.getNewLevel(action, level)
    var skill = { id: this.props.skill.id, level: newLevel }
console.log(skill)
    this.props.handleUpdate(skill);
  },

  levelCanBeChanged(action, level) {
    return action === 'up' && level < 2 || action === 'down' && level > 0;
  },

  getNewLevel(action, oldLevel) {
    var levels = ['bad', 'halfbad', 'fantastic'];
    var index = levels.indexOf(oldLevel);
    var change = action === 'up' ? 1 : -1;
    if (this.levelCanBeChanged(action, index)) {
      return levels[index + change]
    } else {
      return oldLevel
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
                  onClick={this.handleUpdateLevel.bind(this, 'down')}>
            <span className='glyphicon glyphicon-triangle-bottom'></span>
          </button>
          <p><strong>Level:</strong> {this.props.skill.level}</p>
          <button type='button'
                  className='btn btn-default btn-sm'
                  onClick={this.handleUpdateLevel.bind(this, 'up')}>
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
