const contact = (list) => {
  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('class', 'tabcontent');
  contactDiv.setAttribute('id', 'contact');

  const contactWrapper = document.createElement('div');
  contactWrapper.setAttribute('class', 'grid_contact');

  const contactTextArea = document.createElement('div');
  contactTextArea.setAttribute('class', 'contact_text_area');

  const contactTitle = document.createElement('h2');
  contactTitle.setAttribute('class', 'contact_title');
  contactTitle.innerHTML = 'Get in touch';

  const contactAdressCont = document.createElement('div');
  contactAdressCont.setAttribute('class', 'contact_elem_wrap');
  const contactAdressT = document.createElement('h3');
  contactAdressT.setAttribute('class', 'contact_elem_title');
  contactAdressT.innerHTML = 'Visit Us:';
  const contactAdressV = document.createElement('p');
  contactAdressV.setAttribute('class', 'contact_elem_value');
  contactAdressV.innerHTML = "<span>Mount Hiei,<span><br>Kyoto, 606-0000, Japan";
  contactAdressCont.append(contactAdressT, contactAdressV);

  const contactTelCont = document.createElement('div');
  contactTelCont.setAttribute('class', 'contact_elem_wrap');
  const contactTelT = document.createElement('h3');
  contactTelT.setAttribute('class', 'contact_elem_title');
  contactTelT.innerHTML = 'Give Us A Call:';
  const contactTelV = document.createElement('a');
  contactTelV.setAttribute('class', 'contact_elem_value');
  contactTelV.setAttribute('href', 'tel:+1234567891263');
  contactTelV.innerHTML = "+123 4567891263";
  contactTelCont.append(contactTelT, contactTelV);

  const contactEmailCont = document.createElement('div');
  contactEmailCont.setAttribute('class', 'contact_elem_wrap');
  const contactEmailT = document.createElement('h3');
  contactEmailT.setAttribute('class', 'contact_elem_title');
  contactEmailT.innerHTML = 'Email Us:';
  const contactEmailV = document.createElement('a');
  contactEmailV.setAttribute('class', 'contact_elem_value');
  contactEmailV.setAttribute('href', 'mailto:service@avocado-st.com');
  contactEmailV.innerHTML = "service@avocado-st.com";
  contactEmailCont.append(contactEmailT, contactEmailV);

  contactTextArea.append(contactTitle, contactAdressCont, contactTelCont, contactEmailCont);

  const contactSocialArea = document.createElement('div');
  contactSocialArea.setAttribute('class', 'contact_social_area');
  const socialMediaT = document.createElement('h3');
  socialMediaT.setAttribute('class', 'contact_elem_title');
  socialMediaT.innerHTML = 'Follow us:'
  const socialMediaWrap = document.createElement('ul');
  socialMediaWrap.setAttribute('class', 'social_media_wrap');
  for(let i = 0; i < list.length; i++ ) {
    let li = document.createElement('li');
    li.setAttribute('class', 'contact_social_link');
    li.append(list[i]);
    socialMediaWrap.append(li);
  };

  contactSocialArea.append(socialMediaT, socialMediaWrap);

  const contactMapArea  = document.createElement('div');
  contactMapArea.setAttribute('class', 'contact_map_area');
  contactMapArea.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52247.16561858881!2d135.80677966237747!3d35.070541234937274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010a26bf288311%3A0xe255a69c5e4cefef!2sMount%20Hiei!5e0!3m2!1sen!2sma!4v1608082885428!5m2!1sen!2sma" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

  contactWrapper.append(contactTextArea, contactSocialArea, contactMapArea);
  contactDiv.append(contactWrapper);

  return contactDiv;
}

export default contact;