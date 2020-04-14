import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import { compose } from 'redux';

import ProjectList from '../../components/ProjectList';

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            projectList: [
                {
                    code: 'PRO-001',
                    name: 'Project Name 01',
                    image: 'https://via.placeholder.com/250',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    link: '/'
                },
                {
                    code: 'PRO-002',
                    name: 'Project Name 02',
                    image: 'https://via.placeholder.com/250',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    link: '/'
                },
                {
                    code: 'PRO-003',
                    name: 'Project Name 03',
                    image: 'https://via.placeholder.com/250',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    link: '/'
                },
                {
                    code: 'PRO-004',
                    name: 'Project Name 04',
                    image: 'https://via.placeholder.com/250',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    link: '/'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <ProjectList
                        projectList={this.state.projectList}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
})

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
