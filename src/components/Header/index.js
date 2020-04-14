import React, { Component } from 'react';
import './styles.scss';
import logoUrl from '../../assets/images/logo.png';
import {
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import i18n from '../../core/helpers/i18n';
import { compose } from 'redux';

class Header extends Component {

    constructor() {
        super();
        this.state = {}
    }

    changeLanguage = (lng) => {
        localStorage.removeItem('lng');
        localStorage.setItem('lng', lng);
        i18n.changeLanguage(lng);
    }

    render() {
        const {t} = this.props;

        return (         
            <header>   
                <div className="container">
                        <div className="main-header">
                            <div className="logo">
                                <h1><Link to="/"><img src={logoUrl} alt="Project Management"/></Link></h1>
                            </div>
                            <nav>
                                <ul>
                                    <li><Link to="/">{t('navigation.home')}</Link></li>
                                    <li><Link to="/about">{t('navigation.about')}</Link></li>
                                </ul>
                            </nav>
                            <div className="language-selector">
                                <ul>
                                    <li>
                                        <Link to="#" onClick={() => this.changeLanguage('en')} >
                                            <span>EN</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={() => this.changeLanguage('vi')}>
                                            <span>VI</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
