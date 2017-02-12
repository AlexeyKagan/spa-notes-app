import React, {Component} from 'react';
import './ProjectSection.css';

export default class ProjectSection extends Component {

  state = {
    draggableItem: null
  };

  onDragStart = (e) => {

    const id = e.target.dataset.id;

    this.setState({ draggableItem: id});

    e.dataTransfer.setData('id', id);
  };

  onDragOver = (e) => e.preventDefault();

  onDragDrop = (e) => this.props.onDropProject(+e.dataTransfer.getData('id'), e.currentTarget.dataset.group);

  onDragEnd = () => this.setState({ draggableItem: null });

  render() {

    const data = this.props.data.filter(d => d.type === this.props.group);

    return (
      <section className="project-section"
               onDrop={this.onDragDrop}
               onDragOver={this.onDragOver}
               data-group={this.props.group}
      >
        <header className="project-section__header">
          <span>{this.props.caption}</span>
          <div>
            Total button : {data.length}
          </div>
        </header>

        <div className="project-section__list" >
          {
            data.map(d =>
              <div key={d.id}
                   data-id={d.id}
                   style={{backgroundColor: d.id == this.state.draggableItem ? 'rgba(0, 0, 0, 0.2)' : false}}
                   draggable="true"
                   onDragStart={this.onDragStart}
                   onDragEnd={this.onDragEnd}
              >
                {d.name}
              </div>
            )
          }
        </div>

      </section>
    )
  }
}

