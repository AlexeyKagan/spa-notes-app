import React, {Component} from 'react';
import './ProjectSection.css';

export default class ProjectSection extends Component {

  state = {
    draggableItem: null
  };

  render() {
    const {data:propsData, group, draggableItem} = this.props;
    const data = propsData.filter(d => d.type === group);

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
            data.map(({ id, name }) =>
              <div key={id}
                   data-id={id}
                   style={{backgroundColor: id == draggableItem ? 'rgba(0, 0, 0, 0.2)' : false}}
                   draggable="true"
                   onDragStart={this.onDragStart}
                   onDragEnd={this.onDragEnd}
              >
                {name}
              </div>
            )
          }
        </div>

      </section>
    )
  }


  onDragStart = (e) => {
    const id = e.target.dataset.id;

    this.setState({ draggableItem: id});

    e.dataTransfer.setData('id', id);
  };

  onDragOver = (e) => e.preventDefault();

  onDragDrop = (e) => this.props.onDropProject(+e.dataTransfer.getData('id'), e.currentTarget.dataset.group);

  onDragEnd = () => this.setState({ draggableItem: null });

}

