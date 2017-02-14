var Skill = React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.skill.name}</h3>
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        <p>{this.props.skill.details}</p>

        <button onClick={this.props.handleDelete}>
          Delete
        </button>
        <button onClick={this.props.handleEdit}>Edit</button>
      </div>
    )
  }
});
