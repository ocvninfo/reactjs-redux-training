import React from 'react';
import './styles.scss';
import { withTranslation } from "react-i18next";
import { compose } from 'redux';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {projectList} = this.props;

        return (
            <div className="project-list">
                <ul>
                    {projectList.map((item, key) => {
                        return (
                            <li key={key}>
                                <img src={item.image} alt=""/>
                                <h3><a href={item.link}>{item.name}</a></h3>
                                <span>{item.code}</span>
                                <p>{item.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default compose(
    withTranslation(),
)(ProjectList);
