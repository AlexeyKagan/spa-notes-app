import React from 'react';
import ProjectSection from './ProjectSection/ProjectSection.js';

let uniqId = 0;

class Editor extends React.Component {

  state = {
    value: '',
    projects: []
  };


  addTask = () => {
    console.log('this is:', this.state);

    this.setState({
      projects: [
        ...this.state.projects,
        {
          id: uniqId++,
          name: this.state.value,
          type: 'todo'
        }
      ],
      value: ''
    })
  };

  handleChange = event => {

    this.setState({ value: event.target.value })
  };


  getProjectsByType(type) {

    return this.state.projects.filter(d => d.type === type);
  }

  onDropProject = (id, group) => {
    const { projects } = this.state;

    this.setState({ projects: projects.map(project => project.id === id ? { ...project, type: group } : project)});
  };

  render() {
    return (
      <article>
        <div>
          <span> add project : </span>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.addTask}>Add</button>
        </div>
        <div>
          Total: {this.state.projects.length}
        </div>

        <article className="editor__projects">
          <ProjectSection caption="To do" data={this.state.projects} group="todo" onDropProject={this.onDropProject} />
          <ProjectSection caption="In Progress" data={this.state.projects} group="inProgress" onDropProject={this.onDropProject} />
          <ProjectSection caption="Done" data={this.state.projects} group="done" onDropProject={this.onDropProject} />
        </article>


      </article>
    )
  }

}

export default Editor;