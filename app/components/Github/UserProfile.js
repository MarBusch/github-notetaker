var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },    
    render: function(){
        console.log('BIO:', this.props.bio.name);
        return (
            <div> 
                <p> USER Profile! </p>
                <p> Username: {this.props.username} </p>
            </div>
        )
    }
});

module.exports = UserProfile;