import { useState } from "react";

const email = 'joannavkus+github@gmail.com';
const maskCharacter = '•';

// TODO: Style this
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
            setNotVisible(false);
        } else {
            setContactInfo(maskedEmail);
            setNotVisible(true);
        }
    }

    return (
        <div onClick={handleClick}>
            <p>
                Reveal email
            </p>
            {contactInfo}
        </div>
    );
}