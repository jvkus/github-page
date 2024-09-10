import { useState } from 'react';
import './Contact.css';

const email = 'joannavkus+github@gmail.com';
const maskCharacter = '•';

// Referenced this blog post to build this
// https://kenanbek.medium.com/mask-email-addresses-with-custom-react-component-for-display-purposes-f066ed0c64b9

export default function Contact() {
	const [username, domain] = email.split('@');
	const [domainName, topLevelDomain] = domain.split('.');

	const maskedUsername = maskCharacter.repeat(username.length);
	const maskedDomainName = maskCharacter.repeat(domainName.length);
	const maskedTopLevelDomain = maskCharacter.repeat(topLevelDomain.length);

	const maskedEmail = `${maskedUsername}@${maskedDomainName}.${maskedTopLevelDomain}`;

	const [notVisible, setNotVisible] = useState(true);
	const [contactInfo, setContactInfo] = useState(maskedEmail);

	function handleClick() {
		if (notVisible) {
			setContactInfo(email);
		} else {
			setContactInfo(maskedEmail);
		}
		setNotVisible(!notVisible);
	}

	return (
		<div onClick={handleClick}>
			<div className="contactDescription">
				<span>Want to get in touch? Click to reveal my email.</span>
				<div className="contactInfo">{contactInfo}</div>
			</div>
		</div>
	);
}
