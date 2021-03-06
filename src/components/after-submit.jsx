/** @jsx React.DOM */

'use strict';

var React = require("react/addons");

module.exports = React.createClass({
    onClickNewTab: function() {
        var options = {
            "type": "launchNewTab",
            "id": this.props.response.id
        };

        this.sendMessage(options);
    },

    onClose: function() {
        window.close();
    },

    handleUndo: function() {
        var options = {
            "type": "delete",
            "id": this.props.response.id
        };

        this.sendMessage(options);
    },

    sendMessage: function(options) {
        chrome.runtime.sendMessage(options);

        // Necessary to reset to action form for popout mode
        this.props.backToGrid();
    },

    render: function() {
        var titleImage = "";
        var title = "";
        var subTitle = "";
        var resourceLink = "";
        var buttons = "";

        if (this.props.response) {
            titleImage = <div className="AfterSubmit-titleImage AfterSubmit-titleImage--success icon icon-utility-success"/>;
            title = <div className="AfterSubmit-title">Success</div>;
            subTitle = <div className="AfterSubmit-subtitle">You just created a <strong>{this.props.label}</strong>.</div>;
            buttons = (
                <div className="AfterSubmit-buttons">
                    <button className="AfterSubmit-button skin-Button is-error" onClick={this.handleUndo}><span className="fa fa-undo"/> Undo</button>
                    <button className="AfterSubmit-button skin-Button is-active" onClick={this.onClickNewTab}><span className="icon icon-utility-share"/> Open</button>
                </div>
            );
        } else {
            titleImage = <div className="AfterSubmit-titleImage AfterSubmit-titleImage--error icon icon-utility-error"/>;
            title = <div className="AfterSubmit-title">Error</div>;
            subTitle = <div className="AfterSubmit-subtitle">Your <strong>{this.props.label}</strong> was not created.</div>;
        }

        return (
            <div className="AfterSubmit">
            {titleImage}
            {title}
            {subTitle}
            {resourceLink}
            {buttons}
            </div>
            );
    }
});