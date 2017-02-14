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
      var name = this.state.name;
      var details = this.state.details;
      var skill = { name: name, details: details }

      this.props.handleUpdate(skill);
    }
    this.setState({ editable: !this.state.editable })
  },

  render() {
    var name = this.state.editable ? <input type='text' 
                                            defaultValue={this.props.skill.name}
                                            onChange={ (e) => this.setState({ name: e.target.value }) }
                                     />
                                   : <h3>{this.props.skill.name}</h3>

    var details = this.state.editable ? <textarea type='text' 
                                                  defaultValue={this.props.skill.details}>
                                                  onChange{ (e) => this.setState({details: e.target.value}) }
                                        </textarea>
                                      : <p>{this.props.skill.details}</p>

    return (
      <div>
        {name}
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        {details}

        <button onClick={this.props.handleDelete}>
          Delete
        </button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    )
  }
});
