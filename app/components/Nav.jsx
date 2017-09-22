var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return(
		<div>
			<span style={{fontWeight: 'bold'}}>React Weather</span>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get about </Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get examples </Link>
		</div>
	);
};

module.exports = Nav;
