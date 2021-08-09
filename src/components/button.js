import React from 'react';
import LanguageContext from '../contexts/languageContext';
import colorContext from '../contexts/colorContext';
class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <div>
                <colorContext.Consumer>{
                    (color) =>
                        <button className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {({ language }) => this.renderSubmit(language)}
                            </LanguageContext.Consumer>
                        </button>
                }
                </colorContext.Consumer>
            </div>
        )
    }
}

export default Button