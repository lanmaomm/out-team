import React from 'react';

let Crumb = (props) => {
    return (
			<li className={props.className}>
					{
						props.href !== undefined ?
            			<a href={props.href}>{props.children}</a> :
									<span>{props.children}</span>	
					}
			</li>
		);
}

export default Crumb;
