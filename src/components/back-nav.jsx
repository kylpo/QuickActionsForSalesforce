/** @jsx React.DOM */

'use strict';

var React = require("react");

module.exports = React.createClass({
	getDefaultProps: function() {
		return {title: "Back"};
	},

    render: function() {
        return (
        	<div className="back-nav">
				<div className="icon icon-utility-back" onClick={this.props.onBackClicked}>
				</div>
				<div className="title">
					{ this.props.title }
				</div>
        	</div>
        );
    }
});
