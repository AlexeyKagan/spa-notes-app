import React from 'react';
import ProjectSection from './ProjectSection/ProjectSection.js';

let uniqId = 0;

export default class Editor extends React.Component {

  state = {
    value: '',
    projects: []
  };

  render() {
    const {value, projects} = this.state;
    return (
      <article>
        <div>
          <span> add project : </span>
          <input type="text" value={value} onChange={this.handleChange}/>
          <button onClick={this.addTask}>Add</button>
        </div>
        <div>
          Total: {projects.length}
        </div>

        <article className="editor__projects">
          <ProjectSection caption="To do" data={projects} group="todo" onDropProject={this.onDropProject} />
          <ProjectSection caption="In Progress" data={projects} group="inProgress" onDropProject={this.onDropProject} />
          <ProjectSection caption="Done" data={projects} group="done" onDropProject={this.onDropProject} />
        </article>

      </article>
    )
  }

  addTask = () => {

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

  handleChange = e => this.setState({ value: e.target.value });

  onDropProject = (id, group) => {
    const { projects } = this.state;

    this.setState({ projects: projects.map(project => project.id === id ? { ...project, type: group } : project)});
  };

}
